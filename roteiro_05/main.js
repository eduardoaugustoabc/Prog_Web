// questao 01

const dadosCertos = {
    "cep": "05650-000",
    "logradouro": "Avenida Albert Einstein",
    "complemento": "",
    "bairro": "Morumbi",
    "localidade": "São Paulo",
    "uf": "SP",
    "geo": {
        "lat": "-23.61919020307765",
        "lng": "-46.70793551534256"
    }
};

const dono = {
    "proprietario": "Silvio Santos",
    "endereco": {
        ...dadosCertos,
    "geo": {
        "lat": "-23.61919020307765",
        "lng": "-46.70793551534256"
        }
    }
}

const { proprietario, endereco: {cep, bairro, localidade: cidade, geo: { lat, lng } } } = dono
const resultado = '${proprietario} - ${cep} - ${bairro}, ${cidade (${lat}, ${lng})'

console.log(resultado)

// questao 02

const verificarTcc = (e, d) => {
    const diff = d - e
    if(diff >= 3){
        console.log("Muito bem! O aluno está apto a apresentar até o natal!")
    }else if(diff < 3){
        console.log("O trabalho está muito ruim!")
        d += 2
        if(d < 24){
            console.log("TCC Apresentado!")
        }else{
            console.log("Não deu! Só no próximo ano agora.")
        }
    }else{
        console.log("Eu odeio o prof. Florovsky!")
    }
}

// questao 03

const colocarLetrasMaiusculo = (texto) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof texto === 'string'){
                resolve(texto.toUpperCase())
            }else{
                reject("o texto não é uma string!")
            }
        }, 500);
    })
}

const inverterLetras = (texto) => {
    return new Promise((resolve, reject) => {
        if(typeof texto === 'string'){
            resolve(texto.split('').reverse().join(''))
        }else{
            reject("o texto não é uma string")
        }
    })
}

const processarTexto = (texto) => {
    colocarLetrasMaiusculo(texto)
        .then(inverterLetras)
        .then(resultadoFinal => console.log("Resultado Final:", resultadoFinal))
        .catch(erro => console.log("Erro:", erro));  
};
// questao 04

const colocarLetrasMaiusculo2 = async (texto) => {
    if(typeof texto !== 'string'){
        throw new Error("o texto não é uma string")
    }
    await new Promise(resolve => setTimeout(resolve, 500));
    return texto.toUpperCase();
}

const inverterLetra2s = async (texto) => {
    if(typeof texto === 'string'){
        throw new Error("o texto não é uma string")
    }
    return texto.split('').reverse().join('')
}

const processarTexto2 = async (texto) => {
    try {
        const textoMaiusculo = await colocarLetrasMaiusculo(texto);
        const textoInvertido = await inverterLetras(textoMaiusculo);
        console.log("Resultado Final:", textoInvertido);
    } catch (erro) {
        console.log("Erro:", erro.message);
    }  
};

// questao 05

const crypto = require('crypto');

const criptografarMensagem = (texto, chaveSecreta) => {
    const algorithm = 'aes-256-cbc';
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(chaveSecreta), iv);
    let encrypted = cipher.update(texto, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
}

const processarNumeros = (numeros, callbackFunction) => {
    const numerosPares = numeros.filter(numero => numero % 2 === 0);

    const numerosCriptografados = numerosPares.map(numero => callbackFunction(numero.toString()));

    return numerosCriptografados;
}

const chaveSecreta = '12345678901234567890123456789012';