/**
 * @Author Caipei FAN(2272946937@qq.com)
 * @CreateDate  2018/4/27
 */
class WebpackPrefixReplacePlugin{
  // Default options
  constructor (options = {}){
    this.options = {
      file_types: options.file_types ?  options.file_types : /.*?\.(html)$/,
      prefix: options.prefix ? options.prefix : null,
      replacement: options.replacement ? options.replacement : null
    };
  }

  apply (compiler){
    let options = this.options;

    compiler.plugin('emit', function(compilation, callback){
      for(var filename in compilation.assets){
        if(options.file_types.test(filename)){
          if(options.prefix != null && options.replacement != null){
            let content = compilation.assets[filename].source().replace(options.prefix,options.replacement);
            let len = content.length;
            compilation.assets[filename]={
              source: function(){
                return content;
              },
              size: function(){
                return len;
              }
            }
          }
        }
      }
      callback();
    });
  };
}
module.exports = WebpackPrefixReplacePlugin;