'use strict';
(function() {
    
var refereeComponent = angular.module('zaysoApp.refereeComponent', []);

refereeComponent.controller('RefereeListController', ['$scope', 'RefereeResource',
  function($scope, RefereeResource) {
    $scope.referees = RefereeResource.query();
    $scope.orderProp = 'age';
  }
]);
refereeComponent.controller('RefereeShowController', ['$scope', '$routeParams', 'RefereeResource',
  function($scope, $routeParams, RefereeResource) {
    $scope.referee = RefereeResource.get({ id: $routeParams.id });
  }
]);
refereeComponent.controller('RefereeEditController', ['$scope', '$routeParams', 'RefereeResource',
  function($scope, $routeParams, RefereeResource) 
  {
    $scope.referee = RefereeResource.get({ id: $routeParams.id });
    
    $scope.reset = function() {
      // $scope.item = angular.copy($scope.itemMaster);
    };
    
    $scope.edit = function() {
    //$scope.itemMaster = angular.copy(item);
      console.log($scope.referee);
      RefereeResource.update($scope.referee);
    };
  }
]);

/* =============================================
 * This needs more research
 */
refereeComponent.factory('RefereeResource', ['$resource',
  function($resource){
    return $resource('app_dev.php/referees/:id', {id: '@id'}, {
      update: {method: 'PUT'}
    });
}]);

})();