# StartZone

> **CHECKPOINT 5**
> **Curso:** Engenharia de Software  
> **Disciplina:** Web Development  
> **Professor:** Wellington Cidade Silva  
> **Turma:** 1ESPA  

Site da loja gamer **StartZone**, desenvolvido como projeto acadêmico utilizando **React + Vite**.

---

## Equipe de Desenvolvimento

| RM | Nome |
|----|------|
| RM 567947 | Lara Mofid Essa Alssabak |
| RM 567355 | Maria Luisa Boucinhas Franco |
| RM 568459 | Maria Luiza Kochnoff da Matta |
| RM 567825 | Roberta Moreira dos Santos |

---

## Links

- **Repositório:** [github.com/1ESPA-PinkCode/CP5-Web](https://github.com/1ESPA-PinkCode/CP5-Web)

---

## Sobre o projeto

O **StartZone** é um site voltado para o universo gamer, criado para oferecer uma experiência moderna e intuitiva na busca por jogos.

O projeto apresenta uma interface atrativa com seções de destaque, catálogo de produtos, suporte ao usuário, depoimentos de clientes e identidade visual inspirada no mundo dos games.

---

## Estrutura de pastas

```bash
CP5-WEBDEV/
├── node_modules/
├── public/
├── src/
│   ├── assets/                # Imagens e recursos estáticos
│   │   ├── cyberpunk.jpeg
│   │   ├── fifa.jpeg
│   │   ├── foto.hero.jpg
│   │   ├── godofwar.jpeg
│   │   ├── gta.jpeg
│   │   ├── logo.PNG
│   │   ├── mario.jpeg
│   │   ├── minecraft.jpeg
│   │   ├── reddead.jpeg
│   │   └── zelda.jpeg
│   │
│   ├── components/            # Componentes reutilizáveis
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   │
│   ├── routes/                # Páginas da aplicação
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   ├── Produto.jsx
│   │   └── Suporte.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial com banner principal, benefícios, depoimentos e CTA |
| `/produto` | Catálogo de jogos disponíveis |
| `/suporte` | Página de suporte ao cliente |
| `*` | Página de erro para rotas inexistentes |

---

## Funcionalidades

- Página inicial responsiva
- Navegação entre páginas com React Router
- Catálogo de jogos
- Área de suporte
- Depoimentos de clientes
- Layout moderno com identidade gamer
- Footer com redes sociais e contato

---

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Como rodar o projeto

**1. Clone o repositório**
```bash
git clone https://github.com/1ESPA-PinkCode/CP5-Web.git
```

**2. Entre na pasta do projeto**
```bash
cd CP5-Web
```

**3. Instale as dependências**
```bash
npm install
```

**4. Rode o servidor de desenvolvimento**
```bash
npm run dev
```

**5. Acesse no navegador**
```bash
http://localhost:5173
```

## Objetivo acadêmico

Este projeto foi desenvolvido como atividade prática da disciplina de **Web Development**, com foco em:

- Componentização com React
- Estruturação de rotas
- Design responsivo
- Boas práticas de organização de código
- Experiência do usuário (UI/UX)

---

## Status do projeto

**Em desenvolvimento**  
Novas funcionalidades e melhorias visuais poderão ser adicionadas futuramente.
