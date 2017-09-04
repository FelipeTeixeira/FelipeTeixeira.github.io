// let versao = 2

// let arquivos = [
// "/",
// "assets/css/style.css",
// "lib/angular.min.js",
// "lib/angular-ui-router.min.js",
// "js/app.js",
// "js/routes.js",
// "js/controllers/masterCtrl.js",
// "js/controllers/loginEmailCtrl.js",
// "js/controllers/loginCreateAccountCtrl.js",
// "js/controllers/homeCtrl.js",
// "js/controllers/offerCtrl.js",
// "js/controllers/commentsCtrl.js",
// "js/controllers/favoritesCtrl.js",
// "js/controllers/publishCtrl.js",
// "js/controllers/profileCtrl.js",
// "js/controllers/alertsCtrl.js",
// "js/services/offerService.js",
// "assets/js/zepto.min.js",
// "views/alerts.html",
// "views/comments.html",
// "views/favorites.html",
// "views/home.html",
// "views/login.html",
// "views/loginCreateAccount.html",
// "views/loginEmail.html",
// "views/offer.html",
// "views/profile.html",
// "views/publish.html",
// "views/partials/header.html",
// "views/partials/menu.html",
// "views/partials/navCategory.html",
// "views/partials/offer-list.html",
// "views/partials/search.html",
// "views/partials/svg.html"
// ]

// self.addEventListener("install", function(){
//     console.log("Instalou")
// })

// self.addEventListener("activate", function(){
//     caches.open("ceep-arquivos-" + versao).then(cache => {
//         cache.addAll(arquivos)
//             .then(function(){
//                 caches.delete("ceep-arquivos-" + (versao - 1 ))
//                 caches.delete("ceep-arquivos")
//             })

//     })
// })


// self.addEventListener("fetch", function(event){

//     let pedido = event.request
//     let promiseResposta = caches.match(pedido).then(respostaCache => {
//         let resposta = respostaCache ? respostaCache : fetch(pedido)
//         return resposta
//     })

//     event.respondWith(promiseResposta)

// })

