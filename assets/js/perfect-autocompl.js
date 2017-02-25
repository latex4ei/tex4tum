var acData = [{
    "name": "electronics",  // name
    "tags": ["electronics"],
    "subgroups": [{
        "name": "bus",
        "tags": ["Serial"],
        "subgroups": [
            {"name": "I2C", "tags": ["SDA", "SCK"]},
            {"name": "SPI", "tags": ["MOSI", "MISO"]},
            {"name": "USART", "tags": ["RX", "TX", "RTS", "CTS", "Baudrate"]},
            {"name": "USB", "tags": []},
            {"name": "CAN", "tags": []},
            {"name": "Ethernet", "tags": ["Ethernet"]}
        ]
    },
        {
            "name": "component",
            "tags": [],
            "subgroups": [
                {"name": "Resistor", "tags": []},
                {"name": "Diode", "tags": ["Schottky", "Zener"]},
                {"name": "Capacitor", "tags": []},
                {"name": "Inductor", "tags": []},
                {"name": "Transistor", "tags": []},
                {"name": "Op-Amp", "tags": []}
            ]
        },
        {
            "name": "dsp",
            "tags": [],
            "subgroups": [
                {"name": "Low Pass", "tags": ["RC", "LR"]},
                {"name": "Kalman Filter", "tags": []},
                {"name": "Sampling", "tags": []}
            ]
        }
    ]
}, {
    "name": "it",  // name
    "tags": ["Information Theory"],
    "subgroups": [{
        "name": "language",
        "tags": ["Programming"],
        "subgroups": [
            {"name": "Ada", "tags": ["Secure"]},
            {"name": "Bash", "tags": ["Shell"]},
            {"name": "C", "tags": ["C++", "C Plus Plus"]},
            {"name": "Matlab", "tags": ["CAS"]},
            {"name": "Regular Expressions", "tags": []}
        ]
    }, {
        "name": "theory",
        "tags": ["Computer Science"],
        "subgroups": [
            {"name": "Numbers", "tags": ["Data Types", "Hex", "Integer"]},
            {"name": "Complexity Theory", "tags": ["P", "NP"]}
        ]
    }
    ]
}, {
    "name": "math",  // name
    "tags": [],
    "subgroups": [{
        "name": "algebra",
        "tags": [],
        "subgroups": [
            {"name": "Complex Number", "tags": ["Imaginary Unit"]},
            {"name": "Vector", "tags": ["linear"]},
            {"name": "Matrix", "tags": ["Determinant", "Eigenvalue", "Eigenvector"]}
        ]
    }, {
        "name": "analysis",
        "tags": [],
        "subgroups": [
            {"name": "Integral", "tags": ["Derivation"]},
            {"name": "Frequency Analysis", "tags": ["Fourier", "Laplace"]}
        ]
    }, {
        "name": "geometry",
        "tags": [],
        "subgroups": [
            {"name": "Trigonometry", "tags": ["Sinus", "Cosinus", "Tangens", "Arctan"]},
            {"name": "2D Shapes", "tags": ["Rectangle", "Triangle", "Circle"]}
        ]
    }, {
        "name": "statistics",
        "tags": [],
        "subgroups": [
            {"name": "Testing", "tags": []}
        ]
    }
    ]
}, {
    "name": "physics",  // name
    "tags": [],
    "subgroups": [
        {"name": "SI-Units", "tags": ["Prefix"]},
        {
            "name": "mechanics",
            "tags": [],
            "subgroups": [
                {"name": "Motion", "tags": ["Rotation", "Translation"]},
                {"name": "Force", "tags": []}
            ]
        }, {
            "name": "electromagnetism",
            "tags": [],
            "subgroups": [
                {"name": "Maxwell", "tags": ["Gauss's law"]},
                {"name": "Kirchhoff", "tags": ["KVL", "KCL"]}
            ]
        }, {
            "name": "quantum",
            "tags": [],
            "subgroups": [
                {"name": "Quantum Mechanics", "tags": []}
            ]
        }, {
            "name": "Thermodynamics",
            "tags": [],
            "subgroups": [
                {"name": "Carnot-Process", "tags": []}
            ]
        }
    ]
}];


// Fuse Test
// ====================================================================



