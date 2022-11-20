namespace ProductionMove.Models.Accounts;

using System.ComponentModel.DataAnnotations;
using ProductionMove.Entities;

public class CreateRequest
{
    [Required]
    public string FullName { get; set; }

    [Required]
    [EnumDataType(typeof(Role))]
    public string Role { get; set; }

    [Required]
    public string Username { get; set; }

    [Required]
    [MinLength(5)]
    public string Password { get; set; }

    [Required]
    [Compare("Password")]
    public string ConfirmPassword { get; set; }
}