

Template.ticket_detail.ticket = function () {
    return Tickets.findOne({_id: Session.get('ticket_id')}) || {};
}

Template.ticket_detail.project = name_getter(Projects, 'project_id');
Template.ticket_detail.owner = name_getter(People, 'owner_id');

Template.ticket_comment.author = name_getter(People, 'author_id');
Template.ticket_comment.dt = function () {
    return 'TODO';
};

Template.ticket_add_comment.owners = function () {
    return People.find();
};
