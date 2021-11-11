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

var connectionString = builder.Configuration["ConnectionString"];
builder.Services.AddPersistance(connectionString);

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
