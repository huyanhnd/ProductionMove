using ProductionMove.Data;

namespace ProductionMove.Models
{
    public class Process
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ApprovedDate { get; set; }
        public string Status { get; set; }
        public List<Product> Products { get; set; }
    }
}
