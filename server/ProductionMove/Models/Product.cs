using ProductionMove.Models;
using System.ComponentModel.DataAnnotations;

namespace ProductionMove.Data
{
    public enum Status
    {
        Manufacture,
        Store,
        Sold,
        Error,
        Warranty
    }
    public class Product
    {
        [Key]
        public string Code { get; set; }
        public int ProductLineId { get; set; }
        public ProductLine ProductLine { get; set; }
        public DateTime ManufactureDate { get; set; }
        public string WarrantyPeriod { get; set; }
        public string Color { get; set; }
        public int Capacity { get; set; }
        public Status Status { get; set; }
    }
}
