using AutoMapper;
using ProductionMove.Data.Context;
using ProductionMove.Data;
using ProductionMove.Models;
using ProductionMove.ViewModels.ProcessModel;
using ProductionMove.ViewModels;
using Microsoft.EntityFrameworkCore;
using System.Security.Principal;
using System.Linq;

namespace ProductionMove.Services
{
    public interface IProcessService
    {
        Task<QueryResult<ProcessResponse>> ListAsync(Paging query);
        Task<ProcessResponse> FindByIdAsync(int id);
        Task<ProcessResponse> CreateAsync(ProcessRequest process);
        Task<ProcessResponse> UpdateAsync(int id, ProcessRequest process);
        Task DeleteAsync(int id);
    }
    public class ProcessService : IProcessService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ProcessService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<QueryResult<ProcessResponse>> ListAsync(Paging query)
        {
            IQueryable<Process> queryable = _context.Processes.AsNoTracking();

            var result = await PaginatedList<Process>.CreateAsync(queryable, query.PageNumber, query.PageSize);

            return _mapper.Map<QueryResult<Process>, QueryResult<ProcessResponse>>(result);
        }

        public async Task<ProcessResponse> FindByIdAsync(int id)
        {
            var process = await FindAsync(id);
            return _mapper.Map<ProcessResponse>(process);
        }

        public async Task<ProcessResponse> CreateAsync(ProcessRequest model)
        {
            var process = new Process
            {
                Name = model.Name,
                RequiredDate = DateTime.UtcNow,
                Status = ProcessStatus.Pending,
                FactoryId = model.FactoryId,
                StoreId = model.StoreId,
            };

            await _context.Processes.AddAsync(process);
            await _context.SaveChangesAsync();

            var selected = _context.Products.Where(u => model.ProductIds.Contains(u.Id));

            foreach (Product u in selected)
            {
                u.ProcessId = process.Id;
            }

            await _context.SaveChangesAsync();

            return _mapper.Map<ProcessResponse>(process);
        }

        public async Task<ProcessResponse> UpdateAsync(int id, ProcessRequest model)
        {
            var process = await FindAsync(id);

            _mapper.Map(model, process);

            process.ApprovedDate = DateTime.UtcNow;

            _context.Processes.Update(process);
            await _context.SaveChangesAsync();

            return _mapper.Map<ProcessResponse>(process);
        }

        public async Task DeleteAsync(int id)
        {
            var process = await FindAsync(id);
            _context.Processes.Remove(process);
            await _context.SaveChangesAsync();
        }

        private async Task<Process> FindAsync(int id)
        {
            var process = await _context.Processes.FindAsync(id);
            if (process == null) throw new KeyNotFoundException("Process not found");
            return process;
        }
    }
}
