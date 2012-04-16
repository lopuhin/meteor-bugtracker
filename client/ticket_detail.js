

Template.ticket_detail.ticket = function () {
    return Tickets.findOne({_id: Session.get('ticket_id')}) || {};
}

Template.ticket_detail.project = name_getter(Projects, 'project_id');
Template.ticket_detail.owner = name_getter(People, 'owner_id');
