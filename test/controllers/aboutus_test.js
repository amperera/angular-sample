'use strict';

describe('app.module', function() {

  beforeEach(module('app'));

  describe('about us controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var aboutUsCtrl = $controller('AboutUsController');
      expect(aboutUsCtrl).toBeDefined();
    }));

  });
});