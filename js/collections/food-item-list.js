// food-item-list
//
// This is the collection of food items results returned after querying the Nutritionix API

var app = app || {};

// This collection is backed by Firebase
var FoodItemList = Backbone.Firebase.Collection.extend({

    model: app.FoodItem,

    // URL for Firebase App Database
    url: "https://intense-inferno-5722.firebaseio.com"
});

app.FoodItemResults = new FoodItemList();