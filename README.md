# João Cunha | Portfólio Pessoal

Portfólio pessoal com uma interface inspirada no **VS Code** (tema Min Dark): cada seção do currículo é um "arquivo" que se abre numa aba, navegado por um Explorer lateral — nada de rolar a página, é tudo abrir e fechar arquivo.

**Acesse em:** [joaocunha.vercel.app](https://joaocunha.vercel.app)

---

## 🚀 Sobre o projeto

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS**, com uma paleta baseada no [Min Theme](https://github.com/miguelsolorio/min-theme) (Min Dark)
- Ícones: **Phosphor Icons** (chrome geral da UI), **react-icons / Simple Icons** (logos reais de cada tecnologia no `stack.json`) e **lucide-react** (ícones decorativos da activity bar)
- **ESLint** com plugin de TypeScript

## 🖥️ Como funciona

- A **sidebar (Explorer)** fica sempre visível e lista os "arquivos" do site: `about.md`, `contact.json`, `stack.json`, `experience.json`, `education.md`, `certifications.log` e a pasta `projects/`.
- Clicar num arquivo abre ele numa aba (**tab bar**), dá pra manter várias abas abertas e trocar entre elas — `about.md` já vem aberto por padrão.
- Cada tipo de arquivo é renderizado com destaque de sintaxe próprio: `.json` como JSON de verdade (chave/string coloridas), `.md` como markdown "cru" estilizado, `.log` como linhas de log.
- A activity bar (ícones à esquerda) é só decorativa, no mesmo estilo do [fala.dev](https://fala.dev) — a navegação real acontece pelo Explorer.

## 📂 Estrutura

```bash
src/
├── @types/             # Tipagens TypeScript
├── components/
│   ├── ide/             # Shell da IDE
│   │   ├── views/        # Uma view por "arquivo" (About, Contact, Stack, Experience, Education, Certifications, Project)
│   │   ├── TitleBar.tsx
│   │   ├── ActivityBar.tsx
│   │   ├── Explorer.tsx
│   │   ├── TabBar.tsx
│   │   ├── EditorPane.tsx
│   │   ├── StatusBar.tsx
│   │   └── Syntax.tsx    # Primitivos de sintaxe colorida (chave, string, comentário...)
│   ├── Icons.tsx         # Mapa de ícones usados no site
│   └── Photo.tsx
├── data/                # Conteúdo do site — fonte única de verdade por seção
├── utils/
├── App.tsx
├── index.css
└── main.tsx
```

Atualizar conteúdo (experiência, stack, certificações, projetos, educação) é só editar o arquivo correspondente em `src/data/` — as views só renderizam o que está lá.

## 🔧 Rodando localmente

```bash
npm install
npm run dev
```

Outros scripts: `npm run build`, `npm run lint`, `npm run preview`.

---

📫 Contato
- Email: jvscunha04@gmail.com
- LinkedIn: [linkedin.com/in/j0aocunha](https://www.linkedin.com/in/j0aocunha/)
- GitHub: [github.com/J0aoCunha](https://github.com/J0aoCunha)

Desenvolvido por João Victor da Silva Cunha
