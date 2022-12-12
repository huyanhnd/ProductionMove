using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProductionMove.Controllers;
using ProductionMove.Models;
using ProductionMove.ViewModels.Factory;
using ProductionMove.ViewModels.ProductLine;
using ProductionMove.Services;
using ProductionMove.ViewModels;

namespace Supermarket.API.Controllers
{
    public class ProductLineController : BaseController
    {
        private readonly IProductLineService _productLineService;

        public ProductLineController(IProductLineService productLineService)
        {
            _productLineService = productLineService;
        }

        [HttpGet]
        public async Task<IActionResult> ListAsync([FromQuery] Paging query, int SeriesId)
        {
            var fatories = await _productLineService.ListAsync(query, SeriesId);
            return Ok(fatories);
        }

        [HttpGet("{code}")]
        public async Task<IActionResult> GetAsync(string code)
        {
            var result = await _productLineService.FindByIdAsync(code);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] ProductLineRequest model)
        {
            var result = await _productLineService.CreateAsync(model);
            return Ok(result);
        }

        [HttpPut("{code}")]
        public async Task<IActionResult> PutAsync(string code, [FromBody] ProductLineRequest model)
        {
            var result = await _productLineService.UpdateAsync(code, model);
            return Ok(result);
        }

        [HttpDelete("{code}")]
        public async Task<IActionResult> DeleteAsync(string code)
        {
            await _productLineService.DeleteAsync(code);
            return Ok(new { message = "Product Line deleted successfully" });
        }
    }
}