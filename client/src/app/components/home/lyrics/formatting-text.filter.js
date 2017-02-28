export function FormattingText($sce) {
  'ngInject'
  return function(input) {
    if (input) {
      input = input.split("\n").join("<br>");
    }
    return $sce.trustAsHtml(input);
  };
}
