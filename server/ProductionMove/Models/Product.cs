﻿using ProductionMove.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProductionMove.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public int ProductLineId { get; set; }
        public ProductLine ProductLine { get; set; }
        public DateTime ManufactureDate { get; set; }
        public string WarrantyPeriod { get; set; }
        public string Color { get; set; }
        public int Capacity { get; set; }
        public string Status { get; set; }
        public int FactoryId { get; set; }
        public Factory Factory { get; set; }
        public int StoreId { get; set; }
        public Store Store { get; set; }
        public int ServiceCenterId { get; set; }
        public ServiceCenter ServiceCenter { get; set; }
        public int ProcessId { get; set; }
        public Process Process { get; set; }
    }
}
