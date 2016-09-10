angular.module('decorators', ['templates-decorators'])
    .config(['decoratorSetupProvider', function (decoratorSetupProvider) {
        decoratorSetupProvider.createDecorators(['decorators']);
    }]);