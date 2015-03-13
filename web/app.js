'use strict';

(function() {

var zaysoApp = angular.module('zaysoApp', ['ngResource','ngRoute','zaysoApp.refereeComponent']);

zaysoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/referees', {
        templateUrl: 'components/referee/referee-list.html',
        controller: 'RefereeListController'
      }).
      when('/referees/:id/show', {
        templateUrl: 'components/referee/referee-show.html',
        controller: 'RefereeShowController'
      }).
      when('/referees/:id/edit', {
        templateUrl: 'components/referee/referee-edit.html',
        controller: 'RefereeEditController'
      }).
      when('/referees/insert', {
        templateUrl: 'components/referee/referee-insert.html',
        controller: 'RefereeInsertController'
      }).
      otherwise({
        redirectTo: '/referees'
      });
  }]);
  
})();
