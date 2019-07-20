const app = new Vue({
    el: '#app',
    data: {
        timer: null,
        totalTime: (25 * 60),
        resetButton: false,
        title: "Lets begin!"
    },
    methods: {
        start: function() {
            this.timer = setInterval(() => this.countdown(), 1000);
            this.resetButton = true;
            this.title = "Just do it!"
        },
        stop: function() {
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = true;
            this.title = "Never quit, work your ass off!!"
        },
        reset: function() {
            this.totalTime = (25 * 60);
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = false;
            this.title = "Lets go!!"
        },
        padTime: function(time) {
            return (time < 10 ? '0' : '') + time;
        },
        countdown: function() {
            if (this.totalTime >= 1) {
                this.totalTime--;
            } else {
                this.totalTime = 0;
                this.reset()
            }
        }
    },
    computed: {
        min: function() {
            const min = Math.floor(this.totalTime / 60);
            return this.padTime(min);
        },
        sec: function() {
            const sec = this.totalTime - (this.min * 60);
            return this.padTime(sec);
        }
    }
})