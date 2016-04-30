// food_item model

var app = app || {};

// food_item attributes:
//   item_name
//   brand_name
//   calories
//   saturated_fat
//   sodium
//   sugars
//   serving_size_qty
//   serving_size_unit
//   servings_consumed - this is a multiplier used to track how much of the food item was consumed by the user

app.FoodItem = Backbone.Model.extend({

    // to start, the defaults are dummy values as this iteration of the app will just display one food item
    defaults: {
        item_name: 'Some Item Name',
        brand_name: 'Some Brand',
        calories: 360,
        saturated_fat: 10,
        sodium: 9,
        sugars: 8,
        serving_size_qty: 1,
        serving_size_unit: "cup",
        servings_consumed: 1
    }
});

// Instantiate FoodItem Model.  The FoodItem in the model has default values.
//app.FoodItem = new FoodItem({});
