using ProductionMove.Models;

namespace ProductionMove.ViewModels.ProductModel
{
    public class ProductQuery
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int FactoryId { get; set; }
        public int StoreId { get; set; }
        public int ServiceCenterId { get; set; }
        public ProductStatus Status { get; set; }
        public ProductQuery()
        {
            PageNumber = 1;
            PageSize = 100;
            FactoryId = 0;
            StoreId = 0;
            ServiceCenterId = 0;
            Status = ProductStatus.All;
        }
        public ProductQuery(int pageNumber, int pageSize)
        {
            // mininum page number is always set to 1
            PageNumber = pageNumber < 1 ? 1 : pageNumber;
            // maximun page size a user can request is set to 10
            PageSize = pageSize > 100 ? 100 : pageSize;
        }
    }
}
