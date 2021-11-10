using Alpaki.ProductManager.Internal.Persistance.Records;


namespace Alpaki.ProductManager.Internal.Persistance.Models
{
    public class Product
    {
        public Product(ProductId id, string name)
        {
            Id = id;
            Name = name;
        }

        public ProductId Id { get; }

        public string Name { get; }
    }
}
