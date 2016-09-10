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
