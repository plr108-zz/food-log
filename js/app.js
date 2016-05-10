// A simple todo model
var Todo = Backbone.Model.extend({
  defaults: { title: "New Todo" }
});
// Create a Firebase.Collection and set the 'firebase' property
// to the URL of our database
var TodoCollection = Backbone.Firebase.Collection.extend({
  model: Todo,
  url: "https://intense-inferno-5722.firebaseio.com"
});

var TodoView = Backbone.View.extend({
  tagName:  "li",
  template: _.template("<%= title %>"),
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

// The view for the entire application
var AppView = Backbone.View.extend({
  el: $('#todoapp'),
  events: {
    "click #add-todo" : "createTodo",
  },
  initialize: function() {
    this.list = this.$("#todo-list"); // the list to append to
    this.input = this.$("#new-todo"); // the textbox for new todos
    // by listening to when the collection changes we
    // can add new items in realtime
    this.listenTo(this.collection, 'add', this.addOne);
  },
  addOne: function(todo) {
    var view = new TodoView({model: todo});
    this.list.append(view.render().el);
  },
  createTodo: function(e) {
    if (!this.input.val()) { return; }
    // create a new location in firebase and save the model data
    // this will trigger the listenTo method above and a new todo view
    // will be created as well
    this.collection.create({title: this.input.val()});
    this.input.val('');
  }
});
// Create a function to kick off our BackboneFire app
function init() {
  // The data we are syncing from our remote Firebase database
  var collection = new TodoCollection();
  var app = new AppView({ collection: collection });
}
// When the document is ready, call the init function
$(function() {
  init();
});
