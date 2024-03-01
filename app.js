
const textoOriginal= document.querySelector('#b1textarea');
const mensagem= document.querySelector('#b2textarea');

const chave = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
    };

function criptografar(){
    let txtCriptografado = cripto(textoOriginal.value, chave);
    alterardisplay()
    mensagem.value=txtCriptografado;
}


function cripto(textoOriginal, chave) {
    let textoCriptografado = '';
    for (let i = 0; i < textoOriginal.length; i++) {
        const letraOriginal = textoOriginal[i];
        const letraCriptografada = chave[letraOriginal] || letraOriginal;
        textoCriptografado += letraCriptografada;
    }
    return textoCriptografado;
}


function descriptografar(){
    let txtDescriptografado = descripto(textoOriginal.value,chave);
    alterardisplay();
    mensagem.value=txtDescriptografado;
}

function criarChaveDescriptografia(chave) {
    const chaveDescriptografia = {};
    for (let letraOriginal in chave) {
        const cadeiaCriptografada = chave[letraOriginal];
        chaveDescriptografia[cadeiaCriptografada] = letraOriginal;
    }
    return chaveDescriptografia;
}

function descripto(textoOriginal, chave) {
    const chaveDescriptografia = criarChaveDescriptografia(chave);
    let textoDescripto = '';
    let posicaoAtual = 0;
    while (posicaoAtual < textoOriginal.length) {
        let encontrado = false;
        for (let cadeiaCriptografada in chaveDescriptografia) {
            if (textoOriginal.startsWith(cadeiaCriptografada, posicaoAtual)) {
                textoDescripto += chaveDescriptografia[cadeiaCriptografada];
                posicaoAtual += cadeiaCriptografada.length;
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            textoDescripto += textoOriginal[posicaoAtual];
            posicaoAtual++;
        }
    }
    return textoDescripto;
}


function alterardisplay() {
    document.getElementById("b2p1").style.display = "none";
    document.getElementById("b2p2").innerText = "Gostou? Programação e Design By Thais Cabral"
    var img = document.querySelector("#b2img");
    img.setAttribute('src', 'assets/show.webp');
}


function copiar(){
    const textArea = document.querySelector('#b2textarea');
    navigator.clipboard.writeText(textArea.value);
    alert('Texto copiado para área de transferência!');

}

function limpar(){
    location.reload()
}
