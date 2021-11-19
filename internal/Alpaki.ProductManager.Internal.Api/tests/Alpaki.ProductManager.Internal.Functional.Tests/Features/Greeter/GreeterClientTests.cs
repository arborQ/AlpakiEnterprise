namespace Alpaki.ProductManager.Internal.Functional.Tests.Features.Greeter;
using Alpaki.ProductManager.Internal.Functional.Tests.Collections;
using Alpaki.ProductManager.Internal.Functional.Tests.Fixtures;

public class GreeterClientTests : ServiceProtobufCollection
{
    private readonly ServiceProtobufFactory _serviceProtobufFactory;

    public GreeterClientTests(ServiceProtobufFactory serviceProtobufFactory)
    {
        _serviceProtobufFactory = serviceProtobufFactory;
    }

    [Theory]
    [InlineData("arbor")]
    [InlineData("lukasz")]
    [InlineData("")]
    public async Task SayHelloAsync_Response_Greet(string name)
    {
        // Arrange

        // Act
        var greet = await _serviceProtobufFactory.GreeterClient.SayHelloAsync(new HelloRequest { Name = name });

        // Assert
        Assert.Equal($"Hello {name}", greet.Message);
    }


    [Fact]
    public async Task SayHelloAsync_Response_Heavy()
    {
        // Arrange

        // Act
        await Task.WhenAll(Enumerable.Range(0, 10000).Select(async _ => { await _serviceProtobufFactory.GreeterClient.SayHelloAsync(new HelloRequest { Name = "test name" }); }));

        // Assert
    }

}
