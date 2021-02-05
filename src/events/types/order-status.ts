export enum OrderStatus {
    // order has been created but ticket is not reserved
    Created = 'created', 
    // ticket the order is trying to reserve has already 
    // been cancelled or when the user cancelled the order
    // or when order expires before payment
    Cancelled = 'cancelled', 
    // Order has successfully reserved the ticket 
    AwaitPayment = 'awaiting:payment',
    // Order reserved the ticker and user provided payment
    Complete = 'complete' 
}