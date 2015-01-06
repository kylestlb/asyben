angular.module('myApp.services', []).
factory('dataService', ['$http',function($http){
	return { 
		getVimeoData: function(filter,page){
			var url = 'https://api.vimeo.com/users/user967251/videos';
//			var url = 'https://api.vimeo.com/users/user967251/videos/oembed.json';

			return $http.get(url,{
				headers: {
					'Authorization': 'bearer insert_token_here'
				}
			});
//			}).then(function(data){
//			});
		}
	}
}]);

