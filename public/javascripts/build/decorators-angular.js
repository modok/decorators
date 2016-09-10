angular.module('templates-decorators', ['../public/javascripts/src/templates/homeDirective.html', '../public/javascripts/src/templates/homeDirective_de-de.html', '../public/javascripts/src/templates/homeDirective_it-it.html']);

angular.module("../public/javascripts/src/templates/homeDirective.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/javascripts/src/templates/homeDirective.html",
    "<div class=\"home\">\n" +
    "    HOME!\n" +
    "\n" +
    "    {{info}}\n" +
    "</div>");
}]);

angular.module("../public/javascripts/src/templates/homeDirective_de-de.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/javascripts/src/templates/homeDirective_de-de.html",
    "<div class=\"home\">\n" +
    "    HOME DE!\n" +
    "\n" +
    "    {{info}}\n" +
    "</div>");
}]);

angular.module("../public/javascripts/src/templates/homeDirective_it-it.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/javascripts/src/templates/homeDirective_it-it.html",
    "<div class=\"home\">\n" +
    "    HOME ITA!\n" +
    "\n" +
    "    {{info}}\n" +
    "</div>");
}]);

angular.module('decorators', ['templates-decorators'])
    .config(['decoratorSetupProvider', function (decoratorSetupProvider) {
        decoratorSetupProvider.createDecorators(['decorators']);
    }]);
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
angular.module('decorators')
    .provider('decoratorSetup', ['$provide'
        , function ($provide) {
            var _self = this;
            _self.createDecorators = function (modules) {
                var decorators = [];
                modules.forEach(function (module) {
                    var _module = angular.module(module);
                    _module._invokeQueue.forEach(function (service) {
                        var serviceName = (service[2][0].indexOf("_") !== -1) ? service[2][0].split('_')[0] : service[2][0];
                        if (service[2][0].indexOf("_") !== -1) {
                            if (decorators.indexOf(serviceName) === -1) {
                                if (service[1] == 'directive') {
                                    serviceName += 'Directive';
                                }
                                decorators.push(serviceName);
                            }
                        }
                    });
                    decorators.forEach(function (decorator) { 
                        $provide.decorator(decorator, ['$delegate', '$locale', '$injector'
                            , function ($delegate, $locale, $injector) {
                                if (decorator.indexOf("Directive") !== -1) {
                                    decorator = decorator.replace('Directive', '');
                                    decorator = decorator + '_' + $locale.id + 'Directive';
                                } else {
                                    decorator += '_' + $locale.id;
                                }
                                if ($injector.has(decorator)) {
                                    return $injector.get(decorator);
                                }
                                return $delegate;
                            }
                        ]);
                    });
                });
            };

            this.$get = [function () {

            }];
        }]);

angular.module('decorators')
    .service('homeService', [function () {
        var _self = this;
        _self.getInfo = function () {
            return "en-gb info";
        }
    }]);
angular.module('decorators')
    .service('homeService_it-it', [function () {
        var _self = this;
        _self.getInfo = function () {
            return "it-it info";
        }
    }]);