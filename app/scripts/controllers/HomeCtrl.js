(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        console.log(this.rooms);
        
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
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
 })();