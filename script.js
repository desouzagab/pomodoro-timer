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
                 this.stop()
                 alert("Over")
             }
         },
         reset: function() {
             this.totaltime = 60 * 25
             clearInterval(this.timer)
             this.timer = null
         },
         stop: function() {
             clearInterval(this.timer)
             this.timer = null
         }



     },
     computed: {
         min: function() {
             const min = Math.floor(this.totaltime / 60)
             if (min > 10) return min
             else return '0' + min

         },
         sec: function() {
             const sec = this.totaltime - (this.min * 60)
             if (sec > 10) return sec
             else return '0' + sec

         }
     }
 })