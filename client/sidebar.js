// Filtering

Template.sidebar_filter.items = function () {
    var session_field = this.session_field;
    return _.map(this.collection.find().fetch(), 
            function (item) { 
                return {item: item, session_field: session_field};
            });
};
Template.sidebar_filter.all_chosen_class = function () {
    return Session.equals(this.session_field, null) ? 'active' : '';
};

Template.sidebar_filter.events = {
    'click .choose_all': function () {
        Session.set(this.session_field, null);
    }
};

Template.sidebar_item.events = {
    'click': function (evt) {
        Session.set(this.session_field, this.item._id);
    }
};
Template.sidebar_item.chosen_class = function () {
    return Session.equals(this.session_field, this.item._id) ? 'active' : '';
};

Template.sidebar.sidebar_filters = [
    {session_field: 'project_id', title: 'Project', collection: Projects},
    {session_field: 'owner_id', title: 'Owner', collection: People}
    ];

