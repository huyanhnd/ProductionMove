using ProductionMove.Models;

namespace ProductionMove.ViewModels.ProcessModel
{
    public class ProcessResponse
    {
        public string Name { get; set; }
        public List<Product> Products { get; set; }
    }
}
