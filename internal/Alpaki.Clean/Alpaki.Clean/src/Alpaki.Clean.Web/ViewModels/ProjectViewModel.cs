using System.Collections.Generic;

namespace Alpaki.Clean.Web.ViewModels
{
    public class ProjectViewModel
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public List<ToDoItemViewModel> Items = new();
    }
}