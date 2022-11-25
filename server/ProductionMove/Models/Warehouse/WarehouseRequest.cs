﻿using System.ComponentModel.DataAnnotations;

namespace ProductionMove.Models.Warehouse
{
    public class WarehouseRequest
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public int WardId { get; set; }
    }
}
