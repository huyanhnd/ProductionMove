using Microsoft.EntityFrameworkCore;
using ProductionMove.ViewModels;

namespace ProductionMove.Models
{
    public class PaginatedList<T> : List<T>
    {
        public int PageIndex { get; private set; }
        public int TotalPages { get; private set; }
        public PaginatedList(List<T> items, int count, int pageIndex, int pageSize)
        {
            PageIndex = pageIndex;
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);
            AddRange(items);
        }
        public static async Task<QueryResult<T>> CreateAsync(IQueryable<T> source, int pageIndex, int pageSize)
        {
            var count = await source.CountAsync();
            var items = await source.Skip((pageIndex - 1) * pageSize).Take(pageSize).ToListAsync();

            return new QueryResult<T>
            {
                Items = new PaginatedList<T>(items, count, pageIndex, pageSize),
                TotalItems = count,
            }; ;
        }
    }
}
