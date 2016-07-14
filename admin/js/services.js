angular.module('afnAdminApp.services', []).factory('MimeType', function($resource) {
  var res = $resource('http://devbox.home.semaan.ca:8080/mime_types/:id', {id: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
  res.prototype.model_name = "MimeType";
  res.prototype.display_attr = "type_name";
  return res;
}).service('Syntax', function($resource) {
  var res = $resource('http://devbox.home.semaan.ca:8080/syntaxes/:id', {id: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
  res.prototype.model_name = "Syntax";
  return res;
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});;

