Template.navbar.nav_links = [
    {page_name: 'list_page', title: 'List'},
    {page_name: 'new_page', title: 'New'},
    {page_name: 'projects_page', title: 'Projects'},
    {page_name: 'account_page', title: 'Account'}
    ];

Template.nav_link.is_active = function () {
    return Session.equals('page_name', this.page_name) ? 'active' : '';
}
Template.nav_link.events = {
    'click': function () { 
        Session.set('page_name', this.page_name);
        Session.set('ticket_id', null);
    }
}

