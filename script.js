 new Vue({
     el: '#app',
     data: {
         name: 'Pomodoro',
         totaltime: 25 * 60,
         reset: false,
         timer: null
     },
     methods: {
         start: function() {
             this.timer = setInterval(() => this.dtimer(), 1000)
         },
         dtimer: function() {
             if (this.totaltime >= 1) {
                 this.totaltime--
             } else {
                 this.totaltime = 0

             }

         },
         reset: function() {

         },
         stop: function() {

         }



     },
     computed: {
         min: function() {

         },
         sec: function() {

         }
     }
 })