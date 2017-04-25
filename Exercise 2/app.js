new Vue({
        el: '#exercise',
        data: {
            value: '',
            value2: ''
        },
        methods:{
          alert: function () {
            alert("You clicked me")
          },
          changeValue: function () {
            this.value = event.target.value
          }
        }
    });