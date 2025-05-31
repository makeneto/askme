export const juniorQuestions = [
    {
        question: '1. O que é SQL injection?',
        answer: 'É um ataque que insere comandos maliciosos em consultas SQL. Ex: inserir `OR 1=1` em um campo de login para acessar dados sem autenticação.'
    },
    {
        question: '2. O que é escopo em JavaScript?',
        answer: 'É o contexto onde variáveis e funções estão disponíveis. Ex: variáveis declaradas dentro de uma função só existem ali.'
    },
    {
        question: '3. Explique o CSS “box model”.',
        answer: 'Define como os elementos HTML são renderizados: content, padding (espaço interno), border e margin (espaço externo).'
    },
    {
        question: '4. Como JavaScript e jQuery são diferentes?',
        answer: 'JavaScript é a linguagem nativa. jQuery é uma biblioteca criada para facilitar manipulação do DOM e AJAX com menos código.'
    },
    {
        question: '5. O que é um Callback Hell?',
        answer: 'É um código com muitos callbacks aninhados, tornando difícil de ler e manter. Ex: várias funções dentro de funções em requisições assíncronas.'
    },
    {
        question: '6. O que é Cross-Site Scripting (XSS)?',
        answer: 'É um ataque que injeta scripts maliciosos em sites. Pode roubar cookies ou redirecionar usuários para sites falsos.'
    },
    {
        question: '7. O que é Flux?',
        answer: 'Padrão que gerencia fluxo de dados unidirecional em apps React. Usa ações, dispatchers e uma store central.'
    },
    {
        question: '8. O que é Sass?',
        answer: 'É um pré-processador CSS que permite usar variáveis, funções, mixins e estruturas que facilitam manutenção do CSS.'
    },
    {
        question: '9. O que é encapsulamento?',
        answer: 'É esconder os detalhes internos de um objeto/classe, expondo apenas o necessário por meio de métodos públicos.'
    },
    {
        question: '10. Qual o ponto de se usar Redux?',
        answer: 'Gerencia o estado global de forma previsível, com uma store única e ações claras para modificar esse estado.'
    },
    {
        question: '11. Diferença entre null e undefined?',
        answer: '`null` é valor intencional vazio. `undefined` é quando uma variável foi declarada, mas não recebeu valor.'
    },
    {
        question: '12. Vantagens da arquitetura de microsserviços?',
        answer: 'Serviços independentes, fáceis de escalar, com manutenção isolada e possibilidade de usar diferentes tecnologias.'
    },
    {
        question: '13. Vantagens do NoSQL sobre RDBMS?',
        answer: 'Escala horizontalmente, lida bem com dados sem estrutura fixa e permite alta performance em grandes volumes.'
    },
    {
        question: '14. O que é programação reativa?',
        answer: 'Programação baseada em eventos e fluxo de dados, reagindo automaticamente a mudanças. Ex: RxJS.'
    },
    {
        question: '15. O que são reducers no Redux?',
        answer: 'Funções puras que recebem estado atual e ação, e retornam o novo estado sem alterar o original.'
    },
    {
        question: '16. Papel do HTML na indexação?',
        answer: 'Estrutura o conteúdo da página para que motores de busca entendam e indexem corretamente.'
    },
    {
        question: '17. 3 conceitos da POO em JS?',
        answer: 'Encapsulamento (proteger dados), herança (reutilizar código), polimorfismo (comportamento diferente com mesma interface).'
    },
    {
        question: '18. Benefícios do TypeScript?',
        answer: 'Tipagem estática, prevenção de erros em tempo de compilação e melhor suporte de IDE/autocompletar.'
    },
    {
        question: '19. O que é uma interface no TS?',
        answer: 'Define a estrutura que um objeto deve seguir. Ex: quais propriedades e tipos ele deve ter.'
    },
    {
        question: '20. Significado de Mock?',
        answer: 'É uma simulação usada em testes. Ex: substituir API real por uma resposta falsa para testar comportamento.'
    },
    {
        question: '21. O que é o esquema do GraphQL?',
        answer: 'Define os tipos, queries e mutations disponíveis. Serve como contrato entre cliente e servidor.'
    },
    {
        question: '22. O que é o Virtual DOM?',
        answer: 'Representação leve da UI na memória, usada pelo React para comparar e aplicar apenas mudanças necessárias no DOM real.'
    },
    {
        question: '23. O que é e como usar BEM?',
        answer: 'Bloco__elemento--modificador. Ex: `card__title--highlighted` melhora legibilidade e evita conflitos no CSS.'
    },
    {
        question: '24. JS: como usar forEach, map ou reduce?',
        answer: '`forEach`: apenas itera. `map`: transforma cada item. `reduce`: reduz array a um único valor.'
    },
    {
        question: '25. React: o que é PureComponent?',
        answer: 'Componente de classe que evita renderizações desnecessárias ao fazer comparação rasa (shallow) de props e state.'
    },
    {
        question: '26. O que é serverless computing?',
        answer: 'Executar funções na nuvem sem gerenciar servidores. Ex: AWS Lambda, Firebase Functions.'
    },
    {
        question: '27. Tipos primitivos do JS?',
        answer: 'String, number, boolean, null, undefined, symbol e bigint.'
    },
    {
        question: '28. Diferença entre inline e inline-block?',
        answer: '`inline`: não aceita width/height. `inline-block`: aceita tamanho, mas mantém comportamento inline.'
    },
    {
        question: '29. Diferença entre relative, fixed, absolute e static?',
        answer: '`static`: padrão. `relative`: move com base em si. `absolute`: em relação ao ancestral posicionado. `fixed`: em relação à viewport.'
    },
    {
        question: '30. Responsivo vs mobile-first?',
        answer: '`Responsivo`: adapta a qualquer tela. `Mobile-first`: começa com o layout mobile e expande com media queries.'
    }
]