var index_array = [{"title":"Interactive Cheat Sheets Demo","tags":[],"sections":["Features","Demo Pages","ToDo"]},{"title":"Electronics","tags":[],"sections":["[**Components**](component.html)","[**Buses**](bus.html)"]},{"title":"Bus","tags":[],"sections":["Serial Buses","Parallel Buses"]},{"title":"Inter-Integrated Circuit I²C","tags":[],"sections":[]},{"title":"Serial Peripheral Interface","tags":[],"sections":["Connection"]},{"title":"Universal Asynchronous Receiver Transmitter","tags":[],"sections":[]},{"title":"Universal Serial Bus","tags":[],"sections":["USB 2.0","USB 3.0"]},{"title":"Component","tags":[],"sections":["Two Terminals","Three Terminal","More Terminal"]},{"title":"Capacitor","tags":[],"sections":[]},{"title":"Diode","tags":[],"sections":[]},{"title":"Inductor","tags":[],"sections":[]},{"title":"Op Amp","tags":[],"sections":["Voltage Follower/Buffer","Non-Inverting Amplifier","Inverting Amplifier","Differential Amplifier","Schmitt-Trigger"]},{"title":"Resistor","tags":[],"sections":["Color Codes"]},{"title":"Transistor","tags":[],"sections":[]},{"title":"Kalman Filter","tags":[],"sections":["Working Principle","Requirements","Calculations","Extended Kalman Filter","Sensor Fusion","Example"]},{"title":"Low Pass Filter","tags":[],"sections":["Filter Response:"]},{"title":"Sampling","tags":[],"sections":[]},{"title":"Packages","tags":[],"sections":["Flat Package","Grid Arrays (xGA)"]},{"title":"Glossary","tags":[],"sections":[]},{"title":"Information Theory","tags":[],"sections":["Table of Contents"]},{"title":"Filesystem","tags":[],"sections":["File Allocation Table (FAT)","Index Nodes (I-Nodes)","Journaling","Fragmentation"]},{"title":"Memory Management","tags":[],"sections":[]},{"title":"Paging","tags":[],"sections":["Page Table","Page Fault","Working Set Concept"]},{"title":"System Call","tags":[],"sections":["Categories","References"]},{"title":"Language","tags":[],"sections":["Chomsky-Hierarchy","Backus–Naur Form (BNF)"]},{"title":"Ada","tags":[],"sections":[]},{"title":"Bash","tags":[],"sections":[]},{"title":"C","tags":[],"sections":[]},{"title":"Go","tags":[],"sections":["Features","Overview"]},{"title":"Matlab","tags":[],"sections":[]},{"title":"Natural Language","tags":[],"sections":["Natural Language Processing"]},{"title":"Regular Expressions","tags":[],"sections":["Applet"]},{"title":"XML","tags":[],"sections":[]},{"title":"Complexity Theory","tags":[],"sections":["Complexity Classes","Reduction"]},{"title":"Floating Point Number","tags":[],"sections":["Special Numbers","Exceptions","Subnormal Numbers","Not-A-Number (NaN)"]},{"title":"Hash Function","tags":[],"sections":["Properties"]},{"title":"Number Converter","tags":[],"sections":["Data Types","2-Complement"]},{"title":"Object Oriented Programming (OOP)","tags":[],"sections":["Concepts","Likov Substitution Principle"]},{"title":"Petri Net","tags":[],"sections":["Types","Execution Rules","Properties","Context"]},{"title":"Semaphore","tags":[],"sections":["Operations"]},{"title":"Gnu Debugger (GDB)","tags":[],"sections":["Usage","Commands"]},{"title":"Git","tags":[],"sections":["Commands"]},{"title":"Mercurial (HG)","tags":[],"sections":[]},{"title":"Subversion (SVN)","tags":[],"sections":[]},{"title":"Math","tags":[],"sections":["Table of Contents"]},{"title":"Algebra","tags":[],"sections":[]},{"title":"Complex Numbers","tags":[],"sections":["Rules"]},{"title":"Matrix","tags":[],"sections":["Calculations","Quadratic Matrices","Eigenvalues and Eigenvectors","Special 2×2 Matrices"]},{"title":"Vector Space","tags":[],"sections":[]},{"title":"Analysis","tags":[],"sections":[]},{"title":"Frequency Analysis","tags":[],"sections":["Fourierreihe","Fouriertransformation (FT)","Laplaceransformation (LT) $\\cx s = α + ω\\i$","Z-Transform (ZT)"]},{"title":"Integral","tags":[],"sections":["Trigonometry","Integral Rules"]},{"title":"Geometry","tags":[],"sections":[]},{"title":"2D Geometry","tags":[],"sections":["Rectangle"]},{"title":"Trigonometry","tags":["Sinus","Cosinus","Tangens","Arctan"],"sections":[]},{"title":"Statistics","tags":[],"sections":[]},{"title":"Moment","tags":[],"sections":["1. Mean","2. Variance","Central Moments Comparison"]},{"title":"Normal Distribution","tags":[],"sections":[]},{"title":"Probability","tags":[],"sections":["Random Variables","Distribution"]},{"title":"Hypothesis Testing","tags":[],"sections":[]},{"title":"Physics","tags":[],"sections":[]},{"title":"Physical Constants","tags":[],"sections":[]},{"title":"Electromagnetism","tags":[],"sections":[]},{"title":"Electric Field","tags":[],"sections":[]},{"title":"Kirchhoffs's Circuit Laws","tags":[],"sections":["Kirchhoff's current law (KCL)","Kirchhoff's voltage law (KVL)"]},{"title":"Maxwell Equations","tags":[],"sections":[]},{"title":"Mechanics","tags":[],"sections":["Classical Mechanics","Quantum Mechanics"]},{"title":"Mechanical Motion","tags":[],"sections":[]},{"title":"Optics","tags":[],"sections":["Reflection"]},{"title":"Reflection","tags":[],"sections":[]},{"title":"SI Units","tags":[],"sections":["Derived Quantities","Prefix"]},{"title":"Thermodynamics","tags":[],"sections":["Laws of Thermodynamics"]}];

