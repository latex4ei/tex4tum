// Fuse (Fuzzy Search Library)
// ====================================================================

const search_index = ['empty'] // index will be filled by jekyll-hook

const options = {
  keys: ['title', 'tags'] // ,
  // id: ['url', 'title']
}
const fuse = new Fuse(search_index, options)

// dynamically load search index
// ====================================================================

// $.getJSON("/assets/js/search_index.json", function(data) {
//     console.log(data);
//     // data is a JavaScript object now. Handle it as such

//     search_index = data;
//     fuse = new Fuse(search_index, options);

// });

const autocomplete = function (options) {
  // console.log(JSON.stringify(options.data));
  for (let idx = 0; idx < options.container.length; idx++) {
    var doc = document
    const { data } = options
    var contEl = options.container[idx]
    var resultNodes = contEl.getElementsByTagName('A')
    var inputEl = options.container[idx].firstElementChild
    var cache = {}
    var handlers = {
      enter (e) {
        if (e.target.nextElementSibling.firstChild && e.target.nextElementSibling.firstChild.style.display != 'none') {
          window.location = e.target.nextElementSibling.firstChild.href
        } else if (e.target.parentNode === contEl && resultNodes[0].style.display == 'none') {
          // todo: deal with no results
          window.location = './404.html'
        }
      },
      up (e) {
        e.preventDefault()
        if (e.target.previousElementSibling && e.target.previousElementSibling.hasAttribute('href')) {
          e.target.previousElementSibling.focus()
        } else if (!e.target.previousElementSibling && e.target.parentNode === contEl.lastElementChild) {
          contEl.children[0].focus()
        }
      },
      down (e) {
        e.preventDefault()
        if (e.target === contEl.children[0]) {
          contEl.lastElementChild.children[0].focus()
        } else if (e.target.nextElementSibling && e.target.nextElementSibling.hasAttribute('href')) {
          e.target.nextElementSibling.focus()
        }
      },
      input (e) {
        const val = e.target.value.trim().replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
        return val ? insert(cacheFn(val, check)) : insert()
      },
      escape (e) {
        inputEl.value = ''
        insert()
        // contEl.firstElementChild.blur(); // should we unfocus?
      }
    }

    function createDropdown () {
      const wrapEl = contEl.querySelectorAll('.ac-results-wrapper')[0]
      let i = options.numResults
      while (i--) {
        const anchorEl = document.createElement('a')
        anchorEl.href = '#'
        anchorEl.innerHTML = 'a<i>i</i>'
        wrapEl.appendChild(anchorEl)
      }
    }

    function cacheFn (q, fn) {
      return cache[q] ? cache[q] : cache[q] = fn(q), cache[q]
    }

    function check (q) { // fuse part
      const entries = fuse.search(q)
      const arr = []
      for (let i = 0; (i < entries.length && i < options.numResults); i++) {
        arr.push({
          name: entries[i].url,
          tag: entries[i].title
        })
      }
      return arr
    }

    function insert (d) {
      let i = options.numResults
      while (i--) {
        if (d && d[i]) {
          resultNodes[i].style.display = 'block'
          resultNodes[i].firstChild.nodeValue = d[i].tag
          const uri = d[i].name.toLowerCase()
          resultNodes[i].href = `${options.directPath}/${uri}` // + '.html';
          resultNodes[i].firstElementChild.firstChild.nodeValue = ''
        } else if (!d || !d[i]) {
          resultNodes[i].style.display = 'none'
        }
      }
    }

    function multiHandler (e) {
      const k = e.keyCode
      // assign a value to k if the up, down enter keys are pressed, or if the event is an input
      const meth = k === 13 ? 'enter' : k === 27 ? 'escape' : k === 38 ? 'up' : k === 40 ? 'down' : e.type === 'input' ? 'input' : null
      // if 'meth' was assigned a value earlier, return the associated function and pass the event to it
      return meth ? handlers[meth](e) : null
    }

    function changeHandler (e) {
      window.setTimeout(() => (doc.activeElement.parentNode === contEl || doc.activeElement.parentNode === contEl.lastElementChild ? null : insert()), 50)
    }

    function globalHandler (e) {
      const { keyCode } = e
      if (keyCode == 9) {
        if (e.target != contEl.children[0]) {
          window.setTimeout(() => { contEl.children[0].focus() }, 0)
          contEl.children[0].focus()
        }
      }
    }

    createDropdown()
    document.addEventListener('keydown', globalHandler)
    contEl.addEventListener('input', multiHandler)
    contEl.addEventListener('keydown', multiHandler)
    contEl.parentNode.addEventListener('submit', (e) => { event.returnValue = false; return false }) // for the form
    contEl.firstElementChild.addEventListener('change', changeHandler)
  }
}
