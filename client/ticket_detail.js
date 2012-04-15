Template.ticket_detail.ticket = function () {
    return Tickets.findOne({_id: Session.get('ticket_id')}) || {};
}
