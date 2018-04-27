# webpack-prefix-replace-plugin
A plugin for webpack to replace the prefix with giving string.\
It do the job at webpack compiler's 'emit' hook. Which means the the assets(output files) have been created, but not been emited to the target directory. So it will check all output files and do the replacement work.\
**NOTE:** it matchs files among the **output files** that configed in webpack output option. 

# Install

>`npm install webpack-prefix-replace-plugin`

# Usage
1. import the plugin
2. config the plugin
```
const WebpackPrefixReplacePlugin = require("webpack-prefix-replace-plugin");
... ...
plugins: [
  ... ...
  new WebpackPrefixReplacePlugin({
    file_types: /.*?\.(html|js|css)$/,
    prefix: /MY_PREFIX_EXEMPLE/g,
    replacement: "replace_exemple"
  })
  ... ...
]
```

# Config params

* ***file_type***: The regex to match the file names among the webpack **output files** . You can use it to match certain file types(as above) or certain file names. 
* ***prefix***: The regex to match the prefix string. Do add the alias **g** in the regex, otherwise it will only match and replace the first matched string. See the [js String.prototype.replace() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) for more detail.
* ***replacement***: The string to replace the 'prefix'.

# For Angular user
If you use the official webpack configuration.\
You can find the webpack configration files in 'your node_modules parent dir/node_modules/@angular/cli/models/webpack-configs/'. Find the correspond config file(ex: development.js for develop enviroment, production.js for production enviroment) and add the plugin.\
**```NOTE:```**\
Angular will generate the image urls(in scss(css) and js files) to 'base64' data, when angular can't find the file, there will be an error. So for exemple in your scss file, there is a line like: "background-image: url('MY_PREFIX/exemple.png')". When angular compile this file it finds that the dir 'MY_PREFIX' do not exist, it will rise an error. \
A trick to avoid the problem is add 'http://' to your prefix. As angular finds the url starts with 'http://', it will leave the url as it is. So the plugin can find and replace it at the 'emit' moment.\
For Exemple you can config the ***prefix*** as /http:\\/\\/MY_PREFIX/g.

