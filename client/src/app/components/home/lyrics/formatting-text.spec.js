'use strict';
import { FormattingText } from './formatting-text.filter';

const fakeSce = {
  trustAsHtml: txt => txt
}

const formattingText = FormattingText(fakeSce);

describe('Filter: FormattingText', () => {

  it('should change "\\n" for <br> tag from input text', () => {
    let expected = 'Testing<br>this<br>for<br>sure!';
    let text = 'Testing\nthis\nfor\nsure!';
    let actual = formattingText(text);
    
    expect(actual).toBe(expected);
  });

  it('should return undefined if nothing was given', () => {
    let actual = formattingText();
    
    expect(actual).toBeUndefined();
  });

});
