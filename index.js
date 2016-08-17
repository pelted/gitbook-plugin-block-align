var MarkupIt = require('markup-it');
var markdownSyntax = require('markup-it/syntaxes/markdown');
var htmlSyntax = require('markup-it/syntaxes/html');

var markdown = new MarkupIt(markdownSyntax);
var html = new MarkupIt(htmlSyntax);

var parseMarkdown = function(text) {
  md = markdown.toContent(text);
  parsed = html.toText(md);
  return parsed;
};

module.exports = {
    book: {
      assets: './assets',
      css: [ 'plugin.css' ]
    },
    blocks: {
      center: {
        process: function(block) {
          var body = ('<div class="ba-text-center">'
          + parseMarkdown(block.body)
          + '</div>');

          return {
            body: body,
            parse: true
          };
        }
      }
    }
};
