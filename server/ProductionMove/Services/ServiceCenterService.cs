using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data.Context;
using ProductionMove.Models;
using ProductionMove.Helpers;
using ProductionMove.ViewModels.ServiceCenter;
using ProductionMove.ViewModels;
using Newtonsoft.Json.Linq;
using ProductionMove.ViewModels.Accounts;
using System.Security.Principal;
using ProductionMove.ViewModels.ProductModel;

namespace ProductionMove.Services
{
    public interface IServiceCenterService
    {
        Task<QueryResult<ServiceCenterResponse>> ListAsync(ServiceCenterQuery query);
        Task<ServiceCenterResponse> FindAsync(int id);
        Task<ServiceCenterResponse> CreateAsync(ServiceCenterRequest ServiceCenter);
        Task<ServiceCenterResponse> UpdateAsync(int id, ServiceCenterRequest ServiceCenter);
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

        public async Task<QueryResult<ServiceCenterResponse>> ListAsync(ServiceCenterQuery query)
        {
            var jointable = _context.ServiceCenters
                        .Join(_context.Wards, s => s.WardCode, ward => ward.Code, (s, ward) => new { s, ward })
                        .Join(_context.Districts, sw => sw.ward.DistrictCode, dictrict => dictrict.Code, (sw, dictrict) => new { sw, dictrict })
                        .Select(m => new ServiceCenterResponse
                        {
                            Id = m.sw.s.Id,
                            Name = m.sw.s.Name,
                            Address = m.sw.s.Address,
                            WardCode = m.sw.ward.Code,
                            DistrictCode = m.dictrict.Code,
                            ProvinceCode = m.dictrict.ProvinceCode,
                            AccountId = m.sw.s.AccountId
                        });

            if (query.WardCode != "")
            {
                jointable = jointable.Where(p => p.WardCode == query.WardCode);
            }
            else if (query.DistrictCode != "")
            {
                jointable = jointable.Where(p => p.DistrictCode == query.DistrictCode);
            }
            else if (query.ProvinceCode != "")
            {
                jointable = jointable.Where(p => p.ProvinceCode == query.ProvinceCode);
            };

            var result = await PaginatedList<ServiceCenterResponse>.CreateAsync(jointable, query.PageNumber, query.PageSize);

            return result;
        }

        public async Task<ServiceCenterResponse> FindAsync(int id)
        {
            var store = await _context.ServiceCenters.FindAsync(id);
            if (store == null)
                throw new AppException("ServiceCenter not found");
            return _mapper.Map<ServiceCenterResponse>(store);
        }

        public async Task<ServiceCenterResponse> CreateAsync(ServiceCenterRequest model)
        {
            var store = _mapper.Map<ServiceCenter>(model);

            await _context.ServiceCenters.AddAsync(store);
            await _context.SaveChangesAsync();

            return _mapper.Map<ServiceCenterResponse>(store);
        }

        public async Task<ServiceCenterResponse> UpdateAsync(int id, ServiceCenterRequest model)
        {
            var store = await FindAsync(id);

            _mapper.Map(model, store);
            _context.ServiceCenters.Update(_mapper.Map<ServiceCenter>(store));
            await _context.SaveChangesAsync();

            return store;
        }

        public async Task<ServiceCenterResponse> DeleteAsync(int id)
        {
            var store = await FindAsync(id);

            _context.ServiceCenters.Remove(_mapper.Map<ServiceCenter>(store));
            await _context.SaveChangesAsync();

            return store;
        }
    }
}
