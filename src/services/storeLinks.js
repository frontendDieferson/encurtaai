// Buscar Links Salvos

export async function getLinkSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linkSaves = JSON.parse(myLinks) || []

    return linkSaves
}


// Salvar Link no LocalStorage

export async function saveLink(key, newLink) {

    let linkStored = await getLinkSave(key)

    // Se já tiver um link salvo com algum ID, não deixar duplicar.
    let hasLink = linkStored.some( link => link.id === newLink.id )

    if(hasLink) {
        console.log('Esse link já existe na sua lista!')
        return;
    }
    // Adicionar novo link na lista...
    linkStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linkStored))
    console.log('Link salvo com sucesso!')
}

// Deletar Link Salvo

export function deleteLink(links, id) {

    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    return myLinks
}