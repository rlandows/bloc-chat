(function () {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                animation: true,
                controller: 'CookieModalCtrl as cookieModal',
                templateUrl: '/templates/cookieModal.html' 
            })
            
        }
        
        function setUser(userInput, closeModal) {
            $cookies.put(username, userInput);
            closeModal();
        }
        
        return {
            setUser: setUser
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
    
})();