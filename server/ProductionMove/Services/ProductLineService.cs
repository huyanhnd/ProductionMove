using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data;
using ProductionMove.Data.Context;
using ProductionMove.Models;
using ProductionMove.ViewModels;
using ProductionMove.ViewModels.ProductLine;

namespace ProductionMove.Services
{
    public interface IProductLineService
    {
        Task<QueryResult<ProductLineResponse>> ListAsync(Paging query, int seriesId);
        Task<ProductLineResponse> FindByIdAsync(string code);
        Task<ProductLineResponse> CreateAsync(ProductLineRequest factory);
        Task<ProductLineResponse> UpdateAsync(string code, ProductLineRequest factory);
        Task DeleteAsync(string code);
    }
    public class ProductLineService : IProductLineService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ProductLineService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<QueryResult<ProductLineResponse>> ListAsync(Paging query, int seriesId)
        {
            IQueryable<ProductLine> queryable = _context.ProductLines.AsNoTracking();

            if (seriesId > 0)
            {
                queryable = queryable.Where(p => p.SeriesId == seriesId);
            }

            var result = await PaginatedList<ProductLine>.CreateAsync(queryable, query.PageNumber, query.PageSize);

            return _mapper.Map<QueryResult<ProductLine>, QueryResult<ProductLineResponse>>(result);
        }

        public async Task<ProductLineResponse> FindByIdAsync(string code)
        {
            var productLine = await FindAsync(code);
            return _mapper.Map<ProductLineResponse>(productLine);
        }

        public async Task<ProductLineResponse> CreateAsync(ProductLineRequest model)
        {
            var productLine = _mapper.Map<ProductLine>(model);

            await _context.ProductLines.AddAsync(productLine);
            await _context.SaveChangesAsync();

            return _mapper.Map<ProductLineResponse>(productLine);
        }

        public async Task<ProductLineResponse> UpdateAsync(string code, ProductLineRequest model)
        {
            var productLine = await FindAsync(code);

            _mapper.Map(model, productLine);
            _context.ProductLines.Update(productLine);
            await _context.SaveChangesAsync();

            return _mapper.Map<ProductLineResponse>(productLine);
        }

        public async Task DeleteAsync(string code)
        {
            var productLine = await FindAsync(code);
            _context.ProductLines.Remove(productLine);
            await _context.SaveChangesAsync();
        }

        private async Task<ProductLine> FindAsync(string code)
        {
            var productLine = await _context.ProductLines.FindAsync(code);
            if (productLine == null) throw new KeyNotFoundException("Product not found");
            return productLine;
        }
    }
}
