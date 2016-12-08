(function () {
    function ModalCtrl($uibModalInstance, $scope, Room) {
        $scope.rooms = Room.all;
        
        $scope.addRoom = function() {
            var newRoom = document.getElementById('chatName').value;
            $scope.rooms.$add({$value : newRoom});
            console.log(newRoom);
            $uibModalInstance.close();
        }
        
        $scope.closeModal = function() {
            $uibModalInstance.close()
        }
    };
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ModalCtrl);
})();