using Alpaki.ProductManager.Internal.Persistance;
using Alpaki.ProductManager.Internal.Service;
using Alpaki.ProductManager.Internal.Service.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddGrpc();

builder
    .Configuration
    .AddJsonFile("appsettings.json")
    .AddJsonFile("appsettings.secrets.json", true);

var configuration = builder.Configuration.Get<ServiceConfiguration>();

if (configuration?.ConnectionString != null)
{
    builder.Services.AddPersistance(configuration.ConnectionString);
}
else
{
    throw new ArgumentException(nameof(ServiceConfiguration.ConnectionString));
}

var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapGrpcService<GreeterService>();
app.Services.UsePersistance();

app.Run();
