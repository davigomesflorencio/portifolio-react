# Portfólio Davi Gomes Florencio V1.0.0 

## 🚀 Tecnologias e Ferramentas

O projeto utiliza as seguintes tecnologias:

-   ⚛️ **React**: Biblioteca principal para construção da interface.
-   🎨 **Tailwind CSS**: Framework de CSS para estilização rápida e responsiva.
-   🍦 **Vanilla CSS**: Estilos base e variáveis globais.
-   🏰 **FontAwesome**: Ícones vetoriais modernos.
-   🛰️ **Sentry**: Monitoramento de erros e performance.
-   📈 **Google Analytics 4**: Rastreamento de métricas e comportamento do usuário.
-   🛡️ **React Helmet**: Gerenciamento de tags SEO e metadados.
-   🔀 **React Router**: Navegação entre páginas de forma fluida.

## 📁 Estrutura de Pastas

A organização do projeto é pensada para escalabilidade e fácil manutenção:

-   📂 `public/`: Arquivos estáticos acessíveis publicamente (ícones, imagens, etc.).
-   📂 `src/`: Todo o código-fonte da aplicação.
    -   📂 `components/`: Componentes reutilizáveis (botões, cards, seções).
    -   📂 `data/`: Arquivos de configuração JavaScript (onde você edita o conteúdo).
    -   📂 `pages/`: Componentes que representam as páginas completas (Home, About, etc.).
-   📄 `Dockerfile`: Configuração para containerização do projeto.
-   📄 `package.json`: Gerenciamento de dependências e scripts.

## 🛠 Instalação e Configuração

Certifique-se de ter o `NodeJS` e o `git` instalados em sua máquina.

1.  **Clone o repositório**:
    ```bash
    git clone [url-do-repositorio]
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Inicie o projeto**:
    ```bash
    npm start
    ```
    O app abrirá em [http://localhost:3000](http://localhost:3000).

## ⚙️ Configurações

Para personalizar seu portfólio, edite os arquivos em `/src/data/`:

-   `user.js`: Informações pessoais, redes sociais e experiências.
-   `seo.js`: Configure os metadados para SEO.
-   `tracking.js`: Adicione seu ID do Google Analytics.

## 🚀 Build e Deploy

Para gerar a versão de produção:
```bash
npm run build
```
O conteúdo será gerado na pasta `build/`.

## 🌱 Contribuição

Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request* com melhorias!
