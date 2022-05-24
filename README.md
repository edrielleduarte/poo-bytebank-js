# Classe

Terminamos o vídeo anterior com a ideia de criarmos um molde com o qual conseguiríamos obter uma réplica parecida ou idêntica de um conceito, e agora queremos aplicá-la ao nosso projeto em JavaScript. Em programação, esse tipo de molde é chamado de "classe". É possível declarar classes em JavaScript usando a palavra reservada class seguida do nome desejado, no caso Cliente.

É importante escolhermos um nome adequado, pois estamos tratando do contexto do nosso negócio. Por exemplo, o banco Bytebank precisa de uma representação de um cliente, portanto nada mais adequado do que utilizarmos esse nome para a classe. Em seguida, para começarmos a definição da classe, abriremos e fecharemos chaves ({}).

        class Cliente {

        }

É entre essas chaves que definiremos os atributos (também chamados de "campos" ou "propriedades") que a nossa classe irá conter, que serão nome, cpf, agencia e saldo.

* Em algumas linguagens, as palavras "atributos", "campos" e "propriedades" podem não ser sinônimas como são no JavaScript.

        class Cliente {
            nome;
            cpf;
            agencia;
            saldo;
        }

Para criarmos a classe e preencher, colocamos  na variavel.

        const cliente1 = new Cliente()

Após criado fica assim: 

            const cliente1 = new Cliente()

            cliente1.nome = 'Edrielle';
            cliente1.cpf = 14289165710;
            cliente1.agencia = 1001;
            cliente1.saldo = 0;

            console.log(cliente1)

            resultado: Cliente { nome: 'Edrielle', cpf: 14289165710, agencia: 1001, saldo: 0 }

Caso queira criar outro so criar variavel e new cliente().

        const cliente2 = new Cliente()
        cliente2.nome = 'Alice';
        cliente2.cpf = 14389165710;
        cliente2.agencia = 1001;
        cliente2.saldo = 0;

        console.log(cliente2)



# Duas classes 

Podemos criar outra classe para apenas saldo e agencia bancaria. 

                class contaCorrente {
                agencia;
                saldo;
                }


Ira ser feito tratativas referente a classe contaCorrente

        class contaCorrente {
                agencia;
                saldo;

                sacar(valor){
                        if(this.saldo >= valor){
                        this.saldo -= valor
                        }
                }

                depositar(valor){
                        if(valor > 0){
                        this.saldo += valor;
                        }
                }
        }

        const contaCorrenteEdrielle = new contaCorrente();
        contaCorrenteEdrielle.saldo = 0
        contaCorrenteEdrielle.agencia = 1001;


        console.log(contaCorrenteEdrielle.saldo)

        contaCorrenteEdrielle.depositar(100)
        contaCorrenteEdrielle.depositar(200)
        contaCorrenteEdrielle.depositar(-1)


        console.log('Valor deposito em conta: ', contaCorrenteEdrielle.saldo)

        contaCorrenteEdrielle.sacar(50)
        console.log(contaCorrenteEdrielle.saldo) 

Na verdade, ainda não existe um procedimento formal para isso na linguagem JavaScript. O que existe, hoje, é apenas uma proposta de como isso poderia funcionar. Essa proposta, escrita em inglês, foi feita no GitHub e está acessível neste link que também será disponibilizado para você na próxima atividade Proposta de campos Privados.

Essa proposta, que ainda não foi oficialmente implementada, tem como objetivo mudar a maneira como declaramos campos - os atributos - dentro das classes. Na proposta, há diversos exemplos explicando que é possível criar campos privados que só podem ser alterados dentro da classe a que pertencem, fazendo com que ninguém de fora da classe possa acessá-lo. A proposta de implementação apresentada é colocar uma cerquilha (#) à frente do atributo e assim defini-lo como campo privado.

link github = https://github.com/tc39/proposal-class-fields#private-fields


Então o # na frente da variavel, informa que ele é privado e não pode ser alterado, ex:

        class contaCorrente {
    agencia;
    #saldo;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor
        }
        }

        depositar(valor){
                if(valor > 0){
                this.#saldo += valor;
                }
        }
       }


        const cliente1 = new Cliente()

        cliente1.nome = 'Edrielle';
        cliente1.cpf = 14289165710;


        const cliente2 = new Cliente()
        cliente2.nome = 'Alice';
        cliente2.cpf = 14389165710;

        const contaCorrenteEdrielle = new contaCorrente();
        contaCorrenteEdrielle.#saldo = 10000
        contaCorrenteEdrielle.agencia = 1001;

        * Ao chamar o contaCorrenteEdrielle.#saldo = 10000, vai da erro porque o #saldo é privado e vai exibir

        SyntaxError: Private field '#saldo' must be declared in an enclosing class


Como #saldo é um campo privado, não aparece ao executarmos o console.log() da classe. Só é possível acessá-lo realmente dentro da classe. Ele está sendo alterado, mas só veremos isso dentro da classe. Se chamarmos o console.log() em qualquer outro lugar do código, o #saldo não aparecerá.

