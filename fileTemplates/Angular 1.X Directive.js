(function () {
  app.directive('${directiveName}', ${directiveName});

  function ${directiveName} () {
    return {
      link:        link,
      templateUrl: '/template/is/located/here.tpl.html',
      restrict:    'EA'
    };

    function link (scope, element, attrs) {
      // content
    }
  }
})();
