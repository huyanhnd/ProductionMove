using System.ComponentModel.DataAnnotations;
using System.Security.Policy;

namespace ProductionMove.Data
{
    public class ProductLine
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int SeriesId { get; set; }
        public Series Series { get; set; }
        public float ScreenSize { get; set; }
        public string Chip { get; set; }
        public string Camera { get; set; }
        public int Ram { get; set; }
        public int RefreshRate { get; set; }
        public string Battery { get; set; }
        public int Weight { get; set; }
        public long ListPrice { get; set; }
        public string Image { get; set; }
        public string? ImageSub { get; set; }
        public List<Product>? Products { get; set; }
    }
}
