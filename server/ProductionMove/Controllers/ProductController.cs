using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProductionMove.Controllers;
using ProductionMove.Models;
using ProductionMove.ViewModels.Factory;
using ProductionMove.ViewModels.ProductLine;
using ProductionMove.Services;
using ProductionMove.ViewModels;
using ProductionMove.ViewModels.ProductModel;
using ProductionMove.Authorization;

namespace ProductionMove.Controllers
{
    public class ProductController : BaseController
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> ListProductOfAdmin([FromQuery] ProductQuery query)
        {
            var products = await _productService.ListAsync(query);
            return Ok(products);
        }

        [Authorize(Role.Factory)]
        [HttpGet("factory")]
        public async Task<IActionResult> ListProductOfFactory([FromQuery] ProductQuery query)
        {
            var products = await _productService.ListAsync(query);
            return Ok(products);
        }

        [HttpGet("{code}")]
        public async Task<IActionResult> GetAsync(string code)
        {
            var result = await _productService.FindByCodeAsync(code);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] List<ProductRequest> models)
        {
            foreach (var model in models)
            {
                await _productService.CreateAsync(model);
            }
            return Ok(new { message = "Products add successfully" });
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

        [HttpPut("export")]
        public async Task<IActionResult> ApprovedExportAsync(List<int> ProductIds, int ProcessId)
        {
            await _productService.ApprovedExportAsync(ProductIds, ProcessId);
            return Ok(new { message = "Product deleted successfully" });
        }

        [HttpPut("sold/{code}")]
        public async Task<IActionResult> SoldProductAsync(string code)
        {
            await _productService.SoldProductAsync(code);
            return Ok(new { message = "Product sold successfully" });
        }
    }
}