const path = require('path'); //commonJS é o padrão do node.

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'public', 'assets', 'js'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      }]
    },
    devtool: 'source-map'
  };
/* 
 mode developmente só gera o arquivo mas não minificado

 entry é o arquivo raiz js

 output é um objeto com a saida do código do bundle

    no node temos acesso a variavel __dirname que é o diretório atual
    e como está dentro do path.resolve basta adicionarmos o caminho até
    a pasta que queremos, da mesma maneira do exemplo acima.

    filename é o nome do arquivo.

    module

    devtool:'source-map' faz o mapeamento já que o arquivo fica diferente
    (estaremos vendo o bundle no navegador) então o source map procura o 
    arquivo correto.

*/