namespace ProductionMove.Models.Accounts;

using System.ComponentModel.DataAnnotations;

public class RegisterRequest
{

    [Required]
    public string FullName { get; set; }

    [Required]
    public string Username { get; set; }

    [Required]
    [MinLength(5)]
    public string Password { get; set; }

    [Required]
    [Compare("Password")]
    public string ConfirmPassword { get; set; }
}