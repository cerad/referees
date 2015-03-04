'use strict';

var myApp = angular.module('myApp', ['ngResource','ngRoute']);

myApp.controller('RefereeListController', ['$scope', 'RefereeResource',
  function($scope, RefereeResource) {
    $scope.referees = RefereeResource.query();
    $scope.orderProp = 'age';
  }
]);
myApp.controller('RefereeItemController', ['$scope', '$routeParams', 'RefereeResource',
  function($scope, $routeParams, RefereeResource) {
    $scope.referee = RefereeResource.get({ id: 42 });
  }
]);

/* =============================================
 * This needs more research
 */
myApp.factory('RefereeResource', ['$resource',
  function($resource){
    return $resource('app_dev.php/referees/:id', {}, {
    //query: {method:'GET', isArray:true}
    });
}]);


