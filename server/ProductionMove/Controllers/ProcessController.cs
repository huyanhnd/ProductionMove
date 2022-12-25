using Microsoft.AspNetCore.Mvc;
using ProductionMove.Controllers;
using ProductionMove.Services;
using ProductionMove.ViewModels;
using ProductionMove.ViewModels.ProcessModel;

namespace ProductionMove.Controllers
{
    public class ProcessController : BaseController
    {
        private readonly IProcessService _processService;

        public ProcessController(IProcessService processService)
        {
            _processService = processService;
        }

        [HttpGet]
        public async Task<IActionResult> ListAsync([FromQuery] Paging query)
        {
            var processes = await _processService.ListAsync(query);
            return Ok(processes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            var result = await _processService.FindByIdAsync(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] ProcessRequest model)
        {
            var result = await _processService.CreateAsync(model);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(int id, [FromBody] ProcessRequest model)
        {
            var result = await _processService.UpdateAsync(id, model);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            await _processService.DeleteAsync(id);
            return Ok(new { message = "Product deleted successfully" });
        }
    }
}