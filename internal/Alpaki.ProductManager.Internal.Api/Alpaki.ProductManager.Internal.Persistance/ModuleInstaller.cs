namespace Alpaki.ProductManager.Internal.Persistance;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;


public static class ModuleInstaller
{
    public static IServiceCollection AddPersistance(this IServiceCollection services, string connectionString, ILoggerFactory? loggerFactory = null)
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
        services.AddTransient<DatabaseContext>();

        return services;
    }

    public static IServiceProvider UsePersistance(this IServiceProvider serviceProvider)
    {
        return serviceProvider;
    }
}
