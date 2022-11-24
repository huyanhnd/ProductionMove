using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductionMove.Models.Accounts;
using ProductionMove.Services;

namespace ProductionMove.Controllers
{
    public class AddressController : ControllerBase
    {
        private readonly IAddressService _addressService;
        public AddressController(IAddressService addressService)
        {
            _addressService = addressService;
        }

        [HttpGet("provinces")]
        public IActionResult GetAllProvinces()
        {
            {
                var result = _addressService.GetAllProvince();
                return Ok(result);
            }
        }

        [HttpGet("dictricts")]
        public IActionResult GetDictrictByProvince(int provinceId)
        {
            {
                var result = _addressService.GetDistrictByProvince(provinceId);
                return Ok(result);
            }
        }

        [HttpGet("wards")]
        public IActionResult GetWardByDistrict(int districtId)
        {
            {
                var result = _addressService.GetWardByDistrict(districtId);
                return Ok(result);
            }
        }
    }
}
