using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProductionMove.Controllers;
using ProductionMove.Models;
using ProductionMove.Models.Factories;
using ProductionMove.Services;

namespace Supermarket.API.Controllers
{
    public class StoreController : BaseController
    {
        private readonly IFactoryService _factoryService;

        public StoreController(IFactoryService factoryService)
        {
            _factoryService = factoryService;
        }

        [HttpGet]
        public async Task<IActionResult> ListAsync([FromQuery] Paging query, int WardId)
        {
            var fatories = await _factoryService.ListAsync(query, WardId);
            return Ok(fatories);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _factoryService.FindAsync(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] FactoryRequest model)
        {
            var result = await _factoryService.CreateAsync(model);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(int id, [FromBody] FactoryRequest model)
        {
            var result = await _factoryService.UpdateAsync(id, model);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _factoryService.DeleteAsync(id);

            return Ok(result);
        }
    }
}