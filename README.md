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

* *file_type*: The regex to match the file names among the webpack **output files** . You can use it to match certain file types(as above) or certain file names. 
* *prefix*: The regex to match the prefix string. Do add the **g** for the regex, otherwise it will only match and replace the first matched string. See the [js String.prototype.replace() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) for more detail.
* *replacement*: The string to replace the 'prefix'.
