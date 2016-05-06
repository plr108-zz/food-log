// js/views/food-log-view.ls

var app = app || {};

app.FoodItemView = Backbone.View.extend({
    // DOM element for food item
    tagName: 'li',

    // food item template
    template: _.template($('#food-item-template').html()),

    //food item DOM events will go here
    events: {

    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
