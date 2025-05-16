function baixarConteudo(nomeConteudo, callback){
 console.log(`Ìniciando o download de ${nomeConteudo}...`);

 //simula o tempo de um download.
 setTimeout(function(){
    console.log(`\n${nomeConteudo} foi baixado com sucesso.`);

    callback(null, nomeConteudo); //download concluido.

 }, 2000); //2 segundos.
}

//função callback de conclusão.
function callbackConcluir(erro, nomeConteudo){
    if(erro){
        console.log(`Erro ao baixar ${nomeConteudo}: ${erro}`);
    }else{
        console.log(`Download de ${nomeConteudo} concluído com sucesso!`);
    }
}

baixarConteudo('Documento.pdf', callbackConcluir);
baixarConteudo('Imagem.jpg', callbackConcluir);
baixarConteudo('Video.mp4', callbackConcluir);