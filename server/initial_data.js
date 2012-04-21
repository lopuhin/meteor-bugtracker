Meteor.startup(function () {
    if (Projects.find().count() == 0) {

        var projects = _.map(['NetDB', 'Lib', 'Admin'],
            function (name) { return Projects.insert({name: name}) });
        var people = _.map([
            {login: 'kostia', name: 'Kostia'},
            {login: 'alex', name: 'Alex'}
            ], function (user) { return People.insert(user); });

        var tickets = [
            {title: 'Ticket 1 title',
             body: 'A really long text',
             comments: [
                {'author_id': people[0], 'text': 'I\'m the first to comment'},
                {'author_id': people[1], 'text': 'Do it yourself'}
             ],
             project_id: projects[0]},
            {title: 'Prodbez regression tests',
             body: 'Another really really really long text',
             owner_id: people[0],
             project_id: projects[1]},
            {title: 'Reports speedup',
             body: 'Not so really really really long text',
             owner_id: people[1],
             project_id: projects[0]}];

        _.each(tickets, function (ticket) { Tickets.insert(ticket); });
    }
});

