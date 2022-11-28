namespace ProductionMove.ViewModels.Accounts;

using System.ComponentModel.DataAnnotations;
using ProductionMove.Models;

public class UpdateRequest
{
    private string _password;
    private string _confirmPassword;
    private string _role;
    private string _username;
    public string FullName { get; set; }

    [EnumDataType(typeof(Role))]
    public string Role
    {
        get => _role;
        set => _role = replaceEmptyWithNull(value);
    }
    public string Username
    {
        get => _username;
        set => _username = replaceEmptyWithNull(value);
    }

    [MinLength(5)]
    public string Password
    {
        get => _password;
        set => _password = replaceEmptyWithNull(value);
    }

    [Compare("Password")]
    public string ConfirmPassword 
    {
        get => _confirmPassword;
        set => _confirmPassword = replaceEmptyWithNull(value);
    }

    // helpers

    private string replaceEmptyWithNull(string value)
    {
        // replace empty string with null to make field optional
        return string.IsNullOrEmpty(value) ? null : value;
    }
}