# Webpack and Babel Trial

This trial works it's way through implementing the webpack guides at [webpack.js.org/guides/](https://webpack.js.org/guides/).

I didn't do the [Loading Fonts part](https://webpack.js.org/guides/asset-management/#loading-fonts) in the Asset Management section because I didn't have suitable font files available. Anyway, I'll probably use [Google Fonts](https://fonts.google.com/) when I build my web sites.

The project structure is adapted from Andras Toth's [Codeship post](https://blog.codeship.com/advanced-node-js-project-structure-tutorial/): _Toth, Andras; Advanced Node.js Project Structure Tutorial; 2018-04-03_.

```text
.
|-- config
|-- dist
|   |-- 4cf91b873adbd393ad9de843ae08c5f0.png
|   |-- app.bundle.js
|   |-- index.html
|   `-- print.bundle.js
|
|-- .git
|-- node_modules
|-- src
|   |-- api
|   |-- www
|       |-- icons8-happy-50.png
|       |-- index.html
|       |-- index.js
|       |-- print.js
|       `-- style.css
|
|-- .eslintrc.js
|-- .gitignore
|-- LICENSE.txt
|-- package.json
|-- package-lock.json
|-- README.md
|-- server.js
`-- webpack.config.js
```

