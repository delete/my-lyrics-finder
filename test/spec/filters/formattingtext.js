'use strict';

describe('Filter: FormattingText', function () {

  // load the filter's module
  beforeEach(module('letrasApp'));

  // initialize a new instance of the filter before each test
  var FormattingText;
  beforeEach(inject(function ($filter) {
    FormattingText = $filter('FormattingText');
  }));

  it('should return the input with <br> tag', function () {
    var text = 'Testing\nthis\nfor\nsure!';
    expect(FormattingText(text)).toBe('Testing<br>this<br>for<br>sure!');
  });

});
