using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data.Context;
using ProductionMove.Entities;
using ProductionMove.Helpers;
using ProductionMove.Models;
using ProductionMove.Models.Warehouse;

namespace ProductionMove.Services
{
    public interface IWarehouseService
    {
        Task<QueryResult<WarehouseResponse>> ListAsync(Paging query, int WardId);
        Task<WarehouseResponse> FindAsync(int id);
        Task<WarehouseResponse> CreateAsync(WarehouseRequest warehouse);
        Task<WarehouseResponse> UpdateAsync(int id, WarehouseRequest warehouse);
        Task<WarehouseResponse> DeleteAsync(int id);
    }

    public class WarehouseService : IWarehouseService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public WarehouseService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<QueryResult<WarehouseResponse>> ListAsync(Paging query, int WardId)
        {
            // AsNoTracking tells EF Core it doesn't need to
            // track changes on listed entities. Disabling entity
            // tracking makes the code a little faster
            IQueryable<Warehouse> queryable = _context.Warehouses.AsNoTracking();

            if (WardId > 0)
            {
                queryable = queryable.Where(p => p.WardId == WardId);
            }

            var result = await PaginatedList<Warehouse>.CreateAsync(queryable, query.PageNumber, query.PageSize);

            return _mapper.Map<QueryResult<Warehouse>, QueryResult<WarehouseResponse>>(result);
        }

        public async Task<WarehouseResponse> FindAsync(int id)
        {
            var warehouse = await _context.Warehouses.FindAsync(id);
            if (warehouse == null)
                throw new AppException("Warehouse not found");
            return _mapper.Map<WarehouseResponse>(warehouse);
        }

        public async Task<WarehouseResponse> CreateAsync(WarehouseRequest model)
        {
            var warehouse = _mapper.Map<Warehouse>(model);

            await _context.Warehouses.AddAsync(warehouse);
            await _context.SaveChangesAsync();

            return _mapper.Map<WarehouseResponse>(warehouse);
        }

        public async Task<WarehouseResponse> UpdateAsync(int id, WarehouseRequest model)
        {
            var warehouse = await FindAsync(id);

            _mapper.Map(model, warehouse);
            _context.Warehouses.Update(_mapper.Map<Warehouse>(warehouse));
            await _context.SaveChangesAsync();

            return warehouse;
        }

        public async Task<WarehouseResponse> DeleteAsync(int id)
        {
            var warehouse = await FindAsync(id);

            _context.Warehouses.Remove(_mapper.Map<Warehouse>(warehouse));
            await _context.SaveChangesAsync();

            return warehouse;
        }
    }
}
