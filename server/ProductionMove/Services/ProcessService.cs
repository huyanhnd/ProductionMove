using AutoMapper;
using ProductionMove.Data.Context;
using ProductionMove.Data;
using ProductionMove.Models;
using ProductionMove.ViewModels.ProcessModel;
using ProductionMove.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace ProductionMove.Services
{
    public interface IProcessService
    {
        Task<QueryResult<ProcessResponse>> ListAsync(Paging query);
        Task<ProcessResponse> FindByIdAsync(int id);
        Task<ProcessResponse> CreateAsync(ProcessRequest process);
        Task<ProcessResponse> UpdateAsync(int id, ProcessRequest process);
        Task DeleteAsync(int id);
    }
    public class ProcessService : IProcessService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ProcessService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<QueryResult<ProcessResponse>> ListAsync(Paging query)
        {
            IQueryable<Product> queryable = _context.Products.AsNoTracking();

            /*           if (seriesId > 0)
                       {
                           queryable = queryable.Where(p => p.SeriesId == seriesId);
                       }*/

            var result = await PaginatedList<Product>.CreateAsync(queryable, query.PageNumber, query.PageSize);

            return _mapper.Map<QueryResult<Product>, QueryResult<ProcessResponse>>(result);
        }

        public async Task<ProcessResponse> FindByIdAsync(int id)
        {
            var productLine = await FindAsync(id);
            return _mapper.Map<ProcessResponse>(productLine);
        }

        public async Task<ProcessResponse> CreateAsync(ProcessRequest model)
        {
            var productLine = _mapper.Map<Product>(model);

            await _context.Products.AddAsync(productLine);
            await _context.SaveChangesAsync();

            return _mapper.Map<ProcessResponse>(productLine);
        }

        public async Task<ProcessResponse> UpdateAsync(int id, ProcessRequest process)
        {
            var productLine = await FindAsync(id);

            _mapper.Map(process, productLine);
            _context.Products.Update(productLine);
            await _context.SaveChangesAsync();

            return _mapper.Map<ProcessResponse>(productLine);
        }

        public async Task DeleteAsync(int id)
        {
            var productLine = await FindAsync(id);
            _context.Products.Remove(productLine);
            await _context.SaveChangesAsync();
        }

        private async Task<Product> FindAsync(int id)
        {
            var productLine = await _context.Products.FindAsync(id);
            if (productLine == null) throw new KeyNotFoundException("Process not found");
            return productLine;
        }
    }
}
