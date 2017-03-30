
// Fuse (Fuzzy Search Library)
// ====================================================================


var search_index = ["empty"]; // index will be filled by jekyll-hook

var options = {
  keys: ['title', 'tags'] //,
  //id: ['url', 'title']
}
var fuse = new Fuse(search_index, options)


// dynamically load search index
// ====================================================================

// $.getJSON("/assets/js/search_index.json", function(data) {
//     console.log(data);
//     // data is a JavaScript object now. Handle it as such

//     search_index = data;
//     fuse = new Fuse(search_index, options);


// });

var autocomplete = function (options) {
    // console.log(JSON.stringify(options.data));
    for (var idx = 0; idx < options.container.length; idx++){
        var doc = document,
            data = options.data,
            contEl = options.container[idx],
            resultNodes = contEl.getElementsByTagName('A'),
            inputEl = options.container[idx].firstElementChild,
            cache = {},
            handlers = {
                'enter': function (e) {
                    if (e.target.nextElementSibling.firstChild && e.target.nextElementSibling.firstChild.style.display != 'none') {
                        window.location = e.target.nextElementSibling.firstChild.href;
                    } else if (e.target.parentNode === contEl && resultNodes[0].style.display == 'none') {
                        // todo: deal with no results
                        window.location = './404.html';
                    }
                },
                'up': function (e) {
                    e.preventDefault();
                    if (e.target.previousElementSibling && e.target.previousElementSibling.hasAttribute('href')) {
                        e.target.previousElementSibling.focus();
                    } else if (!e.target.previousElementSibling && e.target.parentNode === contEl.lastElementChild) {
                        contEl.children[0].focus();
                    }
                },
                'down': function (e) {
                    e.preventDefault();
                    if (e.target === contEl.children[0]) {
                        contEl.lastElementChild.children[0].focus();
                    } else if (e.target.nextElementSibling && e.target.nextElementSibling.hasAttribute('href')) {
                        e.target.nextElementSibling.focus();
                    }
                },
                'input': function (e) {
                    var val = e.target.value.trim().replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                    return val ? insert(cacheFn(val, check)) : insert();
                },
                'escape': function (e) {
                    inputEl.value = "";
                    insert();
                    // contEl.firstElementChild.blur(); // should we unfocus?
                }
            };

        function createDropdown() {
            var wrapEl = contEl.querySelectorAll('.ac-results-wrapper')[0];
            var i = options.numResults;
            while (i--) {
                var anchorEl = document.createElement('a');
                anchorEl.href = '#';
                anchorEl.innerHTML = 'a<i>i</i>';
                wrapEl.appendChild(anchorEl);
            }
        }

        function cacheFn(q, fn) {
            return cache[q] ? cache[q] : cache[q] = fn(q), cache[q];
        }


        function check(q) {   // fuse part
            var entries = fuse.search(q);
            var arr = [];
            for (var i = 0; (i < entries.length && i < options.numResults); i++) {
                arr.push({
                    'name': entries[i].url,
                    'tag': entries[i].title
                });
            }
            return arr;
        }


        function insert(d) {
            var i = options.numResults;
            while (i--) {
                if (d && d[i]) {
                    resultNodes[i].style.display = 'block';
                    resultNodes[i].firstChild.nodeValue = d[i].tag;
                    var uri = d[i].name.toLowerCase();
                    resultNodes[i].href = options.directPath + '/' + uri + '.html';
                    resultNodes[i].firstElementChild.firstChild.nodeValue = '';
                } else if (!d || !d[i]) {
                    resultNodes[i].style.display = 'none';
                }
            }
        }

        function multiHandler(e) {
            var k = e.keyCode,
                //assign a value to k if the up, down enter keys are pressed, or if the event is an input
                meth = k === 13 ? 'enter' : k === 27 ? 'escape' : k === 38 ? 'up' : k === 40 ? 'down' : e.type === 'input' ? 'input' : null;
            //if 'meth' was assigned a value earlier, return the associated function and pass the event to it
            return meth ? handlers[meth](e) : null;

        }

        function changeHandler(e) {
            window.setTimeout(function () {
                return doc.activeElement.parentNode === contEl || doc.activeElement.parentNode === contEl.lastElementChild ? null : insert();
            }, 50);
        }

        function globalHandler(e) {
            var keyCode = e.keyCode;
            if(keyCode==9) {
                if (e.target != contEl.children[0]) {
                    window.setTimeout(function (){ contEl.children[0].focus(); }, 0);
                    contEl.children[0].focus();
                }
            } 
        }
   

        createDropdown();
        document.addEventListener('keydown', globalHandler);
        contEl.addEventListener('input', multiHandler);
        contEl.addEventListener('keydown', multiHandler);
        contEl.parentNode.addEventListener('submit', function(e){ event.returnValue=false; return false; } );  // for the form
        contEl.firstElementChild.addEventListener('change', changeHandler);
    }
};