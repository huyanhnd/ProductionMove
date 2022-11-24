using Microsoft.EntityFrameworkCore;
using ProductionMove.Entities;

namespace ProductionMove.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opt) : base(opt) { }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Province> Provinces { get; set; }
        public DbSet<District> Dictricts { get; set; }
        public DbSet<Ward> Wards { get; set; }
        public DbSet<Factory> Factories { get; set; }
        public DbSet<Store> Stores { get; set; }
        public DbSet<Warehouse> Warehouses { get; set; }
        public DbSet<ServiceCenter> ServiceCenters { get; set; }

    }
}
