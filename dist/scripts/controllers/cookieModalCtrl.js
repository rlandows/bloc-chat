(function(){
    function CookieModalCtrl($uibModalInstance, $cookies) {
        this.user;
        this.error;
        this.setUser = function(user, closeModal) {
            if(this.user && this.userInput != '') {
                $cookies.put('username', this.user);
                this.closeModal();
            } else {
                this.error = "Must set Username to continue";
            }
        }
        
        this.closeModal = function() {
            $uibModalInstance.close();
            console.log($cookies.get('username'));
        }
    }
    
    angular
        .module('blocChat')
        .controller('CookieModalCtrl',['$uibModalInstance','$cookies', CookieModalCtrl]);
})();