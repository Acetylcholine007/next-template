# NextJS Template

## Overview

📦 Ready out of the box  
🎯 Based on the official [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)  
💪 Opinionated React/NextJS structuring and workflow  
🍃 Tailwind and Framer Motion for styling and animation  
🐞 ESLint, Prettier, Git Hooks, Snippets, Testing and Debugger configuration included  
🐋 Dockerized codebase

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Rules and Conventions

1. File naming should follow the naming convention employed by Angular. Name should be **[kebab-case-name].[grouping-name].[file-extension]**.
2. When creating a React component, use **rfc** snippet defined in workspace configuration.
3. As much as possible do not bypass husky hooks and ESlint checkings. Try to resolve the problem being raised.
4. Typical workflow should start from defining enums or models via interface in data folder followed by component creation and styling. Next will be the creation of query strings in **graphql/queries** followed by **yarn codegen** command.
5. Files and Folders responsibility are defined as followed:
   1. **src** holds the renderer/frontend source files
      1. **common** holds all sharable components and react logical encapsulations like hooks as well as utils
      2. **data** holds enums, interfaces, mock data and so on.
      3. **features** act as container of modules. Module is a folder that groups all closely-related functionalities. For complex feature, it should have **components** and **hooks** and optional **contexts** and **utils** folder.
      4. **layout** holds a wrapping component where global components and stylings can be inserted.
      5. **store** contains all redux-related files. **store/index.ts** holds the reducer/slice usage while **store/slices** holds slice declarations.
      6. **pages** acts as the container for a whole page and consumes/renders the features. No API logic should be added here and only logic for SSG, SSR and ISR are needed.
   2. **\_app.tsx** contains only app-wrapping components like store and other providers.
6. For git rules, always follow the following:
   1. Git flow
   2. One commit only per feature branch. Squash your commits first before creating PR.
   3. Always ensure your feature branch is on the HEAD of your base-branch. Always rebase when your feature branch became outdated before creating PR
   4. Follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
   5. Make sure your feature branch only address a particular issue.
   6. Convention for creating feature branch is: **[branch-type]/[ticket-name]/[short-label]** in kebab-casing. Branch types are:
      1. **feature**
      2. **bugfix**
      3. **hotfix**
      4. **chore**
      5. **style**
      6. **release**
7. Always remove console logs before committing.

## Deploy via Docker

- Change configuration on Dockerfile

- Build your container: `bash docker build -t nextjs-docker .`

- Run your container: `bash docker run -p 3000:3000 nextjs-docker`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
