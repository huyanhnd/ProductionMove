using Microsoft.EntityFrameworkCore;
using ProductionMove.Models;

namespace ProductionMove.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opt) : base(opt) { }
        public DbSet<Account> Accounts { get; set; } = null!;
        public DbSet<Province> Provinces { get; set; } = null!;
        public DbSet<District> Dictricts { get; set; } = null!;
        public DbSet<Ward> Wards { get; set; } = null!;
        public DbSet<Factory> Factories { get; set; } = null!;
        public DbSet<Store> Stores { get; set; } = null!;
        public DbSet<Warehouse> Warehouses { get; set; } = null!;
        public DbSet<ServiceCenter> ServiceCenters { get; set; } = null!;
        public DbSet<Series> Series { get; set; } = null!;
        public DbSet<ProductLine> ProductLines { get; set; } = null!;
        public DbSet<Product> Products { get; set; } = null!;
    }
}
