const path = require('path');
let srcDir = path.join(__dirname, '/src');
let publicDir = path.join(__dirname, '/public');

module.exports = {
    entry: `${srcDir}/App.js`,
    mode: 'none',
    output: {
        filename: 'bundle.js',
        path: publicDir
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: srcDir,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};