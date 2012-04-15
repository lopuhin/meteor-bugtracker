Projects = new Meteor.Collection('Projects');
Tickets = new Meteor.Collection('Tickets');
People = new Meteor.Collection('People');


// Chosen filters
Session.set('project_id', null);
Session.set('owner_id', null);

// Currently viewed ticket
Session.set('ticket_id', null);

Template.main.viewing_ticket = function () {
    return ! Session.equals('ticket_id', null);
}





