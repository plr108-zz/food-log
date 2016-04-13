// app view

var app = app || {};

app.AppView = Backbone.View.extend({

    el: '#health-tracker-app',

    events: {
        'click #search-button': 'getFoodItems'
    },

    init: function() {

    },

    render: function() {

    },

    // Query the Nutritionix API using the value of the search input.
    // Display the results (food items) 
    getFoodItems: function() {

        var queryString = $('#search-input').val();
        console.log(queryString);
    },
});
