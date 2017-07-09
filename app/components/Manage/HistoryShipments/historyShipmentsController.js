/**
 * historyShipmentsController
 *
 * @class historyShipmentsController
 * @constructor
 */

angular.module('appControllers')
    .controller('historyShipmentsController', ['$scope', 'pastShipments', function($scope, pastShipments){
        $scope.setNavigationPath("home|manage|history_shipments");

        $scope.pastShipments = pastShipments;
        $scope.photos = [];
        $scope.route = "shipments|history";
    }
    ]);


