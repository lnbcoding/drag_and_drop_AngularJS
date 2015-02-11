/*
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */
// var drag = angular.module('app', ['ngDraggable']);


// drag.controller('MainCtrl', function ($scope) {
//     $scope.onDragComplete=function(data,evt){
//        console.log("drag success, data:", data);
//     }
//     $scope.onDropComplete=function(data,evt){
//         console.log("drop success, data:", data);
//     }
//  });

    angular.module('app', ['ngDraggable']).
      controller('MainCtrl', function ($scope) {
        $scope.centerAnchor = true;
        $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}
        $scope.draggableObjects = [{name:'Apple', price:0.69}, {name:'Tofu', price: 3.49}, {name:'Granola', price:4.55}, {name: 'Flatbread', price: 6.21}, {name: 'Zucchini', price: 1.22}, {name: 'Organic Beef', price: 12.99}];
        $scope.droppedObjects1 = [];
        $scope.droppedObjects2= [];
        $scope.onDropComplete1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            console.log(index);
            // if (index == -1) // has to be unique
            $scope.droppedObjects1.push(data);
        }
        $scope.onDragSuccess1=function(data,evt){
            console.log("133","$scope","onDragSuccess1", "", evt);
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }
        }
        $scope.getTotal = function(){
          var total = 0;
          for(var i = 0; i < $scope.droppedObjects1.length; i++){
            var itemPrice = $scope.droppedObjects1[i].price;
            total += itemPrice;
          }
          return total;
        }
      });
