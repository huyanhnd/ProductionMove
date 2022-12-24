using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using ProductionMove.Data;
using ProductionMove.Data.Context;
using ProductionMove.Helpers;
using ProductionMove.Models;
using ProductionMove.ViewModels;
using ProductionMove.ViewModels.Factory;
using ProductionMove.ViewModels.ProductModel;

namespace ProductionMove.Services
{
    public interface IProductService
    {
        Task<QueryResult<ProductResponse>> ListAsync(ProductQuery query);
        Task<ProductResponse> FindByCodeAsync(string code);
        Task CreateAsync(ProductRequest model, int quantity);
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
            var jointable = _context.Products
                        .Join(_context.Factories, product => product.FactoryId, factory => factory.Id, (product, factory) => new { product, factory })
                        .Join(_context.Stores, productFactory => productFactory.product.StoreId, store => store.Id, (productFactory, store) => new { productFactory, store })
                        .Select(m => new ProductResponse
                        {
                            Id = m.productFactory.product.Id,
                            Code = m.productFactory.product.Code,
                            ProductLineId = m.productFactory.product.ProductLineId,
                            Capacity = m.productFactory.product.Capacity,
                            Color = m.productFactory.product.Color,
                            ManufactureDate = m.productFactory.product.ManufactureDate,
                            Status = m.productFactory.product.Status,
                            WarrantyPeriod = m.productFactory.product.Status,
                            FactoryId = m.productFactory.factory.Id,
                            StoreId = m.store.Id,
                            ServiceCenterId = 0,
                            ProcessId = 0,
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

        public async Task CreateAsync(ProductRequest model, int quantity)
        {
            var models = new ProductRequest[quantity];
            Array.Fill(models, model);

            var products = new Product[quantity];

            for(int i=0; i< quantity; i++)
            {
                products[i] = _mapper.Map<Product>(models[i]);
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