Para testar, podemos fazer a operação de depósito várias vezes, depositando três valores de 100:

                class contaCorrente {
                        agencia;
                        #saldo = 0;

                        sacar(valor){
                                if(this.#saldo >= valor){
                                this.#saldo -= valor
                                }
                        }

                        depositar(valor){
                                if(valor > 0){
                                this.#saldo += valor;
                                console.log(this.#saldo)
                                }
                        }
                        }


A convenção da comunidade é de que se colocamos um underline (_) à frente de um atributo, isso significa que ele é privado. Mas não é privado de verdade, podemos verificar que ainda podemos alterá-lo em outros lugares do nosso código. Se substituirmos #saldo por _saldo.


# Exportação de modulos:

No JavaScript, cada arquivo define um módulo, e os módulos podem exportar informações para serem consumidas por outros módulos, algo que é feito com a instrução export. Em Cliente.js, como queremos exportar a definição da classe Cliente, adicionaremos essa palavra-chave antes da classe.

        export class Cliente {
        nome;
        cpf;

        }

Nosso Cliente está sendo utilizado no arquivo index.js, portanto teremos que importá-lo, algo que é feito usando a instrução import seguida de chaves circundando o nome da classe que estamos instanciando, e então o endereço do arquivo que contém a sua definição, como no exemplo a seguir:

        import {Cliente} from "./Cliente.js"

O Node está nos informando que não é possível utilizar a instrução import fora de um módulo. Entretanto, afirmamos anteriormente que cada arquivo define um módulo. Na verdade, o JavaScript pode ser utilizado como script padrão, sendo somente executado, ou compartimentalizado usando os módulos.

Por padrão, quando pedimos a execução de um arquivo JavaScript com o Node, isso é feito como um script, sem identificar que estamos trabalhando com módulos. Portanto, teremos que passar essa informação ao interpretador do JavaScript.

A própria tela de erro nos traz instruções sobre como fazer isso:

Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

*Para carregar um módulo EcmaScript, defina "type": "module" no arquivo package.json ou use a extensão .mjs

Entretanto, tais instruções não parecem familiares com o que estamos trabalhando até agora, e precisaremos explicá-las. Todo projeto Node possui um arquivo de configuração contendo uma série de informações sobre o pacote com que estamos trabalhando, e ele é chamado de package.json. Diversos frameworks, como o React, possuem esse arquivo nativamente.

É possível criarmos o arquivo package.json por meio de um comando, que pode ser executado no Prompt de Comando, no Powershell ou no próprio terminal do VSCode (que é aberto com "ctrl + J"). Para esse treinamento usaremos esta última opção.

Após abrirmos o terminal, executaremos o comando npm init, que inicializará um gerenciador de pacotes que nos auxiliará na criação do pacote. Esse gerenciador nos fará uma série de perguntas, começando pelo nome do pacote, que será "bytebank".

Finalizadas as configurações, será gerado um arquivo package.json na raiz do projeto.

        {
        "name": "bytebank",
        "version": "1.0.0",
        "description": "Projeto do bytebank para seus clientes",
        "main": "index.js",
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
        }

Note que este é um arquivo de marcação contendo todas as informações que definimos. Para que o Node deixe de exibir o erro que tínhamos anteriormente, bastará adicionarmos uma nova marcação, "type", recebendo o valor "module".

        {
        "name": "bytebank",
        "version": "1.0.0",
        "description": "Projeto do bytebank para seus clientes",
        "main": "index.js",
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "Rodrigo",
        "license": "ISC",
        "type": "module"
        }

# Classe na outra

Podemos instanciar uma classe na outra, na classe que queremos chamar que é da contacorrente, colocamos o atributo cliente, apos na hora de chamar 
você cria o cliente normalmente:

         const cliente1 = new Cliente()
         cliente1.nome = 'Edrielle'
         cliente1.cpf = 13493839438;

         na hora de criar a do contacorrente:

         const contaCorrenteEdrielle = new contaCorrente();
        contaCorrenteEdrielle.agencia = 1001;
        contaCorrenteEdrielle.cliente = cliente1 // aqui voce chama = a variavel do cliente que no caso é cliente1.

Atributo for igual a null quer dizer que alguem inseriu ai pra ser nulo mesmo, a exibição ser nulo, diferente do undefined que é algo que alguem esqueceu de passar 


# STATIC

Já no caso do numeroDeContas, queremos que ele seja inerente à classe como um todo, e não das instâncias individualmente. Para isso, não poderemos declará-lo da mesma forma que os outros atributos. A ideia é trabalharmos com um atributo estático, do tipo que reflete as alterações em todos os objetos daquela classe. Para isso usaremos a palavra reservada static.

De modo a conseguirmos incrementá-lo no construtor, ao invés da palavra reservada this, que nos concede acesso à instância que chamou o construtor, usaremos a própria classe ContaCorrente.

                import { Cliente } from "./Cliente.js";

                export class ContaCorrente {
                static numeroDeContas = 0;
                agencia;
                _cliente;

                _saldo = 0;

                //...código omitido

                constructor(agencia, cliente) {
                        this.cliente = cliente;
                        this.agencia = agencia;
                        ContaCorrente.numeroDeContas += 1
                }
                //...

        
        console.log(contaCorrente.numeroDeContas)