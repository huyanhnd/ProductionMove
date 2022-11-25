using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data.Context;
using ProductionMove.Entities;
using ProductionMove.Helpers;
using ProductionMove.Models;
using ProductionMove.Models.Factory;

namespace ProductionMove.Services
{
    public interface IFactoryService
    {
        Task<QueryResult<FactoryResponse>> ListAsync(Paging query, int WardId);
        Task<FactoryResponse> FindAsync(int id);
        Task<FactoryResponse> CreateAsync(FactoryRequest product);
        Task<FactoryResponse> UpdateAsync(int id, FactoryRequest product);
        Task<FactoryResponse> DeleteAsync(int id);
    }

    public class FactoryService : IFactoryService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public FactoryService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<QueryResult<FactoryResponse>> ListAsync(Paging query, int WardId)
        {
            // AsNoTracking tells EF Core it doesn't need to
            // track changes on listed entities. Disabling entity
            // tracking makes the code a little faster
            IQueryable<Factory> queryable = _context.Factories.AsNoTracking();

            if (WardId > 0)
            {
                queryable = queryable.Where(p => p.WardId == WardId);
            }

            var result = await PaginatedList<Factory>.CreateAsync(queryable, query.PageNumber, query.PageSize);

            return _mapper.Map<QueryResult<Factory>, QueryResult<FactoryResponse>>(result);
        }

        public async Task<FactoryResponse> FindAsync(int id)
        {
            var factory = await _context.Factories.FindAsync(id);
            if (factory == null)
                throw new AppException("Factory not found");
            return _mapper.Map<FactoryResponse>(factory);
        }

        public async Task<FactoryResponse> CreateAsync(FactoryRequest model)
        {
            var factory = _mapper.Map<Factory>(model);

            await _context.Factories.AddAsync(factory);
            await _context.SaveChangesAsync();

            return _mapper.Map<FactoryResponse>(factory);
        }

        public async Task<FactoryResponse> UpdateAsync(int id, FactoryRequest model)
        {
            var factory = await FindAsync(id);

            _mapper.Map(model, factory);
            _context.Factories.Update(_mapper.Map<Factory>(factory));
            await _context.SaveChangesAsync();

            return factory;
        }

        public async Task<FactoryResponse> DeleteAsync(int id)
        {
            var factory = await FindAsync(id);

            _context.Factories.Remove(_mapper.Map<Factory>(factory));
            await _context.SaveChangesAsync();

            return factory;
        }
    }
}
