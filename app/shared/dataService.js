angular.module('myApp.services', []).
factory('dataService', ['$http',function($http){
	return { 
		getVimeoData: function(filter,page){
			console.log("inside getVimeoData");
			var url = 'https://api.vimeo.com/users/user967251/videos';

			return $http.get(url,{
				headers: {
					'Authorization': 'bearer INSERT_TOKEN_HERE'
				}
			});
		},

		getInstagramData: function(filter,page){
			var url = 'https://api.instagram.com/v1/users/684979591/media/recent/';
			console.log("Inside getinstagramdata");
			return $http.jsonp(url,{
				params: {
					callback: 'JSON_CALLBACK',
					client_id: 'INSERT_TOKEN_HERE',
					count: 25
				}			
			});
		}
	}
}]);

