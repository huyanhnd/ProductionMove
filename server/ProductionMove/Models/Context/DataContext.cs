using Microsoft.EntityFrameworkCore;
using ProductionMove.Models;

namespace ProductionMove.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opt) : base(opt) { }
        public DbSet<Account> Accounts { get; set; } = null!;
        public DbSet<Province> Provinces { get; set; } = null!;
        public DbSet<District> Districts { get; set; } = null!;
        public DbSet<Ward> Wards { get; set; } = null!;
        public DbSet<Factory> Factories { get; set; } = null!;
        public DbSet<Store> Stores { get; set; } = null!;
        public DbSet<Warehouse> Warehouses { get; set; } = null!;
        public DbSet<ServiceCenter> ServiceCenters { get; set; } = null!;
        public DbSet<Series> Series { get; set; } = null!;
        public DbSet<ProductLine> ProductLines { get; set; } = null!;
        public DbSet<Product> Products { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasOne(f => f.Factory).WithMany(p => p.Products).OnDelete(DeleteBehavior.NoAction);
                entity.HasOne(s => s.Store).WithMany(p => p.Products).OnDelete(DeleteBehavior.NoAction);
                entity.HasOne(sc => sc.ServiceCenter).WithMany(p => p.Products).OnDelete(DeleteBehavior.NoAction);
            });
        }
    }
}
