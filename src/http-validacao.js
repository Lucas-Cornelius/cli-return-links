function extraiLinks(array) {
    return array.map((objArray) => Object.values(objArray).join());
}

async function checaStatus(listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            try {
                const res = await fetch(url, { method: 'HEAD' });
                return `${res.status} - ${res.statusText === 'Not Found' ? 'Não encontrado': res.statusText}`;
            } catch (erro) {
                return manejaErro(erro);
            }
        })
    )
    return arrStatus;
}

function manejaErro(erro) {
    if(erro.cause.code === 'ENOTFOUND') {
        return 'Link não encontrado.';
    } else {
        return 'Ocorreu algum erro.'
    }
}

export default async function listaValidada(listaDeLinks) {
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);

    return listaDeLinks.map((object,indice) => ({
        ...object,
        status: status[indice]
    }))
}
