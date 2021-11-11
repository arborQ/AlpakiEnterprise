using Alpaki.ProductManager.Internal.Api.Protos;
using Alpaki.ProductManager.Internal.Persistance;
using Grpc.Core;
using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("[controller]")]
public class GreeterController : ControllerBase
{
    private readonly ILogger<GreeterController> _logger;
    private readonly IDbContext _dbContext;

    public GreeterController(ILogger<GreeterController> logger, IDbContext dbContext)
    {
        _logger = logger;
        _dbContext = dbContext;
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
