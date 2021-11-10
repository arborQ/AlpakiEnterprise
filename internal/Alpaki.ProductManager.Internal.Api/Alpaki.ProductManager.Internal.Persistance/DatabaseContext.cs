using Alpaki.ProductManager.Internal.Persistance.Models;
using Microsoft.EntityFrameworkCore;

namespace Alpaki.ProductManager.Internal.Persistance
{
    internal class DatabaseContext: DbContext, IDbContext   
    {
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {

        }

        public DbSet<Product> Products { get; }
    }
}