export const plenoQuestions = [
    {
        question: '1. Diferença entre PUT e POST?',
        answer: 'PUT atualiza ou cria; POST sempre cria novo recurso.'
    },
    {
        question: '2. O que são defer e async em uma tag <script>?',
        answer: 'defer espera o HTML carregar; async carrega paralelo e executa ao terminar.'
    },
    {
        question: '3. O que significa SOLID?',
        answer: 'Conjunto de 5 princípios para um código orientado a objetos melhor estruturado.'
    },
    {
        question: '4. O que é coerção em JavaScript?',
        answer: 'É a conversão automática ou forçada de um tipo para outro.'
    },
    {
        question: '5. O que é um Mixin no SASS?',
        answer: 'É um bloco reutilizável de código que aceita parâmetros.'
    },
    {
        question: '6. Sistemas de grid CSS?',
        answer: 'Bootstrap Grid, CSS Grid Layout, Flexbox.'
    },
    {
        question: '7. Quando usar Arrow Functions?',
        answer: 'Quando não se quer o próprio this; para funções curtas e simples.'
    },
    {
        question: '8. Quando usar generators?',
        answer: 'Para controlar execuções pausadas e fluxos assíncronos com yield.'
    },
    {
        question: '9. Características de sistemas reativos?',
        answer: 'Responsivos, resilientes, escaláveis e orientados a eventos.'
    },
    {
        question: '10. Reativo vs Imperativo?',
        answer: 'Reativo reage a eventos; imperativo executa passo a passo.'
    },
    {
        question: '11. Promises vs Observables?',
        answer: 'Promise retorna um valor futuro único; Observable emite múltiplos valores.'
    },
    {
        question: '12. Acessar Redux fora de componente?',
        answer: 'Importando a store e usando store.getState() ou store.dispatch().'
    },
    {
        question: '13. Desvantagens do Redux vs Flux?',
        answer: 'Mais verboso, boilerplate maior e curva de aprendizado mais alta.'
    },
    {
        question: '14. Maneira correta de acessar Redux store?',
        answer: 'Via hooks como useSelector e useDispatch dentro de componentes.'
    },
    {
        question: '15. O que é git cherry-pick?',
        answer: 'Aplica um commit específico de outro branch no branch atual.'
    },
    {
        question: '16. O que é um WebWorker?',
        answer: 'Permite rodar scripts em thread separada do main thread.'
    },
    {
        question: '17. O que é o DOM?',
        answer: 'É a estrutura em árvore do HTML que o navegador interpreta.'
    },
    {
        question: '18. localStorage vs sessionStorage?',
        answer: 'localStorage persiste após fechar; sessionStorage dura só na aba atual.'
    },
    {
        question: '19. Como evitar callback hell?',
        answer: 'Usando Promises, async/await ou funções bem estruturadas.'
    },
    {
        question: '20. O que é Injeção de Dependência?',
        answer: 'Passar dependências de fora ao invés de criar internamente.'
    },
    {
        question: '21. O que faz a keyword "new"?',
        answer: 'Cria instância de um objeto com base em uma função construtora.'
    },
    {
        question: '22. O que é SSR?',
        answer: 'Renderiza o HTML no servidor. Ex: Next.js.'
    },
    {
        question: '23. O que são Estruturas de Dados?',
        answer: 'Formas de organizar dados. São essenciais para performance e lógica.'
    },
    {
        question: '24. O que é renderização progressiva?',
        answer: 'Carrega partes do conteúdo aos poucos para melhorar UX.'
    },
    {
        question: '25. Para que servem data-attributes?',
        answer: 'Guardar informações extras em elementos HTML sem afetar o layout.'
    },
    {
        question: '26. Diferença entre funções síncronas e assíncronas?',
        answer: 'Síncronas bloqueiam o fluxo; assíncronas não bloqueiam.'
    },
    {
        question: '27. setTimeout vs setInterval?',
        answer: 'setTimeout executa uma vez; setInterval repete em intervalos.'
    },
    {
        question: '28. O que é um construtor?',
        answer: 'É uma função especial que cria e inicializa objetos.'
    },
    {
        question: '29. Função dos prototypes no JS?',
        answer: 'Permitir herança e compartilhamento de métodos entre objetos.'
    },
    {
        question: '30. O que são High Order Functions?',
        answer: 'Funções que recebem ou retornam outras funções.'
    }
]

