using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProductionMove.Controllers;
using ProductionMove.Models;
using ProductionMove.Models.Warehouse;
using ProductionMove.Services;

namespace Supermarket.API.Controllers
{
    public class WarehouseController : BaseController
    {
        private readonly IWarehouseService _warehouseService;

        public WarehouseController(IWarehouseService warehouseService)
        {
            _warehouseService = warehouseService;
        }

        [HttpGet]
        public async Task<IActionResult> ListAsync([FromQuery] Paging query, int WardId)
        {
            var fatories = await _warehouseService.ListAsync(query, WardId);
            return Ok(fatories);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _warehouseService.FindAsync(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] WarehouseRequest model)
        {
            var result = await _warehouseService.CreateAsync(model);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(int id, [FromBody] WarehouseRequest model)
        {
            var result = await _warehouseService.UpdateAsync(id, model);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _warehouseService.DeleteAsync(id);
            return Ok(result);
        }
    }
}