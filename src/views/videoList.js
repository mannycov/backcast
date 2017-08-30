var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video
      }).render().el
    );
  },

  template: templateURL('src/templates/videoList.html')

});