namespace ProductionMove.Models
{
    public class Series
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Image { get; set; }
        public string? ImageSub { get; set; }
        public string? Description { get; set; }
        public List<ProductLine>? ProductLines { get; set; }
    }
}
