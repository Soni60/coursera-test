(function ()
{

angular.module('FirstApp', [])
.controller('FirstController', FirstController)


   function FirstController($scope)
    {
        $scope.name = "";
        $scope.ChangeText = function()
        {
            var box = document.getElementById("box");
             if( $scope.name === "Enjoy!" ||  $scope.name === "Too much!" )
             {
                  box.style.color = "green";
                  box.style.borderColor  = "green";
                 
            }
             else if( $scope.name === "Please enter data first")
             {
                 box.style.color = "red";
                 box.style.borderColor  = "red";
             }
             
        
        };
    }



})();