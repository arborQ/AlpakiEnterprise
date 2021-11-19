using Microsoft.AspNetCore.Mvc;

namespace Alpaki.Clean.Web.Endpoints.ProjectEndpoints
{
    public class ListIncompleteRequest
    {
        [FromRoute]
        public int ProjectId { get; set; }
        [FromQuery]
        public string? SearchString { get; set; }
    }
}