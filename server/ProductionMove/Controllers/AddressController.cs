using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductionMove.ViewModels.Accounts;
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

        [HttpGet("districts")]
        public IActionResult GetDistrictByProvince(string provinceCode)
        {
            {
                var result = _addressService.GetDistrictByProvince(provinceCode);
                return Ok(result);
            }
        }

        [HttpGet("wards")]
        public IActionResult GetWardByDistrict(string districtCode)
        {
            {
                var result = _addressService.GetWardByDistrict(districtCode);
                return Ok(result);
            }
        }
    }
}
