using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data.Context;
using ProductionMove.Models;
using ProductionMove.Helpers;
using ProductionMove.ViewModels.Factory;
using ProductionMove.ViewModels;

namespace ProductionMove.Services
{
    public interface IFactoryService
    {
        Task<QueryResult<FactoryResponse>> ListAsync(FactoryQuery query);
        Task<FactoryResponse> FindAsync(int id);
        Task<FactoryResponse> CreateAsync(FactoryRequest factory);
        Task<FactoryResponse> UpdateAsync(int id, FactoryRequest factory);
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

        public async Task<QueryResult<FactoryResponse>> ListAsync(FactoryQuery query)
        {
            var jointable = _context.Factories
                        .Join(_context.Wards, factory => factory.WardCode, ward => ward.Code, (factory, ward) => new { factory, ward })
                        .Join(_context.Districts, factoryWard => factoryWard.ward.DistrictCode, dictrict => dictrict.Code, (factoryWard, dictrict) => new { factoryWard, dictrict })
                        .Select(m => new FactoryResponse
                        {
                            Id = m.factoryWard.factory.Id,
                            Name = m.factoryWard.factory.Name,
                            Address = m.factoryWard.factory.Address,
                            WardCode = m.factoryWard.ward.Code,
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

            var result = await PaginatedList<FactoryResponse>.CreateAsync(jointable, query.PageNumber, query.PageSize);

            return result;
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
