import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';
import listaValidada from './http-validacao.js';

const caminho = process.argv;

async function imprimeLista(valida, lista, nome = '') {
    if (valida) {
        console.log(chalk.red.bgWhite('Lista Validada'));
        console.log(chalk.red('\n------------------------------'));
        console.log(chalk.black.bgWhite(nome), await listaValidada(lista));
        console.log(chalk.red('------------------------------\n'));
    } else {
        console.log(chalk.red('\n------------------------------'));
        console.log(chalk.black.bgWhite(nome), lista);
        console.log(chalk.red('------------------------------\n'));
    }
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        console.log(chalk.bgRedBright(erro.code), chalk.red('Arquivo ou diretório não existente!'));
        return;
    }

    if (fs.lstatSync(caminho).isFile()) {
        const arquivos = await pegaArquivo(argumentos[2]);
        console.log(chalk.yellow('\nLista de links:\n'));
        imprimeLista(valida, arquivos);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        console.log(chalk.yellow('\nLista de links:\n'));
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(valida, lista, nomeDeArquivo);
        })
    }
}

processaTexto(caminho);