angular.module('decorators')
    .directive('home_it-it', ['homeService', function (homeService) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../public/javascripts/src/templates/homeDirective_it-it.html',
            link: function ($scope) {
                $scope.info = homeService.getInfo();
            }
        }
    }]);