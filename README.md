# CQRS / ES

## CQRS: Command Query Responsibilty Segregation

 * Receives commands
 * Puts in Event store
 * Updates Aggregate Store

## Event Sourcing

Takes an event receives a message. Makes a decision, Updates state. Informs rest of system.

Constructor takes a list of events, applies to itself. now new state.

Source of truth is the event store.
