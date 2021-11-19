using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class GreeterController : ControllerBase
{
    private readonly ILogger<GreeterController> _logger;

    public GreeterController(ILogger<GreeterController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public Task<string> Get([FromQuery] GreetRequest greet)
    {
        return Task.FromResult($"Hello {greet.Name}");
    }

    public class GreetRequest
    {
        public string? Name { get; set; }
    }
}
