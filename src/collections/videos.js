// Pass the data from exampleVideoData into the videos collection.
// window.exampleVideoData = [];

var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {

  },

  parse: function(response) {

  }

});