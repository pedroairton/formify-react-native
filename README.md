# FormiFy (1.1)

Aplicativo FormiFy, Feito em React Native para avaliação de professores via formulário para alunos, e para cadastro, 
atualização e deleção de usuários, além de visualização da média dos Resultados da média das avaliações em forma de
Gráficos.

# MELHORIAS FEITAS:

Código dos 2 Bancos de Dados otimizados.
 
O Aplicativo agora funciona corretamente no app mobile do Expo.
 
Agora não é mais necessário recarregar o aplicativo para atualizar o Banco de Dados.

Nova barra de média geral dos professores, acima das outras, calculada com base da nota das outras 5 barras.

Novo Header do aplicativo personalizado e com botão Home no nome do App.

Mudança na estilização e visual da página de perfil do aluno selecionado.

Mudança nas fotos e nomes dos professores exemplos para melhor visual.

"ReRenders" do React Native retirados para prevenção de alguns bugs visuais.

Nova página após login de aluno para selecionar o formulário a ser avaliado.

Página de Gerenciamento de usuários completamente reformada, Agora ela exibirá todos os usuários cadastrados e conta com um botão para redirecionar para uma nova página(detalhada abaixo).

Nova página, acessada via botão da página de Gerenciamento de usuários, dedicada à cadastrar e atualizar alunos. 




# INSTALAÇÃO: 

Alterar o endereço das operações padrão (192.168.0.193) para o endereço com seu ipv4	

Instalar todas as dependências necessárias com 

	npm install

Instalar o Expo

Deixe um terminal conectado à pasta raiz do app para iniciá-lo posteriormente 

Rodar um outro terminal simultaneamente ao anterior, e acessar nele "src/server"

Rodar "npm install" no novo terminal para instalar as dependências necessárias para o servidor. 

Após concluido, para iniciar o servidor o banco de dados em MongoDB rodar:

	node app.js

Certifique-se de estar com o MongoDB conectado ao ip 

	mongodb://localhost:27017

Após isso o app pode ser iniciado na pasta raiz do app ao rodar:

	expo start 
 ou 
 
 	npx expo start 

# USO:

**_NOTA: RECOMENDA-SE O USO DO APP NO APP DO EXPO MOBILE PARA EXIBIÇÃO DOS ALERTS, VOCÊ PODE USAR NO NAVEGADOR COM EXIBIÇÃO EM RESOLUÇÃO MOBILE, OS ALERTS SERÃO SIMULADOS EM FORMA DE "console.log", SENDO EXIBIDOS NO CONSOLE AO LADO._**
## Administrador

Para cadastrar um usuário acesse a página de administrador, **O LOGIN PADRÃO PARA ADMINISTRADORES É** 

Login:

	adm

 Senha:

 	123

Administradores tem a função para **CRIAR**, **VER**, **EDITAR** e **DELETAR** alunos do sistema, além de poderem **VER OS RESULTADOS** do formulário enviado pelos alunos.


## Aluno

Após ter o cadastro feito, Faça o login como aluno na página de acesso normal, selecione o formulário e faça a avaliação ao seu critério. Após ser concluído, ele será enviado e você poderá ver a média na aba de **VER OS RESULTADOS** na aba de **ADMINISTRADOR**. 
 
