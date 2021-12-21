namespace Alpaki.Order.StateMachine.StateMachines.OrderMachine;
using Automatonymous;

internal class OrderProcessingStateMachine : AutomatonymousStateMachine<OrderProcessingState>
{
    public OrderProcessingStateMachine()
    {
        State(() => Initialized);
        State(() => Created);
        State(() => Invoiced);
        State(() => Processed);

        Initially
        (
            When(InitializeEvent)
                .ThenAsync(OnOrderInitializedTransition)
                .TransitionTo(Initializing)
                .ThenAsync(OnOrderInitializedTransition),
            When(CreatedEvent).ThenAsync(OnOrderCreatedTransition).TransitionTo(Created)
        );

        During(
            Initialized,
            When(InitializeEvent).ThenAsync(async aaa => { }),
            Ignore(CreatedEvent)
            );
    }

    private async Task OnOrderInitializedTransition(BehaviorContext<OrderProcessingState> data)
    {
        // notify create logic! service bus or stuff
        await Task.Delay(1000);
    }

    private async Task OnOrderCreatedTransition(BehaviorContext<OrderProcessingState, OrderCreatedEvent> data)
    {
        data.Instance.SetOrderId(data.Data.OrderId);
        await Task.Delay(1000);
    }

    public State Initialized { get; }

    public State Initializing { get; }

    public State Creating { get; }

    public State Created { get; }

    public State Invoiced { get; }

    public State Processing { get; }

    public State Processed { get; }

    public Event InitializeEvent { get; }

    public Event<OrderCreatedEvent> CreatedEvent { get; }

    public record OrderCreatedEvent
    {
        public Guid OrderId { get; }
    }

    public record OrderInvoicedEvent
    {
        public Guid InvoiceId { get; }
    }
}
