'use strict';

describe('Filter: FormattingText', () => {

  // load the filter's module
  beforeEach(module('letrasApp'));

  // initialize a new instance of the filter before each test
  let FormattingText;
  beforeEach(inject(($filter) => {
    FormattingText = $filter('FormattingText');
  }));

  it('should return the input with <br> tag', () => {
    let text = 'Testing\nthis\nfor\nsure!';
    expect(FormattingText(text)).toBe('Testing<br>this<br>for<br>sure!');
  });

});
