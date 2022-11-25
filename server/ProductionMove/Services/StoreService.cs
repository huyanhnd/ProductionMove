using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data.Context;
using ProductionMove.Entities;
using ProductionMove.Helpers;
using ProductionMove.Models;
using ProductionMove.Models.Store;

namespace ProductionMove.Services
{
    public interface IStoreService
    {
        Task<QueryResult<StoreResponse>> ListAsync(Paging query, int WardId);
        Task<StoreResponse> FindAsync(int id);
        Task<StoreResponse> CreateAsync(StoreRequest product);
        Task<StoreResponse> UpdateAsync(int id, StoreRequest product);
        Task<StoreResponse> DeleteAsync(int id);
    }

    public class StoreService : IStoreService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public StoreService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<QueryResult<StoreResponse>> ListAsync(Paging query, int WardId)
        {
            // AsNoTracking tells EF Core it doesn't need to
            // track changes on listed entities. Disabling entity
            // tracking makes the code a little faster
            IQueryable<Store> queryable = _context.Stores.AsNoTracking();

            if (WardId > 0)
            {
                queryable = queryable.Where(p => p.WardId == WardId);
            }

            var result = await PaginatedList<Store>.CreateAsync(queryable, query.PageNumber, query.PageSize);

            return _mapper.Map<QueryResult<Store>, QueryResult<StoreResponse>>(result);
        }

        public async Task<StoreResponse> FindAsync(int id)
        {
            var store = await _context.Stores.FindAsync(id);
            if (store == null)
                throw new AppException("Factory not found");
            return _mapper.Map<StoreResponse>(store);
        }

        public async Task<StoreResponse> CreateAsync(StoreRequest model)
        {
            var store = _mapper.Map<Store>(model);

            await _context.Stores.AddAsync(store);
            await _context.SaveChangesAsync();

            return _mapper.Map<StoreResponse>(store);
        }

        public async Task<StoreResponse> UpdateAsync(int id, StoreRequest model)
        {
            var store = await FindAsync(id);

            _mapper.Map(model, store);
            _context.Stores.Update(_mapper.Map<Store>(store));
            await _context.SaveChangesAsync();

            return store;
        }

        public async Task<StoreResponse> DeleteAsync(int id)
        {
            var store = await FindAsync(id);

            _context.Stores.Remove(_mapper.Map<Store>(store));
            await _context.SaveChangesAsync();

            return store;
        }
    }
}
