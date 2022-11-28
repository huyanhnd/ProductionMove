using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data;
using ProductionMove.Data.Context;
using ProductionMove.Models;
using ProductionMove.ViewModels.Factory;
using ProductionMove.ViewModels.Series;
using ProductionMove.Services;

namespace ProductionMove.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeriesController : ControllerBase
    {
        private readonly ISeriesService _seriesService;

        public SeriesController(ISeriesService seriesService)
        {
            _seriesService = seriesService;
        }

        [HttpGet]
        public async Task<ActionResult<SeriesResponse>> ListAsync()
        {
            var series = await _seriesService.ListAsync();
            return Ok(series);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SeriesResponse>> GetAsync(int id)
        {
            var series = await _seriesService.FindByIdAsync(id);
            return Ok(series);
        }

        [HttpPost]
        public async Task<ActionResult<SeriesResponse>> PostAsync([FromBody] SeriesRequest model)
        {
            var result = await _seriesService.CreateAsync(model);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<SeriesResponse>> PutAsync(int id, SeriesRequest model)
        {
            var result = await _seriesService.UpdateAsync(id, model);
            return Ok(result);
        }   

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            await _seriesService.DeleteAsync(id);
            return Ok(new { message = "Account deleted successfully" });
        }
    }
}
