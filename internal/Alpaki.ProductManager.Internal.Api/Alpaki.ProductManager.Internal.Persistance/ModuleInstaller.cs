using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Alpaki.ProductManager.Internal.Persistance
{
    public static class ModuleInstaller
    {
        public static IServiceCollection AddPersistance(this IServiceCollection services, string connectionString, ILoggerFactory loggerFactory)
        {
            services.AddDbContext<DatabaseContext>(
                opt => opt
                    .UseLoggerFactory(loggerFactory)
                    .EnableSensitiveDataLogging()
                    .EnableServiceProviderCaching()
                    .UseSqlServer(connectionString),
                ServiceLifetime.Transient
            );

            services.AddTransient<IDbContext, DatabaseContext>();

            return services;
        }
    }
}
