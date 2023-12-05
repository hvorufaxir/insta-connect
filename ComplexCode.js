/*
Filename: ComplexCode.js
Content: A complex code example demonstrating the implementation of a ticket management system for a fictional event booking platform.
*/

// Constants
const DEFAULT_TICKET_PRICE = 50.00;   // Default ticket price
const MAX_TICKETS_PER_ORDER = 10;     // Maximum number of tickets per order

// Classes
class Ticket {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price || DEFAULT_TICKET_PRICE;
    this.isAvailable = true;
  }

  toString() {
    return `Ticket ${this.id}: ${this.name} - $${this.price.toFixed(2)} (${this.isAvailable ? 'Available' : 'Sold Out'})`;
  }
}

class Event {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.tickets = [];
    this.orders = [];
  }

  addTicket(ticket) {
    this.tickets.push(ticket);
  }

  sellTicket(ticket, quantity) {
    if (ticket.isAvailable && quantity > 0 && quantity <= MAX_TICKETS_PER_ORDER) {
      const order = new Order(ticket, quantity);
      ticket.isAvailable = this.updateTicketsAvailability(ticket, quantity);
      this.orders.push(order);
      return order;
    } else {
      console.log('Invalid ticket or quantity.');
      return null;
    }
  }

  updateTicketsAvailability(ticket, quantity) {
    const availableTickets = this.tickets.filter((t) => t.isAvailable && t !== ticket);

    if (ticket.isAvailable && availableTickets.length >= quantity) {
      for (let i = 0; i < quantity; i++) {
        availableTickets[i].isAvailable = false;
      }
      return false;
    }
    return true;
  }

  toString() {
    let str = `Event: ${this.name} (${this.date})\n`;
    str += `Tickets:\n`;
    str += this.tickets.map((ticket) => `  - ${ticket.toString()}`).join('\n');
    str += `\nOrders:\n`;
    str += this.orders.map((order) => `  - ${order.toString()}`).join('\n');
    return str;
  }
}

class Order {
  constructor(ticket, quantity) {
    this.ticket = ticket;
    this.quantity = quantity;
    this.totalPrice = ticket.price * quantity;
    this.timestamp = new Date();
  }

  toString() {
    return `Order Placed: ${this.ticket.name} (${this.ticket.id}) - ${this.quantity} tickets for $${this.totalPrice.toFixed(2)} (Ordered on ${this.timestamp})`;
  }
}

// Usage Example
const event = new Event("Fictional Concert", "2022-12-31");
event.addTicket(new Ticket(1, "General Admission Ticket", 50.00));
event.addTicket(new Ticket(2, "Premium Ticket", 75.00));
event.addTicket(new Ticket(3, "VIP Ticket", 100.00));

const order1 = event.sellTicket(event.tickets[1], 2);
const order2 = event.sellTicket(event.tickets[2], 3);

console.log(event.toString());
console.log(order1.toString());
console.log(order2.toString());