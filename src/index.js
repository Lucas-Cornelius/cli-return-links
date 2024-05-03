import fs from 'fs'
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(element => ({[element[1]]: element[2]}));
    return resultados.length !== 0 ? resultados : 'Não há links no arquivo';
}

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code,'Não há arquivo no diretório.'));
}

async function pegaArquivo(archPath) {
    try {
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(archPath,enconding);
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro);
        return;
    }
}

export default pegaArquivo;