namespace ProductionMove.Models
{
    public class QueryResult<T>
    {
        public int TotalItems { get; set; } = 0;
        public List<T> Items { get; set; } = new List<T>();
    }
}
