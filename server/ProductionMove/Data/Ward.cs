namespace ProductionMove.Entities
{
    public class Ward
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int DistrictId { get; set; }
        public List<Factory> Factories { get; set; }
        public List<Store> Stores { get; set; }
        public List<ServiceCenter> serviceCenters { get; set; }
    }
}
