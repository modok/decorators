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
