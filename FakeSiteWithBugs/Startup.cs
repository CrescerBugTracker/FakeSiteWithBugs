using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FakeSiteWithBugs.Startup))]
namespace FakeSiteWithBugs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
