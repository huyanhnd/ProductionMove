namespace ProductionMove.ViewModels.ProductLine
{
    public class ProductLineResponse
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public int SeriesId { get; set; }
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
    }
}
