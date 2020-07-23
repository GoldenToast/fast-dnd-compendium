const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer:{
        proxy:{
            '/lib': {
                target: 'http://localhost:3000/lib/'
            }
        }
    }
};