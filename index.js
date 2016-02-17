var postcss = require('postcss');

function initProcessor(options){
  var processors = [];

  if (Array.isArray(options.processors))
  {
    options.processors.forEach(function(processor){
      if (typeof processor == 'string')
      {
        processor = { 
          name: processor,
          options: {}
        }
      }

      processors.push(require(processor.name)(processor.options));
    });
  }

  if (!processors.length)
      return;

  return postcss(processors);
}

module.exports = {
  build: function(api, options) {
    var processor = initProcessor(options);

    if (processor)
    {
      api.addPreprocessor('.css', function(content, filename) {
        return processor.process(content).css;
      });
    }
  },
 
  server: function(api, options){
    var processor = initProcessor(options);

    if (processor)
    {
      api.addPreprocessor('.css', function(content, filename, callback){
        content = String(content || '');
        try
        {
          var result = processor.process(content).then(function(result){
            callback(null, result.css);
          }, callback);
        }
        catch(e)
        {
          callback(e);
        }
      });
    }
  }
};
