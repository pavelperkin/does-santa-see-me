var app = {
    initialize: function() {
        this.bindEvents();
        this.initSanta();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    // Santa shit
    isPlayed: false,
    initSanta: function(){
        var app = this;
        var page = document.getElementById('main_page');

        page.addEventListener("click", actionHandler, false);
        // page.addEventListener("touchend", actionHandler, false);

        function actionHandler() {            

            var className = 'app';
            if(!app.isPlayed) {
                className += app.isSantaLooking() ? ' sees' : ' doesnt-see';
            }

            app.isPlayed = !app.isPlayed;
            page.className = className;
        }
    },
    isSantaLooking: function () {
        navigator.notification.vibrate(500);        
        return Math.random() < 0.5;
    }
};
