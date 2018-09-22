module.exports = {
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 1000, // 1KO
          name: "img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        query: {
          limit: 1000, // 1 KO
          name: "fonts/[name].[hash:7].[ext]"
        }
      }
    ],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: "Bernard Pagoaga, Javascript Front-End Web Developer in Lille",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Bernard Pagoaga, Javascript Front-End Web Developer in Lille"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans"
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  generate: {
    routes: ["/", "/hello-static-blogging", "/foo-bar"]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: "#3B8070"
  },
  /*
  ** Modules
  */
  modules: [
    "@nuxtjs/pwa",
    ["@nuxtjs/markdownit", { html: true, linkify: true, breaks: true }]
  ],
  css: [
    "bulma",
    // SCSS file in the project
    "@/assets/css/main.scss"
  ]
};
