using ProductionMove.Models;

namespace ProductionMove.ViewModels.ProcessModel
{
    public class ProcessResponse
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string ProductLineCode { get; set; }
        public string Color { get; set; }
        public int Capacity { get; set; }
        public int Quantity { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ApprovedDate { get; set; }
        public int Status { get; set; }
    }
}
