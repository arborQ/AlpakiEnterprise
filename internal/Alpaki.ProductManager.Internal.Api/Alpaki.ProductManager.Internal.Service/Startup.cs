namespace Alpaki.ProductManager.Internal.Service;
using Alpaki.ProductManager.Internal.Persistance;

public class Startup
{
    public void ConfigureServices(HostBuilderContext hostBuilderContext, IServiceCollection services)
    {
        var connectionString = hostBuilderContext.Configuration["ConnectionString"];
        services.AddPersistance(connectionString, LoggerFactory.Create(builder => builder.AddJsonConsole()));
    }
}
