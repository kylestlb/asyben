'use strict';

angular.module('myApp.main', ['ngRoute','myApp.services','angular-lodash'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$q','$scope','dataService','$sce',function($q,$scope,dataService,$sce){
	$scope.stuff = [];
	console.log("BEFORE VIMEO");

	var vimeoUrlReshape = function (elem){
		elem.src = "vimeo";
		var regEx = /videos/i;
		var newLink = ("http://player.vimeo.com" + elem.uri).replace(/videos/i,"video");
		elem.embedlink = $sce.trustAsResourceUrl(newLink);
		elem.date = Date.parse(elem.created_time).toString();
		return elem;
	};	

	var instagramUrlReshape = function (elem){
		elem.src = "instagram";
		elem.embedlink = $sce.trustAsResourceUrl(elem.link + "embed");
		elem.date = (elem.created_time*1000).toString();
		return elem;
	};

	$q.all([dataService.getVimeoData('filter','test'),dataService.getInstagramData('filter','test')])
	.then(function(data){
		var d1 = data[0].data.data.map(vimeoUrlReshape);
		console.log("D1: ");
		console.log(d1);
		var d2 = data[1].data.data.map(instagramUrlReshape);
		console.log("D2: ");		
		console.log(d2);				
		
		var conc = d1.concat(d2);
		var lolz = conc.sort(function(a,b){
			a = new Date(parseInt(a.date));
			b = new Date(parseInt(b.date));
			console.log(a);
			return a>b ? -1 : a<b ? 1: 0;
		});
		$scope.stuff = lolz;
	});


}]);

