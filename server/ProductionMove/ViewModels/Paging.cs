namespace ProductionMove.ViewModels
{
    public class Paging
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public Paging()
        {
            PageNumber = 1;
            PageSize = 100;
        }
        public Paging(int pageNumber, int pageSize)
        {
            // mininum page number is always set to 1
            PageNumber = pageNumber < 1 ? 1 : pageNumber;
            // maximun page size a user can request is set to 10
            PageSize = pageSize > 100 ? 100 : pageSize;
        }
    }
}
