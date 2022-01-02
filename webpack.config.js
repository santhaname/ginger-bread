import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import htmlWebPackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

export default [
    {
        entry: {browser:'./client/main.js'},
        mode: 'development',
        resolve: {
            alias:{
                client: path.resolve(__dirname, 'client')
            }
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist/public'),
        },
        plugins:[
            new htmlWebPackPlugin({
                template:'./client/index.html'
            })
        ],
        module: {
            rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
                }
            }
            ]
        }  
    },
    {
        entry:'./server/bin/www',
        mode: 'development',
        target: 'node',
        externals: [nodeExternals()],
        output: {
            filename: 'server.js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            extensions: ['.wasm', '.mjs', '.js', '.json', '.dust'],
            modules: ['node_modules'],
        },
        module: {
            rules: [
            {
                test: /\.m?js$/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
                }
            },
            {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false
                }
              }
            ]
        }  
    }
]