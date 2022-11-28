namespace ProductionMove.ViewModels.Accounts;

public class AccountResponse
{
    public int Id { get; set; }
    public string FullName { get; set; }
    public string Username { get; set; }
    public string Role { get; set; }
    public DateTime Created { get; set; }
    public DateTime? Updated { get; set; }
    public bool IsVerified { get; set; }
}