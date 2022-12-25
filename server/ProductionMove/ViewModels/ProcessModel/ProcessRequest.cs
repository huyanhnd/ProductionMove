using ProductionMove.Models;

namespace ProductionMove.ViewModels.ProcessModel
{
    public class ProcessRequest
    {
        public string Name { get; set; }
        public string ProductLineCode { get; set; }
        public string Color { get; set; }
        public int Capacity { get; set; }
        public int Quantity { get; set; }
    }
}