export const seniorQuestions = [
    { question: '1. O que é "closure" no JavaScript?', answer: 'Closure acontece quando uma função interna acessa variáveis do seu escopo externo mesmo após o término da execução desse escopo. Exemplo: uma função retorna outra função que ainda consegue acessar variáveis da função original.' },
    { question: '2. Imperativo vs Funcional vs Reativa?', answer: 'Imperativo foca em como algo deve ser feito (passo a passo). Funcional evita estados mutáveis e efeitos colaterais. Reativa lida com fluxos de dados e reage a mudanças automaticamente.' },
    { question: '3. O que faz "git reset"?', answer: 'Desfaz commits locais, removendo alterações do histórico. Pode ser soft (mantém alterações), mixed (remove do staging), ou hard (remove tudo).' },
    { question: '4. Interface vs Type no TypeScript?', answer: 'Interface é ideal para definir contratos entre objetos e pode ser estendida. Type é mais versátil para composições, união de tipos, primitivos e outras estruturas.' },
    { question: '5. Teste de unidade vs integração?', answer: 'Teste de unidade verifica se partes isoladas funcionam corretamente. Teste de integração avalia se diferentes módulos funcionam bem em conjunto.' },
    { question: '6. O que é uma árvore de busca binária?', answer: 'Estrutura de dados onde cada nó tem até dois filhos: o da esquerda com valor menor e o da direita com valor maior que o pai, facilitando buscas rápidas.' },
    { question: '7. O que é o Shadow DOM?', answer: 'É uma forma de encapsular o DOM e o CSS de um componente, evitando que estilos ou scripts externos interfiram nele. Muito usado com Web Components.' },
    { question: '8. Diferença entre apply, call e bind?', answer: 'Todas definem o valor de this em uma função. call passa os argumentos individualmente, apply usa array, e bind retorna uma nova função com this fixado.' },
    { question: '9. O que é Big O Notation?', answer: 'É uma notação que descreve a eficiência de algoritmos, medindo o crescimento do tempo ou espaço em relação ao tamanho da entrada (ex: O(n), O(log n)).' },
    { question: '10. O que é Imutabilidade?', answer: 'Significa que, uma vez criado, o valor não pode ser alterado. Qualquer mudança gera uma nova cópia. Isso ajuda na previsibilidade e evita efeitos colaterais.' },
    { question: '11. Boas práticas de Clean Code?', answer: 'Código deve ser claro, com funções curtas, nomes significativos, evitar duplicações e responsabilidades bem definidas em cada módulo ou função.' },
    { question: '12. O que é o "HEAD" no Git?', answer: 'É um ponteiro que representa o commit atual no qual você está trabalhando. HEAD geralmente aponta para o último commit da branch ativa.' },
    { question: '13. CI, CD e CD?', answer: 'CI (Integração Contínua) automatiza testes e builds. CD (Delivery) prepara o app para deploy. CD (Deployment) automatiza o deploy em produção.' },
    { question: '14. Caso de uso do Docker?', answer: 'Executar aplicações em containers isolados e consistentes, facilitando a portabilidade, testes e deploy entre ambientes diferentes.' },
    { question: '15. O que é React Hooks?', answer: 'Funções do React que permitem usar estado, efeitos colaterais e outros recursos em componentes funcionais. Exemplos: useState, useEffect, useContext.' },
    { question: '16. Corrigir estilos específicos por navegador?', answer: 'Utilizando vendor prefixes (ex: -webkit-), regras condicionais com @supports ou técnicas de detecção de recursos ao invés de detecção de navegador.' },
    { question: '17. Angular lifecycle hooks?', answer: 'São métodos que permitem responder a eventos do ciclo de vida de um componente, como ngOnInit (inicialização), ngOnDestroy (limpeza), etc.' },
    { question: '18. O que é Lazy Loading?', answer: 'É o carregamento sob demanda de recursos ou componentes, reduzindo o tempo de carregamento inicial e melhorando a performance.' },
    { question: '19. Quando usar classe abstrata?', answer: 'Quando você quer criar uma base comum com métodos obrigatórios para as subclasses, sem permitir a instância direta da classe base.' },
    { question: '20. O que é encapsulamento?', answer: 'É esconder os detalhes internos da implementação de uma classe e expor apenas o necessário através de métodos públicos. Ajuda na segurança e manutenção.' },
    { question: '21. O que são Fragments no React?', answer: 'São usados para agrupar múltiplos elementos sem adicionar uma tag extra no DOM. Usados com <> ... </> ou <React.Fragment>.' },
    { question: '22. Por que usar classes estáticas?', answer: 'Para agrupar métodos utilitários que não dependem de instância. Ex: Math ou classes de formatação e validação.' },
    { question: '23. O que é CORS?', answer: 'Cross-Origin Resource Sharing é uma política de segurança que controla o acesso de recursos entre diferentes domínios no navegador.' },
    { question: '24. Vulnerabilidades de REST APIs?', answer: 'Falta de autenticação, exposição de dados sensíveis, ausência de rate limit, má configuração de CORS, e injeções (SQL/NoSQL).' },
    { question: '25. O que é JWT?', answer: 'JSON Web Token é um padrão para autenticação via token assinado contendo informações no payload. Alternativas incluem OAuth, sessions e SAML.' },
    { question: '26. O que são Styled Components?', answer: 'Biblioteca que permite escrever CSS dentro do JavaScript para React. Usa tagged templates para aplicar estilos e suporta temas e escopo local.' },
    { question: '27. Bibliotecas CSS-in-JS?', answer: 'Exemplos: Styled Components, Emotion, Stitches. Vantagens: escopo local e suporte a temas. Desvantagens: impacto na performance e no tempo de build.' },
    { question: '28. Convenções de código JS?', answer: 'Usar camelCase, nomes claros e semânticos, preferir const/let ao invés de var, usar linting como ESLint para padronizar e evitar erros.' },
    { question: '29. Funcional vs Orientado a Objetos?', answer: 'Funcional evita estado compartilhado e efeitos colaterais, prioriza funções puras. OO organiza em classes, objetos e herança. Funcional = testes fáceis; OO = estrutura clara e reutilizável.' },
    { question: '30. Two-way vs One-way data binding?', answer: 'Two-way atualiza o modelo e a UI ao mesmo tempo (ex: Angular). One-way envia dados em uma direção (ex: de pai para filho no React).' }
];

