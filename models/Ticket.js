class Ticket {
    constructor(ticketCode, route, time, seat, boardingPoint, price) {
        this.ticketCode = ticketCode;
        this.route = route;
        this.time = time;
        this.seat = seat;
        this.boardingPoint = boardingPoint;
        this.price = price;
    }
}

module.exports = Ticket;