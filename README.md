Teste de Mobile
===================

Este teste é apresentado aos candidatos as vagas de Mobile Developer para avaliar os quesitos técnicos.

----------


O Desafio
-------------

Seu objetivo é criar um app com duas telas, uma que exibe uma tela principal que exibe opções de acesso e outra mostra uma listagem de especialistas que estão mais próximos do usuário



#### <i class="icon-file"></i> Telas
<table>
<tbody>
<tr><th>Home</th>
  <th>Listagem</th>
</tr>
<tr>
<td><img src="https://github.com/PortalTelemedicina/mobile-test/blob/main/screens/home.png?raw=true" style="height:300px">
</td>
<td><img src="https://github.com/PortalTelemedicina/mobile-test/blob/main/screens/list.PNG?raw=true" style="height:300px">
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr><th>Loading</th>
  <th>Ajuda</th>
</tr>
<tr>
<td><img src="https://github.com/PortalTelemedicina/mobile-test/blob/main/screens/loading.PNG?raw=true" style="height:300px">
</td>
<td><img src="https://github.com/PortalTelemedicina/mobile-test/blob/main/screens/font_and_colors.PNG?raw=true"style="height:300px">
</td>
</tr>
</tbody>
</table>


#### <i class="icon-folder-open"></i> Consumindo Serviço

Para consumir o serviço da API Rest use o método GET para obter os dados do arquivo json do github

**Como usar:**

> - **URL** https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_heart.json
> - **Método**: GET

Exemplo de resposta
>  [{
        "name": "Paula Bartlett",
        "description": "Aenean non diam in mi consequat efficitur eget at enim. Duis vitae odio eget mauris consequat tempus. Duis non erat vitae quam feugiat interdum. Aenean sit amet molestie quam. Vivamus sed nunc vitae nulla egestas varius. Donec facilisis sodales orci quis tempus. Nullam auctor faucibus justo vel semper",
        "actions": {
            "chat": "https://portaltelemedicina.com.br/",
            "call": "(00) 91234-1234"
        }
    }]

#### <i class="icon-pencil"></i> Pré-requisitos

- Versão mínima do SDK: 21
- Tela deve ajustar em devices menores.

#### <i class="icon-folder-open"></i> O que esperamos
- Boa arquitetura, pode ser  (mvc, mvp, mvvm, clean, redux-saga, flux, mvi, viper etc)
- Testes unitários
- Cache de imagens
- Tratamentos de erros
- Padrão de Projeto e boas práticas de Orientação a Objetos.

#### <i class="icon-hdd"></i> Plus
- Construir layouts com animação
- Trabalhar offline (cache dos dados)
- Testes instrumentados
- Animações


Publicação
-------------

Crie um **Fork** do repositório para realizar o teste, e depois de finalizado envie um **Pull Request** para nossa equipe interna avaliar
