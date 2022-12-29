namespace ProductionMove.ViewModels.Store
{
    public class StoreQuery
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public string WardCode { get; set; }
        public string DistrictCode { get; set; }
        public string ProvinceCode { get; set; }
        public StoreQuery()
        {
            PageNumber = 1;
            PageSize = 100;
            WardCode = "";
            DistrictCode = "";
            ProvinceCode = "";
        }
        public StoreQuery(int pageNumber, int pageSize)
        {
            // mininum page number is always set to 1
            PageNumber = pageNumber < 1 ? 1 : pageNumber;
            // maximun page size a user can request is set to 10
            PageSize = pageSize > 100 ? 100 : pageSize;
        }
    }
}