export const expertQuestions = [
    { question: '1. Quais são boas práticas para design de API RESTful?', answer: 'URLs claras, uso correto de verbos HTTP, versionamento, códigos de status apropriados e HATEOAS (opcional).' },
    { question: '2. Qual a diferença entre Message-Driven e Event-Driven?', answer: 'Message-Driven: comunicação assíncrona entre componentes via mensagens. Event-Driven: ações que reagem a eventos emitidos.' },
    { question: '3. Qual o modelo mental do redux-saga?', answer: 'Fluxo baseado em generators que pausam e retomam ações assíncronas como funções puras com side-effects controlados.' },
    { question: '4. Quando usar git rebase em vez de merge?', answer: 'Rebase reescreve o histórico para manter uma linha linear. Merge preserva o histórico completo dos commits.' },
    { question: '5. O que são Web Components?', answer: 'Conjunto de especificações (Custom Elements, Shadow DOM, HTML Templates) para criar componentes reutilizáveis nativos do navegador.' },
    { question: '6. O que é ARIA?', answer: 'Atributos de acessibilidade para leitores de tela (ex: role, aria-label). Auxilia usuários de tecnologias assistivas.' },
    { question: '7. O que é uma Hash Table?', answer: 'Estrutura de dados que associa chaves a valores usando uma função hash. Oferece acesso muito rápido (O(1) em média).' },
    { question: '8. O que é WebAssembly?', answer: 'Formato binário executado no navegador com performance próxima à nativa. Suporta linguagens como C e Rust.' },
    { question: '9. Qual a diferença entre JiT e AoT no Angular?', answer: 'JiT (Just-in-Time) compila no navegador em tempo de execução. AoT (Ahead-of-Time) compila no build (mais rápido e menor bundle).' },
    { question: '10. Qual a vantagem do Incremental DOM?', answer: 'Atualiza apenas o necessário diretamente no DOM real. Usa menos memória em comparação ao Virtual DOM.' },
    { question: '11. Qual a diferença entre Mixin e Herança?', answer: 'Mixin compartilha comportamentos entre classes sem herança. Herança estabelece uma hierarquia entre superclasse e subclasse.' },
    { question: '12. Como estilizar o elemento seguinte no CSS?', answer: 'Use o seletor adjacente `+`. Exemplo: `div + p {}` aplica ao `<p>` imediatamente após o `<div>`.' },
    { question: '13. Como funciona o "this" em JavaScript?', answer: 'Depende do contexto: global, função, método ou arrow function (que herda do escopo superior).' },
    { question: '14. Quais alternativas ao React, Angular e Vue?', answer: 'Svelte, SolidJS, Lit, Alpine.js, Mithril.' },
    { question: '15. Qual a diferença entre JWT e OAuth2?', answer: 'OAuth2 é um protocolo de autorização. JWT é um formato de token. OAuth2 pode usar JWT como token de acesso.' },
    { question: '16. Como o V8 compila JavaScript?', answer: 'Interpreta o código e depois otimiza com compiladores JIT (Ignition e TurboFan).' },
    { question: '17. O que é WCAG e qual a diferença entre níveis A, AA e AAA?', answer: 'Padrões de acessibilidade. A: nível básico. AA: nível recomendado. AAA: nível mais rigoroso.' },
    { question: '18. O que é CSS BEM? Quais outras arquiteturas CSS existem?', answer: 'BEM: Block__Element--Modifier. Outras: OOCSS, SMACSS, ITCSS.' },
    { question: '19. Qual a diferença entre arquitetura Monolítica e Microserviços?', answer: 'Monolítica: mais simples e rápida para começar. Microserviços: escalável e isolada, mas mais complexa.' },
    { question: '20. Qual o problema com excesso de nesting no Sass?', answer: 'Muito nesting gera CSS difícil de manter e cria dependência excessiva da hierarquia. Ex: `.a .b .c .d`.' },
    { question: '21. Qual a diferença entre UX e UI?', answer: 'UX (User Experience): experiência e usabilidade. UI (User Interface): aparência e interação visual.' },
    { question: '22. O que é caching?', answer: 'Armazenamento temporário de dados para acelerar acessos futuros. Ex: cache do navegador, CDN, memória.' },
    { question: '23. Para que serve o método OPTIONS?', answer: 'Usado para verificar permissões antes da requisição real (CORS, preflight). Retorna métodos suportados.' },
    { question: '24. Quais ferramentas ajudam a identificar problemas de performance?', answer: 'Chrome DevTools, Lighthouse, Web Vitals, React Profiler, Sentry, New Relic.' },
    { question: '25. O que são Layout, Painting e Compositing?', answer: 'Layout calcula posição dos elementos. Painting desenha os pixels. Compositing monta camadas visuais.' },
    { question: '26. O que é Domain pre-fetching?', answer: 'Pré-resolução de domínios antes do uso (lookup DNS). Reduz latência de conexão.' },
    { question: '27. O que é uma CDN?', answer: 'Rede de distribuição de conteúdo que entrega arquivos a partir de servidores próximos ao usuário. Aumenta performance e reduz carga no servidor.' },
    { question: '28. O que é Currying?', answer: 'Transforma uma função com múltiplos argumentos em uma sequência de funções. Ex: `f(a)(b)` em vez de `f(a, b)`.' },
    { question: '29. Qual a diferença entre Async-Await e Generator?', answer: 'Async/await lida com Promises. Generators pausam/retomam com yield/next. Ambos são usados para fluxo assíncrono.' },
    { question: '30. Para que serve "use strict";?', answer: 'Ativa modo estrito que impõe regras mais rígidas. Evita erros silenciosos, mas pode quebrar código legado.' }
];