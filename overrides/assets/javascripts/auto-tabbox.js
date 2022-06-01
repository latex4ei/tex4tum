/* Auto-Tabbox – Find <div class="tabbox"> and make headings

*/


var tabstyle = `
.tabs {
  --border: 1px solid var(--cmed);
  --cfg:   #433;    --cbg:    #fff;
  --cdark: #888;    --clight: #f5f6f7;
  --cmed:  #d1d1d1;
  --clink: #07c;
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(0deg, var(--cbg) 1rem, var(--clight) 0%);
  border: var(--border); border-radius: 5px;
}
.tabs label {
  order: 1; /*Put the labels first*/
  display: block;
  cursor: pointer;
  padding: .5rem .8rem;
  margin: .5rem 0 -1px;
  border-radius: 5px 5px 0 0;
  color: var(--clink);
  background: var(--clight);
}
.tabs label:first-of-type{ margin-left: 1rem; }
.tabs .tab {
  order: 99; /*Put the tabs last*/
  flex-grow: 1;
  width: 100%;
  display: none;
  z-index: 2;
  padding: 0 1rem;
  background: var(--cbg);
  border-top: var(--border);
}
.tabs input[type="radio"]:not(:checked) + label:hover { filter: brightness(90%); }
.tabs input[type="radio"] { display: none; }
.tabs input[type="radio"]:checked + label {
  border: var(--border); border-bottom: 0px;
  background: var(--cbg); z-index: 3;
}
.tabs input[type="radio"]:checked + label + .tab { display: block; }

@media (max-width: 45em) {
  .tabs .tab, .tabs label { order: initial; }
  .tabs label { width: 100%; margin: 0 0 -1px !important; }
}
@media print { .tabs label + .tab { display: block; } .tabs label { display: none; } }
`

function addTabStyle(){
	style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = tabstyle;
    document.head.appendChild(style);
}

var numBoxes=0

function makeTabboxes(){
  // secs = document.querySelectorAll('section[id=tabbox]')
  boxes = document.querySelectorAll('section.tabbox, div.tabbox')
  for (const box of boxes){
    numBoxes++;
    if (!box.firstElementChild){ continue; }
    htag = box.querySelector("h1, h2, h3, h4, h5, h6").tagName.toLowerCase()
    hs = box.querySelectorAll(htag)

    if (hs[0].parentElement.classList.contains('tabbox')){  // create divs
      children = box.children
      oDiv = document.createElement('div')
      divs = []
      for (var i = hs.length-1; i >= 0; i--){
        div = oDiv.cloneNode(false)
        next = hs[i]
        while (next){
          curr = next
          next = next.nextSibling
          div.appendChild(curr);
        }
        divs.push(div)
      }
      box.innerHTML = '';
      for (const div of divs.reverse()){ // move divs to tabbox
        box.appendChild(div)
      }
    }
    box.classList.add('tabs')
    hs = box.querySelectorAll(htag)
    for (var i = 0; i < hs.length; i++){
      label=hs[i].innerText.replace(/\W/g,'');
      id=`tab-${numBoxes}${label}`
      hs[i].parentElement.classList.add("tab")
      hs[i].parentElement.insertAdjacentHTML( 'beforebegin', `<input type="radio" name="tabs${numBoxes}" id="${id}"><label for="${id}">${hs[i].innerText.replace(/#$/, '')}</label>` );
      hs[i].outerHTML = '';// remove heading
    }
    box.firstElementChild.setAttribute("checked", "checked");
    // hs[0].parentElement.previousElementSibling.previousElementSibling
    // pullHeadingOut(sec.firstElementChild)
	}
}

addTabStyle()
makeTabboxes()
