using System.ComponentModel.DataAnnotations;

namespace ProductionMove.Models
{
    public class Ward
    {
        [Key]
        public string Code { get; set; }
        public string Name { get; set; }
        public string DistrictCode { get; set; }
        public List<Factory> Factories { get; set; }
        public List<Store> Stores { get; set; }
        public List<ServiceCenter> serviceCenters { get; set; }
    }
}
