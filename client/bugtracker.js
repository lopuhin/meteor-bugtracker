// Collections
//
// {name}
Projects = new Meteor.Collection('Projects');
// {project_id, owner_id, title, body, comments: [{author_id, text, timestamp}]}
Tickets = new Meteor.Collection('Tickets');
// {login, name}
People = new Meteor.Collection('People');


// Page switcher via navbar
Session.set('page_name', 'list_page');

// Chosen filters in sidebar
Session.set('project_id', null);
Session.set('owner_id', null);

// Currently viewed ticket
Session.set('ticket_id', null);

Template.main.viewing_ticket = function () {
    return ! Session.equals('ticket_id', null);
};

Template.main.page_name_is = function (page_name) {
    return Session.equals('page_name', page_name);
};


// Utils 
// TODO - separate file
var name_getter = function (collection, field) {
    return function () {
        if (this[field]) {
            var obj = collection.findOne({_id: this[field]});
            return obj ? obj.name : '';
        }
        return '';
    };
};




