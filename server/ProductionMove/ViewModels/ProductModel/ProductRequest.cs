using ProductionMove.Models;
using System.ComponentModel.DataAnnotations;

namespace ProductionMove.ViewModels.ProductModel
{
    public class ProductRequest
    {
        public int Quantity { get; set; }
        public int ProductLineId { get; set; }
        public string WarrantyPeriod { get; set; }
        public string Color { get; set; }
        public string Capacity { get; set; }
        public string Price { get; set; }
        public int StoreId { get; set; }
    }
}
