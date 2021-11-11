using Alpaki.ProductManager.Internal.Api.Protos;
using Grpc.Core;
using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("[controller]")]
public class GreeterController : ControllerBase
{
    private readonly ILogger<GreeterController> _logger;

    public GreeterController(ILogger<GreeterController> logger, IConfiguration configuration)
    {
        _logger = logger;
    }

    [HttpGet]
    public async Task<string> Get()
    {
        var channel = new Channel("localhost", 5110, ChannelCredentials.Insecure);

        var client = new Greeter.GreeterClient(channel);
        var user = "arbor654654";

        var reply = client.SayHello(new HelloRequest { Name = user });

        await channel.ShutdownAsync();

        return reply.Message;
    }
}
