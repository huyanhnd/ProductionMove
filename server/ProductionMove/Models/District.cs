using System.ComponentModel.DataAnnotations;

namespace ProductionMove.Models
{
    public class District
    {
        [Key]
        public string Code { get; set; }
        public string Name { get; set; }
        public string ProvinceCode { get; set; }
        public List<Ward> wards { get; set; }
    }
}
