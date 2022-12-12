using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProductionMove.Controllers;
using ProductionMove.Models;
using ProductionMove.ViewModels.ServiceCenter;
using ProductionMove.Services;
using ProductionMove.ViewModels;

namespace Supermarket.API.Controllers
{
    public class ServiceCenterController : BaseController
    {
        private readonly IServiceCenterService _serviceCenterService;

        public ServiceCenterController(IServiceCenterService serviceCenterService)
        {
            _serviceCenterService = serviceCenterService;
        }

        [HttpGet]
        public async Task<IActionResult> ListAsync([FromQuery] ServiceCenterQuery query)
        {
            var fatories = await _serviceCenterService.ListAsync(query);
            return Ok(fatories);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _serviceCenterService.FindAsync(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] ServiceCenterRequest model)
        {
            var result = await _serviceCenterService.CreateAsync(model);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(int id, [FromBody] ServiceCenterRequest model)
        {
            var result = await _serviceCenterService.UpdateAsync(id, model);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _serviceCenterService.DeleteAsync(id);

            return Ok(result);
        }
    }
}