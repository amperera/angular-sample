'use strict';

describe('app.module', function() {

  beforeEach(module('app'));

  describe('dashboard controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var dashboardCtrl = $controller('DashboardController');
      expect(dashboardCtrl).toBeDefined();
    }));

  });
});