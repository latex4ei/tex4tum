/* Auto-Tabbox – Find <div class="tabbox"> and make headings

*/


var tabstyle = `
.tabs {
  display: flex;
  flex-wrap: wrap; 
  background: linear-gradient(0deg, var(--cbg) 1rem, var(--clight) 0%);
  border: var(--border); border-radius: 5px;
  padding-bottom: 0.5em;
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
  z-index: 10;
  padding: 0 1rem;
  background: var(--cbg);
  border-top: var(--border);
}
.tabs input[type="radio"]:not(:checked) + label:hover { filter: brightness(90%); }
.tabs input[type="radio"] { display: none; }
.tabs input[type="radio"]:checked + label {   
  border: var(--border); border-bottom: 0px;  
  background: var(--cbg); z-index: 11; 
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
		// content = box.querySelectorAll('')
		// htag = box.firstElementChild.firstElementChild.tagName.toLowerCase()
		hs = box.querySelectorAll(htag)
		box.classList.add('tabs')
		for (var i = 0; i < hs.length; i++){
			label=hs[i].innerText.replace(/\W/g,'');
			id=`tab-${numBoxes}${label}`
			hs[i].parentElement.classList.add("tab")
			hs[i].parentElement.insertAdjacentHTML( 'beforebegin', `<input type="radio" name="tabs${numBoxes}" id="${id}"><label for="${id}">${hs[i].innerText}</label>` );
		}
		hs[0].parentElement.previousElementSibling.previousElementSibling.setAttribute("checked", "checked");
		// pullHeadingOut(sec.firstElementChild)
	}
}

addTabStyle()
makeTabboxes()
