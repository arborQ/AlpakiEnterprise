using Alpaki.ProductManager.Internal.Persistance;

namespace Alpaki.ProductManager.Internal.Service
{
    public class Startup
    {
        public void ConfigureServices(HostBuilderContext hostBuilderContext,  IServiceCollection services)
        {
            var connectionString = hostBuilderContext.Configuration["ConnectionString"];
            services.AddPersistance(connectionString, LoggerFactory.Create(builder => builder.AddJsonConsole()));
        }
    }
}
