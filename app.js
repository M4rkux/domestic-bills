var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho",
            "Agosto","Setembro","Outubro","Novembro","Dezembro"];



if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(sw) {
        console.log(sw);
    });
}

(function init() {
    var section = document.querySelector('section');
    meses.forEach(function (mes) {
        var article = document.createElement('article');
        var h3 = document.createElement('h3');
        h3.innerHTML = mes;
        article.appendChild(h3);
        section.appendChild(article);
    })
})();