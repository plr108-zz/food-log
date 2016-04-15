// food_item model

var app = app || {};

// food_item attributes:
// item_name
// brand_name
// calories
// saturated_fat
// sodium
// sugars
// serving_size_qty
// serving_size_unit
// servings_consumed - this is a multiplier used to track how much of the food item was consumed by the user

app.FoodItem = Backbone.Model.extend({

    defaults: {
        item_name: 'Some Item Name',
        brand_name: 'Some Brand',
        calories: 0,
        saturated_fat: 0,
        sodium: 0,
        sugars: 0,
        serving_size_qty: 0,
        serving_size_unit: 0,
        servings_consumed: 1
    }
});
