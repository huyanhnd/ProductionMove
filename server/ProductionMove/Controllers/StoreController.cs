using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProductionMove.Controllers;
using ProductionMove.Models;
using ProductionMove.ViewModels.Store;
using ProductionMove.Services;
using ProductionMove.ViewModels;

namespace ProductionMove.Controllers
{
    public class StoreController : BaseController
    {
        private readonly IStoreService _storeService;

        public StoreController(IStoreService storeService)
        {
            _storeService = storeService;
        }

        [HttpGet]
        public async Task<IActionResult> ListAsync([FromQuery] StoreQuery query)
        {
            var fatories = await _storeService.ListAsync(query);
            return Ok(fatories);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _storeService.FindAsync(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] StoreRequest model)
        {
            var result = await _storeService.CreateAsync(model);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(int id, [FromBody] StoreRequest model)
        {
            var result = await _storeService.UpdateAsync(id, model);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _storeService.DeleteAsync(id);

            return Ok(result);
        }
    }
}