Template.ticket_list.project = function () {
    var project_id = Session.get('project_id');
    return project_id ? Projects.findOne({_id: project_id}).name : 'All';
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
Template.ticket_in_list.project = function () {
    return Projects.findOne({_id: this.project_id}).name;
};
Template.ticket_in_list.owner = function () { 
    var owner = People.findOne({_id: this.owner_id});
    return owner ? owner.name : '';
};

