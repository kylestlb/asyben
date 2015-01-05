'use strict';

angular.module('myApp.main', ['ngRoute','myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','dataService','$sce',function($scope,dataService,$sce){
	var cbfunc = function (elem){
		elem.src = "vimeo";
		var reg = /videos/i;
		var old = ("//player.vimeo.com" + elem.uri).replace(reg,"video");
//		old = old.replace(reg,"video");
		elem.embedlink = $sce.trustAsResourceUrl(old);
//		elem.embedlink = $sce.trustAsResourceUrl("//player.vimeo.com" + elem.uri);
		console.log(elem.embedlink);
		return elem;
	};
	dataService.getVimeoData('filter','test')
	.then(function(data){
		console.log(data);
		$scope.stuff = data.data.data.map(cbfunc);
		console.log($scope.stuff);
	});

}]);

