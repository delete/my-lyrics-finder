'use strict';
import { FormattingText } from './formatting-text.filter';

const fakeSce = {
  trustAsHtml: txt => txt
}

const formattingText = FormattingText(fakeSce);

describe('Filter: FormattingText', () => {

  it('should change "\\n" for <br> tag from input text', () => {
    let text = 'Testing\nthis\nfor\nsure!';
    expect(formattingText(text)).toBe('Testing<br>this<br>for<br>sure!');
  });

});
