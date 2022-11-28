namespace ProductionMove.ViewModels.Accounts;

using System.ComponentModel.DataAnnotations;

public class ForgotPasswordRequest
{
    [Required]
    public string Username { get; set; }
}