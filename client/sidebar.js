// Filtering

var setup_filters = function (list_template, item_template, collection, session_field) {
    // Handle choosing of proper item
    list_template.items = function () {
        return collection.find();
    };
    list_template.all_chosen_class = function () {
        return Session.equals(session_field, null) ? 'active' : '';
    };

    list_template.events = {
        'click .choose_all': function () {
            Session.set(session_field, null);
        }
    };

    item_template.events = {
        'click': function (evt) {
            Session.set(session_field, this._id);
        }
    };
    item_template.chosen_class = function () {
        return Session.equals(session_field, this._id) ? 'active' : '';
    };
};

setup_filters(
        Template.sidebar_project_list, Template.sidebar_project,
        Projects, 'project_id');


setup_filters(
        Template.sidebar_owner_list, Template.sidebar_owner,
        People, 'owner_id');

