namespace ProductionMove.Models
{
    public enum ProductStatus : byte
    {
        InFactory,
        InStore,
        Sold,
        UnderWarranty,
        Warranted,
        Error,
        OutOfWarranty,
        All,
    }

    public enum ProductColor : byte
    {
        Black,
        Blue,
        Gold,
        White,
        Gray,
        All,
    }

    public class Product
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public int ProductLineId { get; set; }
        public ProductLine ProductLine { get; set; }
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
        public Factory? Factory { get; set; }
        public int? StoreId { get; set; }
        public Store? Store { get; set; }
        public int? ServiceCenterId { get; set; }
        public ServiceCenter? ServiceCenter { get; set; }
        public int? ProcessId { get; set; }
        public Process? Process { get; set; }
    }
}
