using ProductionMove.Models;

namespace ProductionMove.ViewModels.ProductModel
{
    public class ProductResponse
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int ProductLineId { get; set; }
        public DateTime ManufactureDate { get; set; }
        public string WarrantyPeriod { get; set; }
        public DateTime WarrantyDate { get; set; }
        public int WarrantyTime { get; set; }
        public DateTime SoldDate { get; set; }
        public DateTime ErrorDate { get; set; }
        public ProductColor Color { get; set; }
        public string Capacity { get; set; }
        public ProductStatus Status { get; set; }
        public string Price { get; set; }
        public int? FactoryId { get; set; }
        public int? StoreId { get; set; }
        public int? ServiceCenterId { get; set; }
        public int? ProcessId { get; set; }
        public string FactoryName { get; set; }
        public string StoreName { get; set; }
        public string ServiceCenterName { get; set; }

    }
}
