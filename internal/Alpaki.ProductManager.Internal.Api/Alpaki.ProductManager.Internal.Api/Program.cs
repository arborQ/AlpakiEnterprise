using Alpaki.ProductManager.Internal.Api;
using Alpaki.ProductManager.Internal.Persistance;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder
    .Configuration
    .AddJsonFile("appsettings.json")
    .AddJsonFile("appsettings.secrets.json", true);

var configuration = builder.Configuration.Get<ApiConfiguration>();

if (configuration?.ConnectionString != null)
{
    builder.Services.AddPersistance(configuration.ConnectionString);
}
else
{
    throw new ArgumentException(nameof(ApiConfiguration.ConnectionString));
}

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Services.UsePersistance();

app.Run();
