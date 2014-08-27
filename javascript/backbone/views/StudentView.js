<<<<<<< HEAD
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
=======
var StudentView = Backbone.View.extend({
    tagName: "li",

    template: _.template( $("#studentTemplate").html() ),

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );
        return this;
    }
});

var student = new Student;
var studentView = new StudentView({ model: student});
>>>>>>> e6846f021ea552d6fa027009c49a8689f000f67a
