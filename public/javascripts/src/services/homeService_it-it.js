angular.module('decorators')
    .service('homeService_it-it', [function () {
        var _self = this;
        _self.getInfo = function () {
            return "it-it info";
        }
    }]);