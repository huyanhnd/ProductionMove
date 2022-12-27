using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data.Context;
using ProductionMove.Models;
using ProductionMove.Helpers;
using ProductionMove.ViewModels.Store;
using ProductionMove.ViewModels;
using Newtonsoft.Json.Linq;
using ProductionMove.ViewModels.Accounts;
using System.Security.Principal;
using ProductionMove.ViewModels.ProductModel;

namespace ProductionMove.Services
{
    public interface IStoreService
    {
        Task<QueryResult<StoreResponse>> ListAsync(StoreQuery query);
        Task<StoreResponse> FindAsync(int id);
        Task<StoreResponse> CreateAsync(StoreRequest model);
        Task<StoreResponse> UpdateAsync(int id, StoreRequest model);
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

        public async Task<QueryResult<StoreResponse>> ListAsync(StoreQuery query)
        {
            var jointable = _context.Stores
                        .Join(_context.Wards, s => s.WardCode, ward => ward.Code, (s, ward) => new { s, ward })
                        .Join(_context.Districts, sw => sw.ward.DistrictCode, dictrict => dictrict.Code, (sw, dictrict) => new { sw, dictrict })
                        .Select(m => new StoreResponse
                        {
                            Id = m.sw.s.Id,
                            Name = m.sw.s.Name,
                            Address = m.sw.s.Address,
                            WardCode = m.sw.ward.Code,
                            DistrictCode = m.dictrict.Code,
                            ProvinceCode = m.dictrict.ProvinceCode
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

            var result = await PaginatedList<StoreResponse>.CreateAsync(jointable, query.PageNumber, query.PageSize);

            return result;
        }

        public async Task<StoreResponse> FindAsync(int id)
        {
            var store = await _context.Stores.FindAsync(id);
            if (store == null)
                throw new AppException("Store not found");
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
