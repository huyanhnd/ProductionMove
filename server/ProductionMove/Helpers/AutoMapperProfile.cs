namespace ProductionMove.Helpers;

using AutoMapper;
using ProductionMove.Entities;
using ProductionMove.Models;
using ProductionMove.Models.Accounts;
using ProductionMove.Models.Address;
using ProductionMove.Models.Factories;

public class AutoMapperProfile : Profile
{
    // mappings between model and entity objects
    public AutoMapperProfile()
    {
        CreateMap<Account, AccountResponse>();

        CreateMap<Account, AuthenticateResponse>();

        CreateMap<RegisterRequest, Account>();

        CreateMap<CreateRequest, Account>();

        CreateMap<UpdateRequest, Account>()
            .ForAllMembers(x => x.Condition(
                (src, dest, prop) =>
                {
                    // ignore null & empty string properties
                    if (prop == null) return false;
                    if (prop.GetType() == typeof(string) && string.IsNullOrEmpty((string)prop)) return false;

                    // ignore null role
                    if (x.DestinationMember.Name == "Role" && src.Role == null) return false;

                    return true;
                }
            ));

        CreateMap<Province, ProvinceResponse>();

        CreateMap<District, DistrictResponse>();

        CreateMap<Ward, WardResponse>();

        CreateMap<Factory, FactoryResponse>();

        CreateMap<FactoryRequest, Factory>();

        CreateMap<QueryResult<Factory>, QueryResult<FactoryResponse>>();
    }
}