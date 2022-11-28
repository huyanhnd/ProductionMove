namespace ProductionMove.Models
{
    public class Province
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<District> Districts { get; set; }
    }
}
