namespace ProductionMove.ViewModels.Product
{
    public class ProductResponse
    {
        public string Code { get; set; }
        public int ProductLineId { get; set; }
        public DateTime ManufactureDate { get; set; }
        public string WarrantyPeriod { get; set; }
        public bool InFatory { get; set; }
        public bool IsUpdate { get; set; }
    }
}
