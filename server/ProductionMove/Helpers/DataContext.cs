using Microsoft.EntityFrameworkCore;
using ProductionMove.Entities;

namespace ProductionMove.Helpers
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opt) : base(opt) { }
        public DbSet<Account> Accounts { get; set; }
    }
}
