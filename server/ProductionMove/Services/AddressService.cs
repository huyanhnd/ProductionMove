using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data.Context;
using ProductionMove.ViewModels.Accounts;
using ProductionMove.ViewModels.Address;
using System.Linq;

namespace ProductionMove.Services
{
    public interface IAddressService
    {
        IEnumerable<ProvinceResponse> GetAllProvince();
        IEnumerable<DistrictResponse> GetDistrictByProvince(string provinceCode);
        IEnumerable<WardResponse> GetWardByDistrict(string districtCode);
    }

    public class AddressService : IAddressService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public AddressService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public IEnumerable<ProvinceResponse> GetAllProvince()
        {
            var provinces = _context.Provinces;
            return _mapper.Map<IList<ProvinceResponse>>(provinces);
        }

        public IEnumerable<DistrictResponse> GetDistrictByProvince(string provinceCode)
        {
            var districts = _context.Districts.Where(x => x.ProvinceCode == provinceCode);
            return _mapper.Map<IList<DistrictResponse>>(districts);
        }

        public IEnumerable<WardResponse> GetWardByDistrict(string districtCode)
        {
            var wards = _context.Wards.Where(x => x.DistrictCode == districtCode);
            return _mapper.Map<IList<WardResponse>>(wards);
        }
    }
}
