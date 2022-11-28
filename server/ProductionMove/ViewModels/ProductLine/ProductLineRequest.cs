using ProductionMove.Data;

namespace ProductionMove.ViewModels.ProductLine
{
    public class ProductLineRequest
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public int SeriesId { get; set; }
        public float ScreenSize { get; set; }
        public string Resolution { get; set; }
        public string Processor { get; set; }
        public string Memory { get; set; }
        public string Hardware { get; set; }
        public string Graphics { get; set; }
        public long ListPrice { get; set; }
        public string Image { get; set; }
    }
}
