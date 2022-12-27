using System.ComponentModel.DataAnnotations;

namespace ProductionMove.ViewModels.Factory
{
    public class FactoryRequest
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string WardCode { get; set; }

        [Required]
        public int AccountId { get; set; }
    }
}
