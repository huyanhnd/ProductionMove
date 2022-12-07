namespace ProductionMove.ViewModels.Factory
{
    public class FactoryQuery
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public string WardCode { get; set; }
        public string DistrictCode { get; set; }
        public string ProvinceCode { get; set; }
        public FactoryQuery()
        {
            PageNumber = 1;
            PageSize = 10;
            WardCode = "";
            DistrictCode = "";
            ProvinceCode = "";
        }
        public FactoryQuery(int pageNumber, int pageSize)
        {
            // mininum page number is always set to 1
            PageNumber = pageNumber < 1 ? 1 : pageNumber;
            // maximun page size a user can request is set to 10
            PageSize = pageSize > 10 ? 10 : pageSize;
        }
    }
}
