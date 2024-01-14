# Dashboard app - Next.js Tutorial
This is a space to practice developing using the Next.js framework. After completing the inital training material from the Next.js website I moved onto the the [Dashboard App Tutorial](https://nextjs.org/learn/dashboard-app/getting-started). As part of this I had to delete the current app files created in the basic learning, please view commit [849815e](https://github.com/Tiff-C/bug-free-waddle/commit/849815efa6b2c5c1143405b35409076acef28e9d). The notes below are intened to be used as reference when creating future next.js projects. 

## Getting started

To download the preprepared code for the tutuorial I ran the below code in the command line.
```
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```

After running the below list of commands were listed in the terminal:

```
Success! Created nextjs-dashboard at <folderName>
Inside that directory, you can run several commands:

  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd nextjs-dashboard
  npm run dev
```

### Notes on Getting Started

When running `npm run dev` in the console I got the below error:
```
ReferenceError: Request is not defined
    at Object.<anonymous> (/workspace/bug-free-waddle/nextjs-dashboard/node_modules/next/dist/server/web/spec-extension/request.js:28:27)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at Module.mod.require (/workspace/bug-free-waddle/nextjs-dashboard/node_modules/next/dist/server/require-hook.js:64:28)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/workspace/bug-free-waddle/nextjs-dashboard/node_modules/next/dist/server/web/spec-extension/adapters/next-request.js:37:18)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
```

To fix this error I ran `npm outdated` to list the outdated packages. I then ran `npm update`.

This then returned `You are using Node.js 16.13.0. For Next.js, Node.js version >= v18.17.0 is required.` in the console when running `npm run dev`. 

To rectify this I installed `nvm` following the guidance on the [node.js site](https://nodejs.org/en/download/package-manager#nvm) and following the instructions in the [nvm documentation](https://github.com/nvm-sh/nvm#install--update-script). This fixed my issue.

## How to run this project

Open the project and install dependencies, these can be found in the `package.json` file.

Once installed, run the below comman in the console. 
```
npm run dev
```

