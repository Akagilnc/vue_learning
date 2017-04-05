var vm = new Vue({
  // We want to target the div with an id of 'events'
  el: '#events',
  data: {
    event: { name: '', description: '', date: ''},
    event_list: []
  },

  // Anythig within the ready function will run when the application loads
  mounted: function () {
    //When the application loads, we want to call the method that initializes some data
    this.fetchEvents();
  },
  methods: {

    // We dedicate a method to retrieving and setting some data
    fetchEvents: function () {
      var event_list = [
        {
          id: 1,
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2017-09-10'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Martian comes to theatres.',
          date: '2017-10-02'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music, film and interactive festival in Austin, TX.',
          date: '2016-03-11'
        }
      ];

      // $set is a convenience method provided by Vue that is similar to pushing data
      // onto an array
      this.event_list = event_list
      //this.$set('event_list', event_list);
    },

    // Adds an event to the existing events array
    addEvent: function () {
      if(this.event.name){
        this.event_list.push(this.event);
        this.event = { name: '', description: '', date: ''};
      }

    },

    // Remove is a Vue convenience method similar to splice
    deleteEvent: function (index) {
      if(confirm("Are you sure you want to delete this event?")){
        this.event_list.splice(index, 1)
      }

    }

  }
});