angular.module('decorators')
    .directive('home_de-de', ['homeService', function (homeService) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../public/javascripts/src/templates/homeDirective_de-de.html',
            link: function ($scope) {
                $scope.info = homeService.getInfo();
            }
        }
    }]);