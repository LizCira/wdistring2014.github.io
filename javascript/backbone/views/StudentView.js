// var StudentView = Backbone.View.extend({
//   // template: _.template($('#headshot-template').html()),
//   profileTemplate: _.template($('#profile-template').html()),
//   tagName: 'li',
//   initialize: function(){
//     this.listenTo(this.model, 'all', this.render)
//   },
//   render: function(){
//     this.$el.html(this.template(this.model.attributes))
//     return this;
//   }
//   // events: {
//   //   'click' : 'renderStudentDesc'
//   // },
//   // renderStudentDesc: function() {
//   //   var container = $('.contentHolder');
//   //   container.html('');
//   //   container.html(this.profileTemplate(this.model.attributes));
//   // }
// })

var StudentView = Backbone.View.extend({
   profileTemplate: _.template($('#profile-template').html()),
   tagName: 'li',
   initialize: function(){
    this.listenTo(this.model, 'all', this.render)
  }
  // },
  //   render: function(){
  //   this.$el.empty();
  //   this.$el.html( this.template( this.model.attributes ) );

  //   return this;
  // }

})
