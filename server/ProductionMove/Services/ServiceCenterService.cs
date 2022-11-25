using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data.Context;
using ProductionMove.Entities;
using ProductionMove.Helpers;
using ProductionMove.Models;
using ProductionMove.Models.ServiceCenter;

namespace ProductionMove.Services
{
    public interface IServiceCenterService
    {
        Task<QueryResult<ServiceCenterResponse>> ListAsync(Paging query, int WardId);
        Task<ServiceCenterResponse> FindAsync(int id);
        Task<ServiceCenterResponse> CreateAsync(ServiceCenterRequest serviceCenter);
        Task<ServiceCenterResponse> UpdateAsync(int id, ServiceCenterRequest serviceCenter);
        Task<ServiceCenterResponse> DeleteAsync(int id);
    }

    public class ServiceCenterService : IServiceCenterService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ServiceCenterService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<QueryResult<ServiceCenterResponse>> ListAsync(Paging query, int WardId)
        {
            // AsNoTracking tells EF Core it doesn't need to
            // track changes on listed entities. Disabling entity
            // tracking makes the code a little faster
            IQueryable<ServiceCenter> queryable = _context.ServiceCenters.AsNoTracking();

            if (WardId > 0)
            {
                queryable = queryable.Where(p => p.WardId == WardId);
            }

            var result = await PaginatedList<ServiceCenter>.CreateAsync(queryable, query.PageNumber, query.PageSize);

            return _mapper.Map<QueryResult<ServiceCenter>, QueryResult<ServiceCenterResponse>>(result);
        }

        public async Task<ServiceCenterResponse> FindAsync(int id)
        {
            var serviceCenter = await _context.ServiceCenters.FindAsync(id);
            if (serviceCenter == null)
                throw new AppException("Factory not found");
            return _mapper.Map<ServiceCenterResponse>(serviceCenter);
        }

        public async Task<ServiceCenterResponse> CreateAsync(ServiceCenterRequest model)
        {
            var serviceCenter = _mapper.Map<ServiceCenter>(model);

            await _context.ServiceCenters.AddAsync(serviceCenter);
            await _context.SaveChangesAsync();

            return _mapper.Map<ServiceCenterResponse>(serviceCenter);
        }

        public async Task<ServiceCenterResponse> UpdateAsync(int id, ServiceCenterRequest model)
        {
            var serviceCenter = await FindAsync(id);

            _mapper.Map(model, serviceCenter);
            _context.ServiceCenters.Update(_mapper.Map<ServiceCenter>(serviceCenter));
            await _context.SaveChangesAsync();

            return serviceCenter;
        }

        public async Task<ServiceCenterResponse> DeleteAsync(int id)
        {
            var serviceCenter = await FindAsync(id);

            _context.ServiceCenters.Remove(_mapper.Map<ServiceCenter>(serviceCenter));
            await _context.SaveChangesAsync();

            return serviceCenter;
        }
    }
}
