﻿namespace ProductionMove.Models
{
    public class Store
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int WardId { get; set; }
        public List<Warehouse> warehouses { get; set; }
    }
}