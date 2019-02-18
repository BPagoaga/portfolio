/******/ ;(function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {} // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId])
      /******/ return installedModules[moduleId].exports // Create a new module (and put it into the cache)
    /******/
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ exports: {},
      /******/ id: moduleId,
      /******/ loaded: false
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ) // Flag the module as loaded
    /******/
    /******/ /******/ module.loaded = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "" // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__(0)
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
    /***/ function(module, exports) {
      "use strict"
      ;(function() {
        var projets = [],
          sections = [],
          ul = $("#portfolio ul"),
          h4 = {}

        var req = new XMLHttpRequest()
        req.open("GET", "projets.json", true)
        req.onreadystatechange = processJson
        req.send(null)

        function processJson() {
          if (req.readyState == 4) {
            var doc = eval("(" + req.responseText + ")")

            // Chrome is not ready for this !!!!
            //doc = Object.entries(doc)
            var key = void 0,
              doc_arr = []

            for (key in doc) {
              doc_arr.push([key, doc[key]])
            }

            doc_arr.map(function(arr) {
              var section = arr[0].replace(arr[0][0], arr[0][0].toUpperCase())
              h4[section] = $('<h4 id="' + section + '">')
              ul.append(
                $('<div class="row">').append(h4[section].text(section))
              )

              arr[1].map(parsingArr)
            })
          }
        }

        function parsingArr(obj, i, arr) {
          if (Object.keys(obj).length > 0) {
            var li = $('<li class="col-xs-12 col-sm-6 col-md-3">'),
              img = $(
                '<figure><img class="img-portfolio img-responsive img-thumbnail" src="' +
                  obj.thumbnail +
                  '"></figure>'
              ),
              a = $('<a href="' + obj.link + '" target="_blank">'),
              portfolioItem = $('<div class="portfolio-item">'),
              figcaption = $("<figcaption>"),
              keywords = obj.keywords,
              p = $("<p>").html("<h4>" + obj.title + "</h4>" + obj.description)

            if (keywords) {
              keywords = keywords.map(function(keyword) {
                return "<strong>" + keyword + "</strong>"
              })

              figcaption.html(keywords.join(" - "))
            }

            var value = void 0
            for (value in h4) {
              h4[value].after(
                li.append(
                  portfolioItem.append(a.append(img.append(figcaption), p))
                )
              )
            }
          }
        }
      })()

      /***/
    }
    /******/
  ]
)
//# sourceMappingURL=main.js.map
