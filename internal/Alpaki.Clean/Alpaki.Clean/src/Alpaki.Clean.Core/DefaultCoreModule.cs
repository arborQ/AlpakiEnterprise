using Alpaki.Clean.Core.Interfaces;
using Alpaki.Clean.Core.Services;
using Autofac;

namespace Alpaki.Clean.Core
{
    public class DefaultCoreModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<ToDoItemSearchService>()
                .As<IToDoItemSearchService>().InstancePerLifetimeScope();
        }
    }
}