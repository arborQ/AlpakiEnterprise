namespace Alpaki.Order.StateMachine.StateMachines.OrderMachine;

internal class OrderProcessingState
{
    public OrderProcessingState(string orderName)
    {
        OrderName = orderName;
        Initialized = DateTime.UtcNow;
        Status = OrderProcessingLevel.Initialized;
        DomainObjects.Add("OrderCreated");
    }

    public List<string> DomainObjects { get; } = new List<string>();

    public Guid? OrderId { get; private set; }

    public string OrderName { get; private set; }

    public Guid? InvoiceId { get; }

    public DateTime Initialized { get; }

    public DateTime? Created { get; private set; }

    public DateTime? Processed { get; }

    public OrderProcessingLevel Status { get; }

    public void SetOrderId(Guid orderId)
    {
        OrderId = orderId;
        Created = DateTime.UtcNow;
        DomainObjects.Add($"OrderNumberAssigned=[{orderId}]");
    }

    [Flags]
    public enum OrderProcessingLevel
    {
        Initialized = 0,
        Created = 1 << 1,
        Invoiced = 1 << 2,
        Processed = 1 << 3,
    }
}
