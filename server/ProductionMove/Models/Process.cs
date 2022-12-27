using ProductionMove.Data;

namespace ProductionMove.Models
{
    public enum ProcessStatus : byte {
        Pending,
        Approved,
        Cancelled,
    }

    public class Process
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ApprovedDate { get; set; }
        public DateTime CancelledDate { get; set; }
        public ProcessStatus Status { get; set; }
        public List<Product>? Products { get; set; }
    }
}
