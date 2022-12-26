using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProductionMove.Data.Context;
using ProductionMove.Models;
using ProductionMove.ViewModels.Series;

namespace ProductionMove.Services
{
    public interface ISeriesService
    {
        Task<IEnumerable<SeriesResponse>> ListAsync();
        Task<SeriesResponse> FindByIdAsync(int id);
        Task<SeriesResponse> CreateAsync(SeriesRequest factory);
        Task<SeriesResponse> UpdateAsync(int id, SeriesRequest factory);
        Task DeleteAsync(int id);
    }
    public class SeriesService : ISeriesService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public SeriesService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<SeriesResponse>> ListAsync()
        {
            var series = await _context.Series.ToListAsync();
            return _mapper.Map<IEnumerable<SeriesResponse>>(series);
        }

        public async Task<SeriesResponse> FindByIdAsync(int id)
        {
            var series = await FindAsync(id);
            return _mapper.Map<SeriesResponse>(series);
        }

        public async Task<SeriesResponse> CreateAsync(SeriesRequest model)
        {
            var series = _mapper.Map<Series>(model);

            await _context.Series.AddAsync(series);
            await _context.SaveChangesAsync();

            return _mapper.Map<SeriesResponse>(series);
        }

        public async Task<SeriesResponse> UpdateAsync(int id, SeriesRequest model)
        {
            var series = await FindAsync(id);

            _mapper.Map(model, series);
            _context.Series.Update(series);
            await _context.SaveChangesAsync();

            return _mapper.Map<SeriesResponse>(series);
        }

        public async Task DeleteAsync(int id)
        {
            var series = await FindAsync(id);
            _context.Series.Remove(series);
            await _context.SaveChangesAsync();
        }

        private async Task<Series> FindAsync(int id)
        {
            var series = await _context.Series.FindAsync(id);
            if (series == null) throw new KeyNotFoundException("Series not found");
            return series;
        }
    }
}
