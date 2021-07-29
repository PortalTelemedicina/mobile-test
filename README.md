Teste de Mobile
===================

Este teste é apresentado aos candidatos as vagas de Mobile Developer para avaliar os quesitos técnicos.

O principal objetivo do teste é avaliar em como é construido um aplicativo que tem uma boa arquitetura, um bom layout e que contém tratamento de possíveis erros que podem acontecer na vida real do paciente

----------


O Desafio
-------------

Seu objetivo é criar um aplicativo que contém funcionalidades básicas de um app médico para consulta

O teste pode ser feito em ReactNative ou Flutter


<table>
<tbody>
<tr><th>Home</th>
</tr>
<tr>
<td><img src="https://github.com/PortalTelemedicina/mobile-test/blob/main/screens/screen_home.PNG?raw=true" style="height:500px">
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr><th>List</th>
</tr>
<tr>
<td><img src="https://github.com/PortalTelemedicina/mobile-test/blob/main/screens/screen_list.PNG?raw=true" style="height:500px">
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr><th>Fonte & Cores</th>
</tr>
<tr>
<td><img src="https://github.com/PortalTelemedicina/mobile-test/blob/main/screens/colors_fonts.PNG?raw=true" style="height:250px">
</td>
</tr>
</tbody>
</table>

## <i class="icon-folder-open"></i> Funcionalidades

**Como usuário quero poder ter opções de especialistas médicos para fazer uma consulta**

> Para isso faça uma busca na API, configure a tela com as cores e trate o erro de conexão com a internet caso o cliente fique sem

**Como usuário quero poder escolher qual especialista quero conversar ou ligar**

> Para isso faça uma busca na API de acordo com a categoria selecionada na home, configure a tela com as cores e trate o erro de conexão com a internet caso o cliente fique sem

## <i class="icon-folder-open"></i> Consumindo Serviço

Para consumir o serviço da API REST use o método GET para obter os dados do arquivo json do github

**Como usar:**

Obter dados da home
> - **URL** https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/home_specialists.json
> - **Método**: GET

Listar cardiologistas
> - **URL** https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_heart.json
> - **Método**: GET

Listar dentistas
> - **URL** https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_dental_care.json
> - **Método**: GET

Listar dermatologistas
> - **URL** https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_dermatology.json
> - **Método**: GET
> 

## <i class="icon-folder-open"></i> Fonts & Imagens

As fontes e os ícones encontram-se nesse repositório


## <i class="icon-pencil"></i> Pré-requisitos
*Fique atento a esses itens, o teste no mínimo deve conter os requisitos abaixo*

- Tela deve ajustar em aparelhos grandes e pequenos
- Deve funcionar em Android e iOS
- Boa separação de camadas
- Arquitetura Flux/Redux/Hooks/Bloc
- Tratamentos de erros


#### <i class="icon-hdd"></i> Você pode entregar com Bonus
*Pode ser algum dos itens abaixo*

- Construir layouts com animação
- Trabalhar offline (cache dos dados)
- Testes instrumentados
- Testes unitários
- Cache de imagens


Publicação
-------------

Crie um **Fork** do repositório para realizar o teste, e depois de finalizado envie um **Pull Request** para nossa equipe interna avaliar
