// js/views/food-item.view

var app = app || {};

var FoodItemView = Backbone.View.extend({
    // DOM element for food item
    tagName: 'li',

    // food item template
    template: _.template($('#food-item-template').html()),

    //food item DOM events will go here
    events: {

    },

    init: function() {
        this.$el = $('#todo');
    },

    render: function() {

    }
});

// create a view for a food item
var foodItemView = new FoodItemView({ model: dummyFoodItem });
