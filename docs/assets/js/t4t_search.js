
// Fuse (Fuzzy Search Library)
// ====================================================================


var search_index = [{"url":"actuator","title":"Actuator","tags":[],"sections":[]},{"url":"servo","title":"Servo Motor","tags":["motor","pwm"],"sections":["Colored Wires","Control","References"]},{"url":"bus","title":"Bus","tags":[],"sections":["References"]},{"url":"i2c","title":"Inter-Integrated Circuit (I2C)","tags":["bus","I2C","SDA","SCK"],"sections":["Specification","Protocol","References"]},{"url":"spi","title":"Serial Peripheral Interface (SPI)","tags":["bus","SPI","MOSI","MISO"],"sections":["Specification","Protocol"]},{"url":"usart","title":"Universal Asynchronous Receiver Transmitter (UART)","tags":["bus","UART","RX","TX","RTS","CTS"],"sections":["Specification","Protocol"]},{"url":"usb","title":"Universal Serial Bus (USB)","tags":["USB","Type-C"],"sections":["Overview","USB 2.0","USB 3.0"]},{"url":"cmos","title":"CMOS","tags":["mosfet","inverter","nand","nor","not"],"sections":["Parameters","Inverter Power"]},{"url":"capacitor","title":"Capacitor","tags":["elko,","farad"],"sections":[]},{"url":"component","title":"Component","tags":[],"sections":["Types of Components","Two Terminals","Three Terminal","More Terminal"]},{"url":"diode","title":"Diode","tags":["shottky,","zener,","led"],"sections":["Shottky Diode","Zener Diode","Light Emitting Diode (LED)"]},{"url":"inductor","title":"Inductor","tags":["coil","henry"],"sections":[]},{"url":"op-amp","title":"Operational Amplifier","tags":["opamp","non-inverting","schmitt trigger"],"sections":["Voltage Follower/Buffer","Non-Inverting Amplifier","Inverting Amplifier","Differential Amplifier","Schmitt-Trigger"]},{"url":"resistor","title":"Resistor","tags":["ohm"],"sections":["Color Codes","References"]},{"url":"transistor","title":"Transistor","tags":["bipolar","bjt","mosfet"],"sections":["Bipolar Transistor (BJT)","MOS-FET"]},{"url":"computer","title":"Computer","tags":[],"sections":[]},{"url":"psu","title":"Power Supply Unit (PSU)","tags":["Netzteil"],"sections":["Color Codes of ATX","Efficiency Rating (80 PLUS)","References"]},{"url":"ram","title":"Random Access Memory (RAM)","tags":["RAM"],"sections":["DRAM","SRAM"]},{"url":"dsp","title":"Signal Processing","tags":[],"sections":[]},{"url":"filter","title":"Digital Filter","tags":["FIR","IIR"],"sections":["FIR Filter","IIR Filter"]},{"url":"kalman-filter","title":"Kalman Filter","tags":[],"sections":["Working Principle","Defining the Model","Calculations","Extended Kalman Filter","Sensor Fusion","References"]},{"url":"low-pass","title":"Low Pass Filter","tags":[],"sections":["Filter Response:"]},{"url":"modulation","title":"Modulation","tags":[],"sections":["Analog modulation","Digital modulation","References"]},{"url":"signal","title":"Signal","tags":[],"sections":["Signal Categories","Signals and Spectrum"]},{"url":"electronics","title":"Electronics","tags":[],"sections":[]},{"url":"glossary","title":"Glossary","tags":[],"sections":[]},{"url":"index","title":"Tex4TUM","tags":[],"sections":["Features"]},{"url":"aes","title":"Advanced Encryption Standard (AES)","tags":[],"sections":["Algorithm","Modes of Operation","Test Vectors","References"]},{"url":"algorithm","title":"Algorithm","tags":[],"sections":[]},{"url":"rsa","title":"RSA","tags":[],"sections":["Principle","Attack Model","homomorphic multiplication","References"]},{"url":"datastructures","title":"Datastructures","tags":[],"sections":["Primitive Data Structures","Container (Advanced abstract data types)"]},{"url":"jpeg","title":"JPEG","tags":[],"sections":["Encoding Process","Decoding Process"]},{"url":"uri","title":"Uniform Resource Identifier (URI)","tags":["URI","URL","URN"],"sections":["Syntax","URI Parser","Escape Characters","Relationship to URN and URL","References"]},{"url":"utf8","title":"UTF-8","tags":[],"sections":["Encoding Converter","Facts and Figures","Format"]},{"url":"vcf","title":"vCard","tags":["vcf"],"sections":["Facts and Figures"]},{"url":"informatics","title":"Information Theory","tags":[],"sections":[]},{"url":"ada","title":"Ada","tags":[],"sections":["Data Types","References"]},{"url":"bash","title":"Bash","tags":[],"sections":["Data Structures","Control Flow","Input / Output"]},{"url":"c","title":"C","tags":[],"sections":["Operations","Best practices"]},{"url":"cpp","title":"C++","tags":["cpp"],"sections":["Guidlines","Differences to C","C++ Standard Library","Popular 3rd Party Libraries"]},{"url":"css","title":"Cascading Style Sheets (CSS)","tags":[],"sections":["Box Model","Selectors","Properties","Units","Popular Frameworks","References"]},{"url":"doxygen","title":"DoxyGen","tags":[],"sections":["File header","Function annotations","Member Annotation"]},{"url":"go","title":"Go","tags":[],"sections":["Features","Overview","References"]},{"url":"language","title":"Language","tags":[],"sections":["Chomsky-Hierarchy","Backus–Naur Form (BNF)"]},{"url":"markdown","title":"Markdown","tags":[],"sections":["Basic Formatting","Level 2 Heading","Variants","References"]},{"url":"matlab","title":"Matlab","tags":[],"sections":[]},{"url":"natural-language","title":"Natural Language","tags":[],"sections":["Natural Language Processing"]},{"url":"python","title":"Python","tags":[],"sections":["Data Types","Operators","Classes"]},{"url":"regular-expressions","title":"Regular Expressions","tags":[],"sections":["Applet"]},{"url":"ruby","title":"Ruby","tags":[],"sections":["Data Types","Classes","References"]},{"url":"rust","title":"Rust","tags":[],"sections":["Types","Differences to common languages","Features","References"]},{"url":"6lowpan","title":"6LoWPAN","tags":[],"sections":["Header Format","Compression Schemes","References"]},{"url":"coap","title":"Constrained Application Protocol (CoAP)","tags":[],"sections":["Header Format:","Features","References"]},{"url":"dns","title":"Domain Name System (DNS)","tags":[],"sections":["Public DNS","Resource Record Format","Resource Record Types","Rules for setting up a DNS entry","Propagation Time","DNS Softwre","References"]},{"url":"http","title":"HTTP","tags":[],"sections":["Status Codes"]},{"url":"ip","title":"Internet Protocol","tags":["address","IPv4","IPv6"],"sections":["IP-Address","Header Format","IP protocol numbers","References"]},{"url":"mac","title":"Media Access Control","tags":[],"sections":[]},{"url":"mqtt","title":"Message Queue Telemetry Transport (MQTT)","tags":[],"sections":["Features","Methods","Publish/Subscribe","Protocol","References"]},{"url":"network","title":"Network","tags":[],"sections":[]},{"url":"osi","title":"Open Systems Interconnection model (OSI)","tags":[],"sections":["Application Layer","Presentation","Session","Transport Layer","Network Layer","Link Layer","Physical Layer"]},{"url":"rpl","title":"RPL","tags":[],"sections":["DODAG","Mechanisms","References"]},{"url":"tcp","title":"TCP","tags":["port"],"sections":["Header Format","Ports","References"]},{"url":"udp","title":"UDP","tags":[],"sections":["Header Structure","References"]},{"url":"zigbee","title":"ZigBee","tags":[],"sections":["Stack","Devices","Topologies","Security","Joining","Rounting","Ad-hoc On-demand Distance Vector (AODV) routing"]},{"url":"cryptography","title":"Cryptography","tags":[],"sections":["Encryption","Cryptanalysis","Cryptographic primitives","Cryptographic properties"]},{"url":"hash","title":"Hash Function","tags":[],"sections":["Properties","Cryptographic Hash Functions","Attributes","Algorithms","Attacks"]},{"url":"sha-2","title":"Secure Hash Algorithm 2 (SHA-2)","tags":[],"sections":["Working Principle","SHA2-256","Test Vectors","References"]},{"url":"sha-3","title":"Secure Hash Algorithm 3 (SHA-3)","tags":[],"sections":["Working Principle","References"]},{"url":"multivariate-cryptography","title":"Multivariate Cryptography","tags":[],"sections":["Properties","The Multivariate Quadratic (MQ) System","Construction","Implementations","References"]},{"url":"security","title":"Security","tags":["authentication","encryption","integrity"],"sections":["Security Properties","Types of Attacks","Crypto Primitives"]},{"url":"signature","title":"Signature","tags":[],"sections":["Working Principles and Implementations","Usage"]},{"url":"zksnark","title":"zkSNARK","tags":[],"sections":["Scenario","Process","Abbreviation","From interactive to non-interactive"]},{"url":"float","title":"Floating Point Number","tags":[],"sections":["Special Numbers","Exceptions","Subnormal Numbers","Not-A-Number (NaN)"]},{"url":"numbers","title":"Number Converter","tags":[],"sections":["Memory Inspection","Data Types","2-Complement"]},{"url":"oop","title":"Object Oriented Programming (OOP)","tags":[],"sections":["Concepts","Likov Substitution Principle"]},{"url":"petri-net","title":"Petri Net","tags":[],"sections":["Types","Execution Rules","Properties","Context"]},{"url":"gdb","title":"Gnu Debugger (GDB)","tags":[],"sections":["Usage","Commands","References"]},{"url":"git","title":"Git","tags":[],"sections":["Terms","Usage","Commands"]},{"url":"tools","title":"Tools","tags":[],"sections":[]},{"url":"algebra","title":"Algebra","tags":[],"sections":[]},{"url":"bool","title":"Boolean Algebra","tags":[],"sections":[]},{"url":"complex-number","title":"Complex Numbers","tags":["Imaginary Unit"],"sections":["Rules"]},{"url":"exp-log","title":"Exponential and Logarithm","tags":[],"sections":["Exponential Function","Logarithm"]},{"url":"matrix","title":"Matrix","tags":[],"sections":["Calculations","Quadratic Matrices","Special 2×2 Matrices"]},{"url":"vector","title":"Vector Space","tags":[],"sections":[]},{"url":"analysis","title":"Analysis","tags":[],"sections":["Functions","Funktionen $f:\mathbb D \rightarrow \mathbb W,\ x \mapsto f(x)$","Asymptoten und Grenzwerte von $f$"]},{"url":"convolution","title":"Convolution","tags":["Faltung"],"sections":["Properties","Refrences"]},{"url":"curve","title":"Curve","tags":["line kurve"],"sections":["Properties","Special points","Bogenlänge"]},{"url":"differential-equation","title":"Differential Equation","tags":[],"sections":["Differential Equation of n-th Order","Lösen von homogenen DGLs 2. Ordnung","Lösung für inhomogene DGL"]},{"url":"differential-operators","title":"Differential Operators","tags":["gradient","rotation","divergence","laplace"],"sections":["Gradient","Rotation","Divergenz","Laplace","References"]},{"url":"frequency-analysis","title":"Frequency Analysis","tags":[],"sections":["Fourierreihe","Fouriertransformation (FT)","Laplaceransformation (LT) $\cx s = \alpha + \omega\i$","Z-Transform (ZT)"]},{"url":"integral","title":"Integral","tags":[],"sections":["Common Integrals","Trigonometry","Line Integrals","Surface Integrals","Integral Rules"]},{"url":"series","title":"Series","tags":["sum mean"],"sections":["Arithmetic Sum","Geometric Sum","Exponential row","Taylorpolynom","Taylor series"]},{"url":"geometry","title":"Geometry","tags":["strahlensatz"],"sections":["Intercept Theorem"]},{"url":"trigonometry","title":"Trigonometry","tags":["Sinus","Cosinus","Tangens","Arctan"],"sections":["Unit Circle","Sin, Cos, Tan","Hyperboles sinh, cosh, tanh","Cardinal Sinus"]},{"url":"math","title":"Math","tags":[],"sections":[]},{"url":"combinatoric","title":"Combinatorics","tags":["permutation","combination","variation"],"sections":["Scenarios"]},{"url":"binomial-distribution","title":"Binomial Distribution","tags":[],"sections":["Probability Mass Function","References"]},{"url":"normal-distribution","title":"Normal Distribution","tags":[],"sections":["Probability Density","Properties"]},{"url":"moment","title":"Moment","tags":[],"sections":["Mean ($n = 1$)","Variance","Central Moments Comparison"]},{"url":"probability","title":"Probability Theory","tags":[],"sections":["Terms","Conditional Probabilty","Random Variables","Distribution"]},{"url":"statistics","title":"Statistics","tags":[],"sections":[]},{"url":"testing","title":"Hypothesis Testing","tags":[],"sections":["Parameters and Terms","Power of a test (1 − β)","Mean Tests"]},{"url":"materials","title":"Materials","tags":[],"sections":["Clausius–Mossotti relation"]},{"url":"constants","title":"Physical Constants","tags":[],"sections":[]},{"url":"electric-field","title":"Electric Field","tags":[],"sections":["Coulomb's law"]},{"url":"electromagnetism","title":"Electromagnetism","tags":[],"sections":[]},{"url":"kirchhoff","title":"Kirchhoffs's Circuit Laws","tags":[],"sections":["Kirchhoff's current law (KCL)","Kirchhoff's voltage law (KVL)"]},{"url":"maxwell","title":"Maxwell Equations","tags":[],"sections":["Gauss's law"]},{"url":"mechanics","title":"Mechanics","tags":[],"sections":["Classical Mechanics","Quantum Mechanics"]},{"url":"motion","title":"Mechanical Motion","tags":["Rotation","Translation"],"sections":["Newton's Laws of Motion","Classical Mechanics"]},{"url":"optic","title":"Optics","tags":[],"sections":["Reflection"]},{"url":"reflection","title":"Reflection and Refraction","tags":[],"sections":[]},{"url":"physics","title":"Physics","tags":[],"sections":[]},{"url":"rounding","title":"Rounding","tags":[],"sections":["Exact and Approximate Numbers","Resolution, Accuracy, Precision","Significant Figures and Decimal Places","Calculate with rounded numbers","Scientific Notation of Numbers","Numerical Calculation (Floats)","References"]},{"url":"si-units","title":"SI Units","tags":[],"sections":["Derived Quantities","Prefix"]},{"url":"thermodynamics","title":"Thermodynamics","tags":[],"sections":["Laws of Thermodynamics"]}]

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
                    resultNodes[i].href = options.directPath + '/' + uri // + '.html';
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