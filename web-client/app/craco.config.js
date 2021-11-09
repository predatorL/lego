const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
const CracoLessPlugin = require("craco-less");

module.exports = {
    webpack: {
        alias: {
            '@': resolve("src"),
            'components': resolve("src/components"),
            'common': resolve("src/common"),
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                cssLoaderOptions: {
                    modules: { localIdentName: "[local]_[hash:base64:5]" },
                }
            }
        }
    ]
}