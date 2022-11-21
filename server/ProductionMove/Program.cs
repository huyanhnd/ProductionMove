using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using ProductionMove.Authorization;
using ProductionMove.Helpers;
using ProductionMove.Services;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// add services to DI container
{
    var services = builder.Services;
    var env = builder.Environment;

    builder.Services.AddDbContext<DataContext>(options => {
        options.UseSqlServer(builder.Configuration.GetConnectionString("ProductionMoveDatabase"));
    });
    services.AddCors();
    services.AddControllers().AddJsonOptions(x =>
    {
        // serialize enums as strings in api responses (e.g. Role)
        x.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });
    services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
    services.AddSwaggerGen(option =>
    {
        option.SwaggerDoc("v1", new OpenApiInfo { Title = "ProductionMove API", Version = "v1" });
        option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
            In = ParameterLocation.Header,
            Description = "Please enter a valid token",
            Name = "Authorization",
            Type = SecuritySchemeType.Http,
            BearerFormat = "JWT",
            Scheme = "Bearer"
        });
        option.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference
                    {
                        Type=ReferenceType.SecurityScheme,
                        Id="Bearer"
                    }
                },
                new string[]{}
            }
        });
    });

    // configure strongly typed settings object
    services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

    // Life cycle DI: AddSingleton(), AddTransient(), AddScoped()
    services.AddScoped<IJwtUtils, JwtUtils>();
    services.AddScoped<IAccountService, AccountService>();
    services.AddScoped<IAddressService, AddressService>();
}

var app = builder.Build();

// configure HTTP request pipeline
{
    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    // global cors policy
    app.UseCors(x => x
        .SetIsOriginAllowed(origin => true)
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials());

    // global error handler
    app.UseMiddleware<ErrorHandlerMiddleware>();

    // custom jwt auth middleware
    app.UseMiddleware<JwtMiddleware>();

    app.MapControllers();
}

app.Run();