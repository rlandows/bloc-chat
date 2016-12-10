(function() {
 function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);
    
    
    return {
        all: rooms
    };
     
    function addRoom(name) {
        rooms.$add(name);
    };
     

}

angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray',Room]);
 })();