(function() {
    function HomeCtrl(Message, Room, $uibModal) {
        this.rooms = Room.all;
        console.log(this.rooms);
    
        
         this.activeRoom = function(room) {
             this.active = room;
             this.listOfMessages = Message.getByRoomId(this.active.room.$id);
        }
         
    
        
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
    .controller('HomeCtrl', ['Message', 'Room', '$uibModal', HomeCtrl]);
 })();