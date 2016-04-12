// Nutritionix API test query
var nutritionixTest = function() {
    // holy guacamole!
    var queryUrl = 'https://api.nutritionix.com/v1_1/search/guacamole?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=8c1adda0&appKey=99e51ebebe522453c0f10c70f4eb4738';

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
};

nutritionixTest();
