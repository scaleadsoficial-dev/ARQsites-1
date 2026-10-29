# Stella | Arquitetura e Design — Site

Site institucional de página única da arquiteta Stella (Goiânia - GO): portfólio (Casa NB e Living do Apto. Reserva), biografia, serviços e contato via WhatsApp, Instagram, e-mail e mapa.

## Tecnologias
React 19, TypeScript, TanStack Start/Router, Vite 7 e Tailwind CSS v4. No build, a página é pré-renderizada em HTML estático (`dist/client`), sem necessidade de servidor ou backend.

## Requisitos
Node.js 22+ (ou Bun).

## Rodar localmente
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Saída publicável: **`dist/client`** (contém `index.html`, `assets/` e `images/`).

## Publicar no GitHub
```bash
git init
git add .
git commit -m "Site Stella Arquitetura"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/stella-arquitetura.git
git push -u origin main
```

## Publicar na Netlify
1. Netlify → **Add new site → Import an existing project** → GitHub → escolha o repositório.
2. Build command: `npm run build`
3. Publish directory: `dist/client`
4. Deploy. (Esses valores já estão em `netlify.toml`.)

Nenhuma variável de ambiente é necessária.

## Editar conteúdo
- Contatos, projetos e serviços: `src/lib/site.ts`
- Textos da página: `src/routes/index.tsx`
- Imagens: `public/images/` (mantenha os mesmos nomes ou atualize em `src/lib/site.ts`)
- Cores e fontes: `src/styles.css`

## Integrações externas
Links diretos para WhatsApp (wa.me), Instagram, e-mail (mailto) e Google Maps. Fontes via Google Fonts.

## Limitações conhecidas
- Não há formulário: o contato é feito pelo WhatsApp e demais canais.
- A imagem do topo (cozinha) foi fornecida como referência estética; confirmar se é obra da arquiteta antes da versão final.
- Sem depoimentos (nenhum foi fornecido).
