namespace ProductionMove.Models;

public enum Role
{
    Admin,
    Store,
    Factory,
    ServiceCenter,
    User
}
public class Account
{
    public int Id { get; set; }
    public string? FullName { get; set; }
    public string? Username { get; set; }
    public string? PasswordHash { get; set; }
    public string? Image { get; set; }
    public Role Role { get; set; }
    public string? ResetToken { get; set; }
    public DateTime? ResetTokenExpires { get; set; }
    public DateTime? PasswordReset { get; set; }
    public DateTime Created { get; set; }
    public DateTime? Updated { get; set; }
    public List<RefreshToken>? RefreshTokens { get; set; }
    public bool OwnsToken(string token) 
    {
        return this.RefreshTokens?.Find(x => x.Token == token) != null;
    }
}