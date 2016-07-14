angular.module('afnAdminApp.directives', []).directive('afnInput', function(){
  return {
    restrict: 'E',
    scope: {
      ngModelVar: '=',
    },
    templateUrl: '/partials/shared/afn-input.html',
    link: function(scope, iElement, iAttrs){
      console.log(iAttrs);
      for(k in iAttrs) {
        scope[k] = iAttrs[k];
      }
    },
  }
});
