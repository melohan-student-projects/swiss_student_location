// babel.config.js
module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
    plugins: [
        ['module-resolver', {
            root: ['./src'],
            alias: {
                '@components': './src/components',
                '@config': './src/config',
                '@utils': './src/utils',
                '@assets': './src/assets',
                '@pages': './src/pages',
            },
        }],
    ],
};
