Template.ticket_list.title = function () {
    var project_id = Session.get('project_id'), owner_id = Session.get('owner_id');
    var title;
    if (project_id) {
        title = Projects.findOne({_id: project_id}).name;
        if (owner_id) {
            title += ', owned by ' + People.findOne({_id: owner_id}).name;
        }
    } else {
        if (owner_id) {
            title = 'Owned by ' + People.findOne({_id: owner_id}).name;
        } else {
            title = 'All';
        }
    }
    return title;
};

Template.ticket_list.viewing_all_projects = function () {
    return Session.equals('project_id', null);
};

Template.ticket_list.tickets = function () {
    var query = {};
    var add_filter = function (field) {
        var value = Session.get(field);
        if (value) {
            query[field] = value;
        }
    };
    add_filter('project_id');
    add_filter('owner_id');
    return Tickets.find(query);
};

Template.ticket_in_list.viewing_all_projects = Template.ticket_list.viewing_all_projects;

Template.ticket_in_list.project = name_getter(Projects, 'project_id');
Template.ticket_in_list.owner = name_getter(People, 'owner_id');

Template.ticket_in_list.events = {
    'click': function () {
        Session.set('ticket_id', this._id);
    }
};

