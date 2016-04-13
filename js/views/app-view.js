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

    // Nutritionix API query
    queryNutritionixAPI: function(queryString) {
        var queryUrl = 'https://api.nutritionix.com/v1_1/search/' +
            queryString +
            '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories' +
            '%2Cnf_sugars%2Cnf_saturated_fat%2Cnf_sodium' +
            '&appId=8c1adda0&appKey=99e51ebebe522453c0f10c70f4eb4738';

        $.getJSON(queryUrl)
            .done(function(json) {
                // write returned JSON to console
                console.log(json);
            })
            .fail(function(jqxhr) {
                console.log("Error getting food info from Nutritionix");
                //write the returned object to console
                console.log(jqxhr);
            });
    },

    // Query the Nutritionix API using the value of the search input.
    // Display the results (food items) 
    getFoodItems: function() {

        var queryString = $('#search-input').val();
        this.queryNutritionixAPI(queryString);
    }
});
