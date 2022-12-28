using ProductionMove.Models;
using System.Security.Policy;

namespace ProductionMove.ViewModels.ProcessModel
{
    public class ProcessRequest
    {
        public string Name { get; set; }
        public int FactoryId { get; set; }
        public int StoreId { get; set; }
        public List<int> ProductIds { get; set; }
    }
}
