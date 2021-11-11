using Alpaki.ProductManager.Internal.Service.Services;

var builder = WebApplication.CreateBuilder(args);
//builder.ConfigureWebHost(webBuilder =>
//{
//    webBuilder.UseStartup<Startup>();
//});
// Additional configuration is required to successfully run gRPC on macOS.
// For instructions on how to configure Kestrel and gRPC clients on macOS, visit https://go.microsoft.com/fwlink/?linkid=2099682

// Add services to the container.
builder.Services.AddGrpc();

builder
    .Configuration
    .AddJsonFile("appsettings.json")
    .AddJsonFile("appsettings.secrets.json", true);

//builder.Host.ConfigureServices((hostBuilderContext, services) =>
//{
//    var connectionString = hostBuilderContext.Configuration["ConnectionString"];
//    services.AddPersistance(connectionString, LoggerFactory.Create(builder => builder.AddJsonConsole()));
//});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapGrpcService<GreeterService>();
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
