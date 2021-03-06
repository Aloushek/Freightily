/**
 * actualShipmentsController
 *
 * @class actualShipmentsController
 * @constructor
 */

angular.module('appControllers')
    .controller('actualShipmentsController', ['$scope', 'actualShipments', '$http', '$q', '$filter', 'UserAbility', function($scope, actualShipments, $http, $q, $filter, UserAbility){
        $scope.setNavigationPath("home|manage|actual_shipments");

        $scope.actualShipments = actualShipments;
        $scope.photos = [];
        $scope.route = "shipments|actual";

        //only for post photos, but never use on web client
        $scope.uploadPhoto = function upload(photos)
        {
            var formData = new FormData();
            formData.append("id_auction", 2019);
            angular.forEach(photos, function (photo) {
                formData.append(photo.name, photo);
            });

            postPhotos(formData).then(function(){
                message(1, $filter('i18next')('Upload OK!'));
            }).catch(function(){
                message(3, $filter('i18next')('Upload FAIL!'));
            })
        };
        //only for post photos, but never use on web client
        var postPhotos = function(formData){
			return $q(function(resolve, reject){
				$http({
					method: 'POST',
                    transformRequest: angular.identity,
                    data: formData,
					headers: { 'token': window.localStorage.getItem("TOKEN"), 'Content-Type': undefined},
					url: 'http://localhost:51246/api/data/company/files',
				}).then(function(response) {
					resolve(response.data);
				}).catch(function(error){
					reject();
				})
			});
		};
    }
    ]);


