// app view

var app = app || {};

app.AppView = Backbone.View.extend({

    // el: '#health-tracker-app',

    // replacing el value to support basic Hello World example
    el: $('body'),

    events: {
        'click #search-button': 'getFoodItems',
        'click #add-button': 'addOne'
    },

    initialize: function(options) {

        //this.$foodItem = this.$('#food-item');
        //this.options = options || {};
        //app.FoodItemResults.fetch();

        // replacing food log creation with basic Hello World example
        _.bindAll(this, 'render');
        $(app.AppView.el).append("<ul> <li>hello world</li> </ul>");
    },

    render: function() {
        //this.$el.append(app.FoodItemView.render().el);

        // replacing food log rendering with basic Hello World example

        
    },

    addOne: function(foodItem) {
        foodItem = {
            item_name: 'Some Item Name',
            brand_name: 'Some Brand',
            calories: 360,
            saturated_fat: 10,
            sodium: 9,
            sugars: 8,
            serving_size_qty: 1,
            serving_size_unit: "cup",
            servings_consumed: 1
        };
        console.log(foodItem.item_name);
        var view = new app.FoodItemView({ model: foodItem });
        $('#food-log').append(view.render().el);
    },

    // Add all items in the Food Log collection at once.
    addAll: function() {
        this.$('#food-log').html('');
        app.Todos.each(this.addOne, this);
    },

    // Query the Nutritionix API using the value of the search input.
    // Display the results (food items) 
    getFoodItems: function() {

        var queryString = $('#search-input').val();
        this.queryNutritionixAPI(queryString);
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
                if (json.hits.length > 0) {
                    // write returned JSON to console
                    for (var i = 0; i < json.hits.length; i++) {
                        console.log(json.hits[i].fields.item_name);
                    }
                } else {
                    console.log("Your search: " + queryString + " did not match any listings in the Nutritionix database");
                }
            })
            .fail(function(jqxhr) {
                console.log("Error getting food info from Nutritionix");
                //write the returned object to console
                console.log(jqxhr);
            });
    }
});

//var appView = new app.AppView();
