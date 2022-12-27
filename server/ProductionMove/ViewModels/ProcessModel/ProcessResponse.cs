using ProductionMove.Models;

namespace ProductionMove.ViewModels.ProcessModel
{
    public class ProcessResponse
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ApprovedDate { get; set; }
        public DateTime CancelledDate { get; set; }
        public ProcessStatus Status { get; set; }
    }
}
