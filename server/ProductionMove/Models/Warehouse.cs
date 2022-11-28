namespace ProductionMove.Models
{
    public class Warehouse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int WardId { get; set; }
        public int StoreId { get; set; }
    }
}
