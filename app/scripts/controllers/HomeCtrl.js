(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
        this.rooms = Room.all;
        this.newMessage;
        console.log(this.rooms);
    
         this.sendMessage = function(){
            Message.send(this.newMessage, this.active.room.$id);
             
            this.newMessage = '';
        }
        
         this.activeRoom = function(room) {
             this.active = room;
             this.listOfMessages = Message.getByRoomId(this.active.room.$id);
        }
         
        
       /* this.reset = function(){
            angular.element(document.querySelector('#newMessage')).val('');
        } */
        
        this.openModal = function() {
            
            var modal = $uibModal.open({
                animation: true,
                controller:'ModalCtrl as modal',
                templateUrl:'/templates/modal.html'
            
        });
            
        
      };
    }


angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal','Message',  '$cookies', HomeCtrl]);
 })();