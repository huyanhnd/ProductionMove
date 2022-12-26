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
                        /*join f in _context.Factories on p.FactoryId equals f.Id
                        join s in _context.Stores on p.StoreId equals s.Id
                        join sc in _context.ServiceCenters on p.ServiceCenterId equals sc.Id
                        join pc in _context.Processes on p.ProcessId equals pc.Id*/
                        select new ProductResponse
                        {
                            Id = p.Id,
                            Code = p.Code,
                            Name = pl.Name,
                            ProductLineId = pl.Id,
                            Capacity = p.Capacity,
                            Color = p.Color,
                            ManufactureDate = p.ManufactureDate,
                            Status = p.Status.ToString(),
                            WarrantyPeriod = p.WarrantyPeriod,
                            Price = p.Price,
                            FactoryId = p.FactoryId,
                            StoreId = p.StoreId,
                            ServiceCenterId = p.ServiceCenterId,
                            ProcessId = p.ProcessId,
                        });

            if (query.FactoryId != 0)
            {
                jointable = jointable.Where(p => p.FactoryId == query.FactoryId);
            }
            else if (query.StoreId != 0)
            {
                jointable = jointable.Where(p => p.StoreId == query.StoreId);
            }
            else if (query.ServiceCenterId != 0)
            {
                jointable = jointable.Where(p => p.ServiceCenterId == query.ServiceCenterId);
            };

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

        private async Task<Product> FindAsync(string code)
        {
            var productLine = await _context.Products.FindAsync(code);
            if (productLine == null) throw new KeyNotFoundException("Product not found");
            return productLine;
        }

        private async Task<Product> findProductByCodeAsync(string code)
        {
            var product = await _context.Products.SingleOrDefaultAsync(p => p.Code == code);
            if (product == null) throw new AppException("Invalid code");
            return product;
        }
    }
}
