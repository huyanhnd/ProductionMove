using ProductionMove.Models;
using System.ComponentModel.DataAnnotations;

namespace ProductionMove.Data
{
    public class Product
    {
        [Key]
        public string Code { get; set; }
        public int ProductLineId { get; set; }
        public ProductLine ProductLine { get; set; }
        public DateTime ManufactureDate { get; set; }
        public string WarrantyPeriod { get; set; }
        public bool InFatory { get; set; }
        public bool IsUpdate { get; set; }
    }
}
