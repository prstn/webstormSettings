(function () {
  'use strict';
  var $moduleVar;
  var httpBackend;
  var http;
  var json;
  var \$scope;

  beforeEach(function() {
      inject(function(
        $moduleFullName,
        \$http,
        \$httpBackend,
        \$json,
        \$rootScope
      ) {
          $moduleVar = $moduleFullName;
          http = \$http;
          httpBackend = \$httpBackend;
          json = \$json;
          \$scope = \$rootScope.\$new();
      });
  });


  describe('$moduleFullName', function () {
    describe('Sub Section', function() {
      it('unit function', function () {
        expect(false).toBe(true);
      });
    });

  }); // end module

}());
