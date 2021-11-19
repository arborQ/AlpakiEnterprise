namespace Alpaki.ProductManager.Internal.Functional.Tests.Features.Greeter;
using Alpaki.ProductManager.Internal.Functional.Tests.Collections;
using Alpaki.ProductManager.Internal.Functional.Tests.Fixtures;

public class GreeterApiTests : ApiCollection
{
    private readonly ApiFactory _apiFactory;

    public GreeterApiTests(ApiFactory apiFactory)
    {
        _apiFactory = apiFactory;
    }

    [Theory]
    [InlineData("arbor")]
    [InlineData("lukasz")]
    [InlineData("")]
    public async Task SayHelloAsync_Response_Greet(string name)
    {
        // Arrange

        // Act
        var greetResponse = await _apiFactory.HttpClient.GetAsync($"/Greeter?name={name}");
        var greet = await greetResponse.Content.ReadAsStringAsync();

        // Assert
        greetResponse.EnsureSuccessStatusCode();
        Assert.Equal($"Hello {name}", greet);
    }

    [Fact]
    public async Task SayHelloAsync_Response_Heavy()
    {
        // Arrange

        // Act
        await Task.WhenAll(Enumerable.Range(0, 10000).Select(async _ => { await _apiFactory.HttpClient.GetAsync("/Greeter?name=testname"); }));

        // Assert
    }
}
