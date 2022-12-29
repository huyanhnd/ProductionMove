using ProductionMove.Data;

namespace ProductionMove.Models
{
    public enum ProcessStatus : byte {
        Pending,
        Approved,
        Cancelled,
    }

    public enum ProcessType : byte
    {
        Export,
        Import,
        Warranty
    }

    public class Process
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ApprovedDate { get; set; }
        public DateTime CancelledDate { get; set; }
        public ProcessStatus Status { get; set; }
        public ProcessType Type { get; set; }
        public List<Product>? Products { get; set; }
        public int? FactoryId { get; set; }
        public Factory? Factory { get; set; }
        public int? StoreId { get; set; }
        public Store? Store { get; set; }
        public int? ServiceCenterId { get; set; }
        public ServiceCenter? ServiceCenter { get; set; }
    }
}
