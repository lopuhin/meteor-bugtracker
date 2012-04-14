Projects = new Meteor.Collection('Projects');
Tickets = new Meteor.Collection('Tickets');
People = new Meteor.Collection('People');


Session.set('project_id', null);


Template.sidebar.projects = function () {
    return Projects.find();
};
Template.sidebar.all_chosen_class = function () {
    return Session.equals('project_id', null) ? 'active' : '';
};

Template.sidebar.events = {
    'click #choose_all_projects': function () {
        Session.set('project_id', null);
    }
};

Template.sidebar_project.events = {
    'click': function (evt) {
        Session.set('project_id', this._id);
    }
};
Template.sidebar_project.chosen_class = function () {
    return Session.equals('project_id', this._id) ? 'active' : '';
};


Template.list.project = function () {
    var project_id = Session.get('project_id');
    if (project_id) {
        return Projects.findOne({_id: project_id}).name;
    } else {
        return "All";
    }
}

Template.list.tickets = function () {
    var project_id = Session.get('project_id');
    var query = {};
    if (project_id) {
        query['project_id'] = project_id;
    }
    return Tickets.find(query);
};


Template.main.events = {
    'click input' : function () {
        // template data, if any, is available in 'this'
        if (typeof console !== 'undefined')
            console.log("You pressed the button");
    }
};

