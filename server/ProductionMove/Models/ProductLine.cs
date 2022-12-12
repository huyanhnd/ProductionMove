using System.ComponentModel.DataAnnotations;

namespace ProductionMove.Data
{
    public class ProductLine
    {
        [Key]
        public string Code { get; set; }
        public string Name { get; set; }
        public int SeriesId { get; set; }
        public Series Series { get; set; }
        public float ScreenSize { get; set; }
        public string Resolution { get; set; }
        public string Processor { get; set; }
        public string Memory { get; set; }
        public string Hardware { get; set; }
        public string Graphics { get; set; }
        public long ListPrice { get; set; }
        public string Image { get; set; }
        public string? ImageSub { get; set; }
        public List<Product>? Products { get; set; }
    }
}
