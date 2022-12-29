using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data.Context;
using ProductionMove.Helpers;
using ProductionMove.Models;
using ProductionMove.ViewModels;
using ProductionMove.ViewModels.ProductModel;

namespace ProductionMove.Services
{
    public interface IProductService
    {
        Task<QueryResult<ProductResponse>> ListAsync(ProductQuery query);
        Task<ProductResponse> FindByCodeAsync(string code);
        Task CreateAsync(ProductRequest model);
        Task ApprovedExportAsync(List<int> ProductIds, int ProcessId);
        Task SoldProductAsync(string code);
        Task ReturnErrorToFatory(string code);
        Task<ProductResponse> UpdateAsync(string code, ProductRequest product);
        Task DeleteAsync(string code);
    }
    public class ProductService : IProductService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ProductService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<QueryResult<ProductResponse>> ListAsync(ProductQuery query)
        {
            var jointable = (from p in _context.Products
                             join pl in _context.ProductLines on p.ProductLineId equals pl.Id
                             join f in _context.Factories on p.FactoryId equals f.Id
                             join s in _context.Stores on p.StoreId equals s.Id
                             join sc in _context.ServiceCenters on p.ServiceCenterId equals sc.Id
                             join pc in _context.Processes on p.ProcessId equals pc.Id
                             select new ProductResponse
                             {
                                 Id = p.Id,
                                 Code = p.Code,
                                 Name = pl.Name,
                                 ProductLineId = pl.Id,
                                 Capacity = p.Capacity,
                                 Color = p.Color,
                                 ManufactureDate = p.ManufactureDate,
                                 Status = p.Status,
                                 WarrantyPeriod = p.WarrantyPeriod,
                                 Price = p.Price,
                                 FactoryId = p.FactoryId,
                                 StoreId = p.StoreId,
                                 ServiceCenterId = p.ServiceCenterId,
                                 ProcessId = p.ProcessId,
                                 FactoryName = f.Name,
                                 StoreName = s.Name,
                                 ServiceCenterName = sc.Name,
                             });

            if (query.FactoryId != 0)
            {
                jointable = jointable.Where(p => p.FactoryId == query.FactoryId);
            }

            if (query.StoreId != 0)
            {
                jointable = jointable.Where(p => p.StoreId == query.StoreId);
            }

            if (query.ServiceCenterId != 0)
            {
                jointable = jointable.Where(p => p.ServiceCenterId == query.ServiceCenterId);
            }

            if (query.Status != ProductStatus.All)
            {
                jointable = jointable.Where(p => p.Status == query.Status);
            };

            if (query.ProductLineId != 0)
            {
                jointable = jointable.Where(p => p.ProductLineId == query.ProductLineId);
            }

            if (query.Color != ProductColor.All)
            {
                jointable = jointable.Where(p => p.Color == query.Color);
            }

            if (query.Capacity != "")
            {
                jointable = jointable.Where(p => p.Capacity == query.Capacity);
            }

            var result = await PaginatedList<ProductResponse>.CreateAsync(jointable, query.PageNumber, query.PageSize);

            return result;
        }

        public async Task<ProductResponse> FindByCodeAsync(string code)
        {
            var product = await findProductByCodeAsync(code);
            return _mapper.Map<ProductResponse>(product);
        }

        public async Task CreateAsync(ProductRequest model)
        {
            var models = new ProductRequest[model.Quantity];
            Array.Fill(models, model);

            var products = new Product[model.Quantity];

            for (int i = 0; i < model.Quantity; i++)
            {
                products[i] = _mapper.Map<Product>(models[i]);
                products[i].ManufactureDate = DateTime.UtcNow;
            }

            await _context.Products.AddRangeAsync(products);
            await _context.SaveChangesAsync();
        }

        public async Task<ProductResponse> UpdateAsync(string code, ProductRequest model)
        {
            var productLine = await FindAsync(code);

            _mapper.Map(model, productLine);
            _context.Products.Update(productLine);
            await _context.SaveChangesAsync();

            return _mapper.Map<ProductResponse>(productLine);
        }

        public async Task DeleteAsync(string code)
        {
            var productLine = await FindAsync(code);
            _context.Products.Remove(productLine);
            await _context.SaveChangesAsync();
        }

        public async Task ApprovedExportAsync(List<int> ProductIds, int processId)
        {
            var selected = _context.Products.Where(u => ProductIds.Contains(u.Id));

            foreach (Product p in selected)
            {
                p.Status = ProductStatus.InStore;
                p.ProcessId = processId;
            }

            await _context.SaveChangesAsync();
        }

        public async Task SoldProductAsync(string code)
        {
            var product = await _context.Products.SingleOrDefaultAsync(p => p.Code == code);
            if (product == null) throw new AppException("Invalid code");
            product.Status = ProductStatus.Sold;
            await _context.SaveChangesAsync();
        }

        private async Task<Product> FindAsync(string code)
        {
            var product = await _context.Products.FindAsync(code);
            if (product == null) throw new KeyNotFoundException("Product not found");
            return product;
        }

        private async Task<Product> findProductByCodeAsync(string code)
        {
            var product = await _context.Products.SingleOrDefaultAsync(p => p.Code == code);
            if (product == null) throw new AppException("Invalid code");
            return product;
        }

        public async Task ReturnErrorToFatory(string code)
        {
            var product = await _context.Products.SingleOrDefaultAsync(p => p.Code == code);
            if (product == null) throw new AppException("Invalid code");
            product.Status = ProductStatus.Error;
            await _context.SaveChangesAsync();
        }
    }
}
