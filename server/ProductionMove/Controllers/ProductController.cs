using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProductionMove.Controllers;
using ProductionMove.Models;
using ProductionMove.ViewModels.Factory;
using ProductionMove.ViewModels.ProductLine;
using ProductionMove.Services;
using ProductionMove.ViewModels;
using ProductionMove.ViewModels.Product;

namespace Supermarket.API.Controllers
{
    public class ProductController : BaseController
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> ListAsync([FromQuery] Paging query, int SeriesId)
        {
            var fatories = await _productService.ListAsync(query, SeriesId);
            return Ok(fatories);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(string code)
        {
            var result = await _productService.FindByIdAsync(code);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] ProductRequest model)
        {
            var result = await _productService.CreateAsync(model);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(string code, [FromBody] ProductRequest model)
        {
            var result = await _productService.UpdateAsync(code, model);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(string code)
        {
            await _productService.DeleteAsync(code);
            return Ok(new { message = "Product deleted successfully" });
        }
    }
}