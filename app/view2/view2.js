'use strict';

angular.module('myApp.vimeo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vimeo', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);