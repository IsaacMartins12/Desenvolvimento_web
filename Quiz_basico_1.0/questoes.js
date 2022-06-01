    var alternativas = []
    alternativas.push('3', '4', '5', '6') //questao 1
    alternativas.push('Rondônia', 'Rio Branco', 'Rio de Janeiro', 'Florianópolis') //questao 2
    alternativas.push('14', '16', '18', '20') //questao 3
    alternativas.push('23', '24', '25', '27') //questao 4
    alternativas.push('4', '5', '6', '7') //questao 5
    alternativas.push('4', '6', '8', '10') //questao 6
    alternativas.push('u,v,z', 'x,w,e', 'o,p,w', 't,y,p') //questao 7
    alternativas.push('1987', '1656', '1940', '1846') //questao 8
    alternativas.push('1', '2', '3', '4') //questao 9
    alternativas.push('a', 'e', 'i', 'o') //questao 10


    var perguntas = []
    perguntas[0] = "Quantos lados tem um triângulo ?" //  a
    perguntas[1] = "Qual é a capital do acre ? " // b
    perguntas[2] = "Um icosaedro tem quantos lados ?" // d
    perguntas[3] = "Quantos estados existem no Brasil ?" // d
    perguntas[4] = "Bento tem quantos fonemas ?" // a
    perguntas[5] = "Quanto é 5 + 3 ? " // c
    perguntas[6] = "Quais são os 3 tipos de chuva ? " // d
    perguntas[7] = "Em que ano acabou a Guerra fria ?" // c
    perguntas[8] = "Um gato tem quantos olhos ?" // b
    perguntas[9] = "A terceira vogal do alfabeto é ... ?" // c


    var numeros_sorteados = []
    var sorteado;
    var acertos = 0 , erros = 0 

    
        const questao1 = window.document.getElementById('questao1')
        const questao2 = window.document.getElementById('questao2')
        const questao3 = window.document.getElementById('questao3')
        const questao4 = window.document.getElementById('questao4')
        const pergunta = window.document.getElementById('pergunta')
        const afirmacao = window.document.getElementById('afirmacao')
        const contador_acertos = window.document.getElementById('acertos')
        const contador_erros = window.document.getElementById('erros')

        carregar()

        function carregar() {
       
        contador_acertos.innerHTML = `Acertos : ${acertos}`
        contador_erros.innerHTML = `Erros : ${erros}`

        sorteado = Math.floor(Math.random() * 10)


        numeros_sorteados.push(sorteado)


        questao1.innerHTML = (`${alternativas[sorteado*4]}`)
        questao2.innerHTML = (`${alternativas[sorteado*4+1]}`)
        questao3.innerHTML = (`${alternativas[sorteado*4+2]}`)
        questao4.innerHTML = (`${alternativas[sorteado*4+3]}`)

        pergunta.innerHTML = (`${perguntas[sorteado]}`)


        questao1.addEventListener('click', clicar1)
        questao1.addEventListener('mouseenter', entrar1)
        questao1.addEventListener('mouseout', sair1)
        questao2.addEventListener('click', clicar2)
        questao2.addEventListener('mouseenter', entrar2)
        questao2.addEventListener('mouseout', sair2)
        questao3.addEventListener('click', clicar3)
        questao3.addEventListener('mouseenter', entrar3)
        questao3.addEventListener('mouseout', sair3)
        questao4.addEventListener('click', clicar4)
        questao4.addEventListener('mouseenter', entrar4)
        questao4.addEventListener('mouseout', sair4)

        }

        //Primeira alternativa

        function clicar1() {

            questao1.style.background = 'green'

            if (sorteado == 0 || sorteado == 4) {

                questao1.style.background = 'green'
                ++acertos
                setTimeout(function() { carregar()}, 1000)

            } else {
                questao1.style.background = 'red'
                afirmacao.innerHTML = 'Você errou !!'
                ++erros
                setTimeout(function() { carregar()}, 1000)
            }

        }
    
        function entrar1() {
            questao1.style.background = 'blue'
        }

        function sair1() {
            questao1.style.background = 'white'
        }

        //Segunda alternativa

        function clicar2() {
            if (sorteado === 1 || sorteado === 8) {

                questao2.style.background = 'green'
                ++acertos
                setTimeout(function() { carregar()}, 1000)

            } else {
                questao2.style.background = 'red'
                ++erros
                setTimeout(function() { carregar()}, 1000)
            }

        }

        function entrar2() {
            questao2.style.background = 'blue'
        }

        function sair2() {
            questao2.style.background = 'white'
        }

        //Terceira alternativa

        function clicar3() {
            if (sorteado === 5 || sorteado === 7 || sorteado === 9) {

                questao3.style.background = 'green'
                ++acertos
                setTimeout(function() { carregar()}, 1000)

            } else {
                questao3.style.background = 'red'
                ++erros
                setTimeout(function() { carregar()}, 1000)
            }
        }

        function entrar3() {
            questao3.style.background = 'blue'
        }

        function sair3() {
            questao3.style.background = 'white'
        }

        //Quarta alternativa

        function clicar4() {
            if (sorteado === 2 || sorteado === 3 || sorteado === 6) {

                questao4.style.background = 'green'
                ++acertos
                setTimeout(function() { carregar()}, 1000)
            } else {
                questao4.style.background = 'red'
                ++erros
                setTimeout(function() { carregar()}, 1000)
            }
        }

        function entrar4() {
            questao4.style.background = 'blue'
        }

        function sair4() {
            questao4.style.background = 'white'
        }
