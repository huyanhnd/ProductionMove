namespace ProductionMove.Data
{
    public class Series
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public List<ProductLine>? ProductLines { get; set; }
    }
}
