angular.module('decorators')
    .service('homeService', [function () {
        var _self = this;
        _self.getInfo = function () {
            return "en-gb info";
        }
    }]);