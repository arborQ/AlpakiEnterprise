using Grpc.Core;
using Grpc.Net.Client;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.Hosting;

namespace Alpaki.ProductManager.Internal.Functional.Tests.Fixtures
{
    public class ServiceProtobufFactory : WebApplicationFactory<Service.ServiceStartup>, IAsyncLifetime
    {
        private readonly Channel channel;
        public Greeter.GreeterClient GreeterClient;

        protected override IHost CreateHost(IHostBuilder builder)
        {
            return base.CreateHost(builder);
        }

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            base.ConfigureWebHost(builder);
        }

        public async Task DisposeAsync()
        {
            await base.DisposeAsync();
        }

        public async Task InitializeAsync()
        {
            var client = CreateDefaultClient();
            if (client != null)
            {
                var channel = GrpcChannel.ForAddress(client.BaseAddress, new GrpcChannelOptions { HttpClient = client });

                GreeterClient = new Greeter.GreeterClient(channel);
            }
        }
    }
}
