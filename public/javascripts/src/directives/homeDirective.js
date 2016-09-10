angular.module('decorators')
    .directive('home', ['homeService', function (homeService) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../public/javascripts/src/templates/homeDirective.html',
            link: function ($scope) {
                $scope.info = homeService.getInfo();
            }
        }
    }]);