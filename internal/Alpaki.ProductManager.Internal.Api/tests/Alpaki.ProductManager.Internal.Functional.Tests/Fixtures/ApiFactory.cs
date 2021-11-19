using Alpaki.ProductManager.Internal.Api;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.Hosting;
using System.Net.Http;

namespace Alpaki.ProductManager.Internal.Functional.Tests.Fixtures
{
    public class ApiFactory : WebApplicationFactory<ApiStartup>, IAsyncLifetime
    {
        public HttpClient? HttpClient;

        public ApiFactory()
        {
        }

        protected override IHost CreateHost(IHostBuilder builder)
        {
            return base.CreateHost(builder);
        }

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            base.ConfigureWebHost(builder);
        }

        public Task DisposeAsync()
        {
            HttpClient?.Dispose();
            base.DisposeAsync();
            return Task.CompletedTask;
        }

        public Task InitializeAsync()
        {
            HttpClient = CreateClient();

            return Task.CompletedTask;
        }
    }
}
