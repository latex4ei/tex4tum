/* loads tablesort and applies to tables */


TABLESORT_JS='https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js'

function loadTablesort(renderCall=addTableSort) {
    var script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = TABLESORT_JS;
    script.onload = renderCall;

    document.head.appendChild(script);
}

function addTableSort() {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
}

loadTablesort()