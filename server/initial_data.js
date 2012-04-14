Meteor.startup(function () {
    if (Projects.find().count() == 0) {

        var projects = _.map(["NetDB", "Prodbez", "Vet"],
            function (name) { return Projects.insert({name: name}) });

        var tickets = [
            {title: 'Ticket 1 title',
             body: 'A really long text',
             project_id: projects[0]},
            {title: 'Prodbez regression tests',
             body: 'Another really really really long text',
             project_id: projects[1]},
            {title: 'Reports speedup',
             body: 'Not so really really really long text',
             project_id: projects[0]}];

        _.each(tickets, function (ticket) { Tickets.insert(ticket); });
    }
});

