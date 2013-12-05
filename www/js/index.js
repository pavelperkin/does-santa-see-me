var app = {
    initialize: function() {
        this.bindEvents();
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
    }
};

$( "a#check_it" ).click(function() {
    $('#main_page').hide();
    if(Math.random() < 0.75) {
      $('#does_page').show();
    }
    else {
      $('#does_not_page').show();
    }
});

$( "a.try_again" ).click(function() {
    $('#main_page').show();
    $('#does_page').hide();
    $('#does_not_page').hide();
});