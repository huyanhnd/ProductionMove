using System.ComponentModel.DataAnnotations;

namespace ProductionMove.Models
{
    public class Province
    {
        [Key]
        public string Code { get; set; }
        public string Name { get; set; }
        public List<District> Districts { get; set; }
    }
}
