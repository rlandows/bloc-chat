(function () {
    function Message($cookies, $firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        var user = $cookies.get('username');
    
        return {
            getByRoomId: function (roomId) {
                var messageArr = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
                return messageArr;
            },
            
            send: function(newMessage, roomId, username,reset) {
                messages.$add({
                content: newMessage,
                roomId: roomId,
                username: user,
                setAt: timeFormat()
                });
                console.log(newMessage, roomId, user, firebase.database.ServerValue.TIMESTAMP);
                console.log(messages)
                
            }
            
            
        };
        
        function timeFormat() {
			var date = new Date();
			var h = date.getHours();
			var m = date.getMinutes();
			var s = date.getSeconds();
			var dayNight = "AM";

			if (h > 12) {
				h -= 12;
				dayNight = "PM";
			}
			if (m < 10) {
				m = "0" + m;
			}
			if (s < 10) {
				s = "0" + s;
			}
			return h + ":" + m + " " + dayNight;
		}
    }
    
    angular
    .module('blocChat')
    .factory('Message', ['$cookies','$firebaseArray', Message]);
    
})();