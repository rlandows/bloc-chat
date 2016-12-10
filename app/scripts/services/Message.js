(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        var messageArr = $firebaseArray(messages.orderByChild("roomId").equalTo(roomId));
        return messageArr;
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();




(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        /*var messages = $firebaseArray(ref); */
        
    
        return {
            getByRoomId: function (roomId) {
                var messageArr = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
                return messageArr;
            }
        };
    }
    
    angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
    
})();