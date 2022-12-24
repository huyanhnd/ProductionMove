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
        Task<ProductLineResponse> FindByIdAsync(int id);
        Task<ProductLineResponse> CreateAsync(ProductLineRequest factory);
        Task<ProductLineResponse> UpdateAsync(int id, ProductLineRequest factory);
        Task DeleteAsync(int id);
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

        public async Task<ProductLineResponse> FindByIdAsync(int id)
        {
            var productLine = await FindAsync(id);
            return _mapper.Map<ProductLineResponse>(productLine);
        }

        public async Task<ProductLineResponse> CreateAsync(ProductLineRequest model)
        {
            var productLine = _mapper.Map<ProductLine>(model);

            await _context.ProductLines.AddAsync(productLine);
            await _context.SaveChangesAsync();

            return _mapper.Map<ProductLineResponse>(productLine);
        }

        public async Task<ProductLineResponse> UpdateAsync(int id, ProductLineRequest model)
        {
            var productLine = await FindAsync(id);

            _mapper.Map(model, productLine);
            _context.ProductLines.Update(productLine);
            await _context.SaveChangesAsync();

            return _mapper.Map<ProductLineResponse>(productLine);
        }

        public async Task DeleteAsync(int id)
        {
            var productLine = await FindAsync(id);
            _context.ProductLines.Remove(productLine);
            await _context.SaveChangesAsync();
        }

        private async Task<ProductLine> FindAsync(int id)
        {
            var productLine = await _context.ProductLines.FindAsync(id);
            if (productLine == null) throw new KeyNotFoundException("Product not found");
            return productLine;
        }
    }
}
