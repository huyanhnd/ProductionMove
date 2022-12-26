namespace ProductionMove.Helpers;

using AutoMapper;
using ProductionMove.Models;
using ProductionMove.ViewModels;
using ProductionMove.ViewModels.Accounts;
using ProductionMove.ViewModels.Address;
using ProductionMove.ViewModels.Factory;
using ProductionMove.ViewModels.ProductLine;
using ProductionMove.ViewModels.Series;
using ProductionMove.ViewModels.ProcessModel;
using ProductionMove.ViewModels.ProductModel;

public class AutoMapperProfile : Profile
{
    // mappings between model and entity objects
    public AutoMapperProfile()
    {
        //Account
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

        //Address
        CreateMap<Province, ProvinceResponse>();
        CreateMap<District, DistrictResponse>();
        CreateMap<Ward, WardResponse>();
        
        //Factory
        CreateMap<Factory, FactoryResponse>();
        CreateMap<FactoryRequest, Factory>();
        CreateMap<QueryResult<Factory>, QueryResult<FactoryResponse>>();
        
        //Store
        CreateMap<Factory, FactoryResponse>();
        CreateMap<FactoryRequest, Factory>();
        CreateMap<QueryResult<Factory>, QueryResult<FactoryResponse>>();
        
        //Warehouse
        CreateMap<Factory, FactoryResponse>();
        CreateMap<FactoryRequest, Factory>();
        CreateMap<QueryResult<Factory>, QueryResult<FactoryResponse>>();
        
        //ServiceCenter
        CreateMap<Factory, FactoryResponse>();
        CreateMap<FactoryRequest, Factory>();
        CreateMap<QueryResult<Factory>, QueryResult<FactoryResponse>>();
        
        //Series
        CreateMap<Series, SeriesResponse>();
        CreateMap<SeriesRequest, Series>();
        CreateMap<QueryResult<Series>, QueryResult<SeriesResponse>>();
        
        //ProductLine
        CreateMap<ProductLine, ProductLineResponse>();
        CreateMap<ProductLineRequest, ProductLine>();
        CreateMap<QueryResult<ProductLine>, QueryResult<ProductLineResponse>>();
        
        //Product
        CreateMap<Product, ProductResponse>();
        CreateMap<ProductRequest, Product>();
/*        CreateMap<Product[], ProductResponse[]>();
        CreateMap<ProductRequest[], Product[]>();*/
        CreateMap<QueryResult<Product>, QueryResult<ProductResponse>>();

        //Product
        CreateMap<Process, ProcessResponse>();
        CreateMap<ProcessRequest, Process>();
        CreateMap<QueryResult<Process>, QueryResult<ProcessResponse>>();
    }
}