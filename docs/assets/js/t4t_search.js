
// Fuse (Fuzzy Search Library)
// ====================================================================


var search_index = [{"url":"bus","title":"Bus","tags":[],"sections":[]},{"url":"i2c","title":"Inter-Integrated Circuit I²C","tags":["I2C","SDA","SCK"],"sections":[]},{"url":"spi","title":"Serial Peripheral Interface","tags":["SPI"],"sections":[]},{"url":"usart","title":"Universal Asynchronous Receiver Transmitter (UART)","tags":["UART,","RX,","TX,","RTS,","CTS"],"sections":[]},{"url":"usb","title":"Universal Serial Bus","tags":[],"sections":[]},{"url":"capacitor","title":"Capacitor","tags":[],"sections":[]},{"url":"component","title":"Component","tags":[],"sections":[]},{"url":"diode","title":"Diode","tags":[],"sections":[]},{"url":"inductor","title":"Inductor","tags":[],"sections":[]},{"url":"op-amp","title":"Op Amp","tags":[],"sections":[]},{"url":"resistor","title":"Resistor","tags":[],"sections":[]},{"url":"transistor","title":"Transistor","tags":[],"sections":[]},{"url":"kalman-filter","title":"Kalman Filter","tags":[],"sections":[]},{"url":"low-pass","title":"Low Pass Filter","tags":[],"sections":[]},{"url":"sampling","title":"Sampling","tags":[],"sections":[]},{"url":"electronics","title":"Electronics","tags":[],"sections":[]},{"url":"packages","title":"Packages","tags":[],"sections":[]},{"url":"glossary","title":"Glossary","tags":[],"sections":[]},{"url":"index","title":"Tex4TUM","tags":[],"sections":[]},{"url":"filesystem","title":"Filesystem","tags":[],"sections":[]},{"url":"memory","title":"Memory Management","tags":[],"sections":[]},{"url":"paging","title":"Paging","tags":[],"sections":[]},{"url":"systemcall","title":"System Call","tags":[],"sections":[]},{"url":"it","title":"Information Theory","tags":[],"sections":[]},{"url":"language","title":"Language","tags":[],"sections":[]},{"url":"ada","title":"Ada","tags":[],"sections":[]},{"url":"bash","title":"Bash","tags":[],"sections":[]},{"url":"c","title":"C","tags":[],"sections":[]},{"url":"go","title":"Go","tags":[],"sections":[]},{"url":"matlab","title":"Matlab","tags":[],"sections":[]},{"url":"natural-language","title":"Natural Language","tags":[],"sections":[]},{"url":"regular-expressions","title":"Regular Expressions","tags":[],"sections":[]},{"url":"complexity-theory","title":"Complexity Theory","tags":[],"sections":[]},{"url":"float","title":"Floating Point Number","tags":[],"sections":[]},{"url":"numbers","title":"Number Converter","tags":[],"sections":[]},{"url":"oop","title":"Object Oriented Programming (OOP)","tags":[],"sections":[]},{"url":"petri-net","title":"Petri Net","tags":[],"sections":[]},{"url":"semaphore","title":"Semaphore","tags":[],"sections":[]},{"url":"gdb","title":"Gnu Debugger (GDB)","tags":[],"sections":[]},{"url":"git","title":"Git","tags":[],"sections":[]},{"url":"hg","title":"Mercurial (HG)","tags":[],"sections":[]},{"url":"jekyll","title":"Jekyll","tags":[],"sections":[]},{"url":"svn","title":"Subversion (SVN)","tags":[],"sections":[]},{"url":"algebra","title":"Algebra","tags":[],"sections":[]},{"url":"complex-number","title":"Complex Numbers","tags":["Imaginary Unit"],"sections":[]},{"url":"matrix","title":"Matrix","tags":[],"sections":[]},{"url":"vector","title":"Vector Space","tags":[],"sections":[]},{"url":"analysis","title":"Analysis","tags":[],"sections":[]},{"url":"frequency-analysis","title":"Frequency Analysis","tags":[],"sections":[]},{"url":"integral","title":"Integral","tags":[],"sections":[]},{"url":"geometry","title":"Geometry","tags":[],"sections":[]},{"url":"2D-Shapes","title":"2D Geometry","tags":[],"sections":[]},{"url":"trigonometry","title":"Trigonometry","tags":["Sinus","Cosinus","Tangens","Arctan"],"sections":[]},{"url":"math","title":"Math","tags":[],"sections":[]},{"url":"statistics","title":"Statistics","tags":[],"sections":[]},{"url":"moment","title":"Moment","tags":[],"sections":[]},{"url":"normal-distribution","title":"Normal Distribution","tags":[],"sections":[]},{"url":"probability","title":"Probability","tags":[],"sections":[]},{"url":"testing","title":"Hypothesis Testing","tags":[],"sections":[]},{"url":"constants","title":"Physical Constants","tags":[],"sections":[]},{"url":"electric-field","title":"Electric Field","tags":[],"sections":[]},{"url":"electromagnetism","title":"Electromagnetism","tags":[],"sections":[]},{"url":"kirchhoff","title":"Kirchhoffs's Circuit Laws","tags":[],"sections":[]},{"url":"maxwell","title":"Maxwell Equations","tags":[],"sections":[]},{"url":"mechanics","title":"Mechanics","tags":[],"sections":[]},{"url":"motion","title":"Mechanical Motion","tags":["Rotation","Translation"],"sections":[]},{"url":"optic","title":"Optics","tags":[],"sections":[]},{"url":"reflection","title":"Reflection","tags":[],"sections":[]},{"url":"physics","title":"Physics","tags":[],"sections":[]},{"url":"si-units","title":"SI Units","tags":[],"sections":[]},{"url":"thermodynamics","title":"Thermodynamics","tags":[],"sections":[]},{"url":"404","title":"Oops!","tags":[],"sections":[]},{"url":"about","title":"About TeX4TUM","tags":[],"sections":[]},{"url":"contribution","title":"Contribution","tags":[],"sections":["First Heading"]},{"url":"demo","title":"Interactive Cheat Sheets Demo","tags":[],"sections":[]},{"url":"feature-test","title":"Feature Test Site","tags":[],"sections":[]},{"url":"sheets","title":"Cheat Sheets","tags":[],"sections":[]},{"url":"todo","title":"TODO","tags":[],"sections":[]}]

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