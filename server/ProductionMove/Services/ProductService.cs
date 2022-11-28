using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data;
using ProductionMove.Data.Context;
using ProductionMove.Models;
using ProductionMove.ViewModels;
using ProductionMove.ViewModels.Product;

namespace ProductionMove.Services
{
    public interface IProductService
    {
        Task<QueryResult<ProductResponse>> ListAsync(Paging query, int seriesId);
        Task<ProductResponse> FindByIdAsync(string code);
        Task<ProductResponse> CreateAsync(ProductRequest product);
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

        public async Task<QueryResult<ProductResponse>> ListAsync(Paging query, int seriesId)
        {
            IQueryable<Product> queryable = _context.Products.AsNoTracking();

 /*           if (seriesId > 0)
            {
                queryable = queryable.Where(p => p.SeriesId == seriesId);
            }*/

            var result = await PaginatedList<Product>.CreateAsync(queryable, query.PageNumber, query.PageSize);

            return _mapper.Map<QueryResult<Product>, QueryResult<ProductResponse>>(result);
        }

        public async Task<ProductResponse> FindByIdAsync(string code)
        {
            var productLine = await FindAsync(code);
            return _mapper.Map<ProductResponse>(productLine);
        }

        public async Task<ProductResponse> CreateAsync(ProductRequest model)
        {
            var productLine = _mapper.Map<Product>(model);

            await _context.Products.AddAsync(productLine);
            await _context.SaveChangesAsync();

            return _mapper.Map<ProductResponse>(productLine);
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
    }
}
