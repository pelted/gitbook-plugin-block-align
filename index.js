module.exports = {
    book: {
      assets: './assets',
      css: [ 'plugin.css' ]
    },
    blocks: {
      center: {
        process: function(block) {
          var body = ('<p class="ba-text-center">'
          + (block.body)
          + '</p>');

          return {
            body: body,
            parse: true
          };
        }
      }
    }
};
