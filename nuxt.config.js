const pkg = require("./package");

const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "Bernard Pagoaga, Javascript & PHP Web Developer in Lille",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      {
        name: "key-words",
        content:
          "web development, front-end, responsive design, Lille, javascript, html, css, php, symfony, angular, vue"
      },
      {
        property: "og:title",
        content: "Bernard Pagoaga, Javascript & PHP Web Developer in Lille"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "https://bernardpagoaga.net"
      },
      {
        property: "og:image",
        content: "https://bernardpagoaga.net/BPAGOAGA.svg"
      },
      {
        property: "og:description",
        content:
          "Bernard Pagoaga, Javascript & PHP Web Developer in Lille, using Symfony, Angular, Vue, ApiPlatform & Co"
      },
      { name: "author", content: "Bernard Pagoaga" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
        integrity:
          "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Fira+Sans"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#FFFFFF" },

  /*
  ** Global CSS
  */
  css: ["vuetify/src/stylus/main.styl", "@/assets/scss/main.scss"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["@/plugins/vuetify"],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // https://github.com/vaso2/nuxt-fontawesome
    "nuxt-fontawesome"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};