var options = {
  keys: ['title', 'tags'],
  id: 'title'
}
var fuse = new Fuse(index_array, options)



// ====================================================================



var autocomplete = function (options) {
    console.log(JSON.stringify(options.data));
    for (var idx = 0; idx < options.container.length; idx++){
        var doc = document,
            data = options.data,
            contEl = options.container[idx],
            resultNodes = contEl.getElementsByTagName('A'),
            cache = {},
            handlers = {
                'enter': function (e) {
                    if (e.target.nextElementSibling.firstChild && e.target.nextElementSibling.firstChild.hasAttribute('href')) {
                        window.location = e.target.nextElementSibling.firstChild.href;
                    } else if (e.target.parentNode === contEl && contEl.children[0].value) {
                        window.location = options.searchPath + encodeURIComponent(contEl.children[0].value);
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
                }
            };

        function setEls() {
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
            for (var i = 0; i < entries.length; i++) {
                arr.push({
                    'name': entries[i],
                    'tag': entries[i],
                    'group': ""
                });
            }
            return arr;
        }



        // function check(q) {
        //     // var rxFn = function(s) {
        //     //   return '\\b(' + s + ')(.*)';
        //     // },
        //     q = q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\$&");
        //     q = '(?:^|[A-Z]| )' + q.split(/(?=\w|\d|\s)/).join('\.*?');
        //     var rx = new RegExp(q, 'gi'),
        //         arr = [],
        //         i = data.length;   // number of groups


        //     function testTree(obj, parent) {
        //         if (rx.test(obj.name)) {
        //             arr.push({
        //                 'name': obj.name,
        //                 'tag': obj.name,
        //                 'group': parent
        //             });
        //         }
        //         var j = obj.tags.length;
        //         while (j--) {
        //             if (rx.test(obj.tags[j])) {
        //                 arr.push({
        //                     'name': obj.name,
        //                     'tag': obj.tags[j] + ' (' + obj.name + ')',
        //                     'group': parent
        //                 });
        //             }
        //         }
        //         if ("subgroups" in obj) {
        //             var k = obj.subgroups.length
        //             while (k--) {
        //                 testTree(obj.subgroups[k], parent + '/' + obj.name)
        //             }
        //         }
        //     }

        //     while (i--) {
        //         testTree(data[i], "")
        //     }
        //     return arr;
        // }

        function insert(d) {
            var i = options.numResults;
            while (i--) {
                if (d && d[i]) {
                    resultNodes[i].style.display = 'block';
                    resultNodes[i].firstChild.nodeValue = d[i].tag;
                    var uri = d[i].name.toLowerCase();
                    resultNodes[i].href = options.directPath + d[i].group + '/' + uri + '.html';
                    resultNodes[i].href = options.directPath + '/' + uri + '.html';
                    resultNodes[i].firstElementChild.firstChild.nodeValue = d[i].group;
                } else if (!d || !d[i]) {
                    resultNodes[i].style.display = 'none';
                }
            }
        }

        function multiHandler(e) {
            var k = e.keyCode,
                //assign a value to k if the up, down enter keys are pressed, or if the event is an input
                meth = k === 13 ? 'enter' : k === 38 ? 'up' : k === 40 ? 'down' : e.type === 'input' ? 'input' : null;
            //if 'meth' was assigned a value earlier, return the associated function and pass the event to it
            return meth ? handlers[meth](e) : null;

        }

        function changeHandler(e) {
            window.setTimeout(function () {
                return doc.activeElement.parentNode === contEl || doc.activeElement.parentNode === contEl.lastElementChild ? null : insert();
            }, 50);
        }

        setEls();
        contEl.addEventListener('input', multiHandler);
        contEl.addEventListener('keydown', multiHandler);
        contEl.addEventListener('onsubmit', handlers.enter);
        contEl.firstElementChild.addEventListener('change', changeHandler);

    }
};