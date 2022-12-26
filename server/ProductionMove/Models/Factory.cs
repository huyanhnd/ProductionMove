using ProductionMove.Models;

namespace ProductionMove.Models
{
    public class Factory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string WardCode { get; set; }
        public int AccountId { get; set; }
        public Account Account { get; set; }
        public List<Product> Products { get; set; }
    }
}
