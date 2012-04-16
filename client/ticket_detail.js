

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

// TODO - can be done easier, maybe using some generic template?
// FIXME - use parent context
Template.ticket_add_comment.no_owner_selected = function () {
    if (Session.equals('ticket_id', null)) {
        return '';
    }
    var ticket = Tickets.findOne({_id: Session.get('ticket_id')});
    return ticket.owner_id ? '' : 'selected="selected"';
};
Template.ticket_add_comment.owner_is_selected = function () {
    if (Session.equals('ticket_id', null)) {
        return '';
    }
    var ticket = Tickets.findOne({_id: Session.get('ticket_id')});
    return ticket.owner_id == this._id ? 'selected="selected"' : '';
};

Template.ticket_add_comment.events = {
    'submit': function (evt) {
        // TODO - use jquery.form
        var $comment = $('#comment_field');
        Tickets.update({_id: Session.get('ticket_id')},
            {$set: {owner_id: $('#owner_id_field').val()},
             $push: {comments: {author_id: Session.get('user_id'),
                                text: $comment.val()}}
            });
        $comment.val('');
        evt.preventDefault();
    }
};
