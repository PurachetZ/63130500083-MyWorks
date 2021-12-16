export let createEl = (elName, attributes) => {
  let el = document.createElement(elName);
  for (const attr in attributes) {
    if (attr == 'inner') {
      el.innerHTML = attributes[attr];
    } 
    else if(attr == 'classL'){
      el.classList.add(attributes[attr])
    }
    else {
      el.setAttribute(attr, attributes[attr]);
    }
  }
  return el;
}

// export let appendManyChilds = (parent, ...childs) => {
//   childs.forEach((e) => parent.appendChild(e));
// }

export let $ = ( id ) => { return document.getElementById( id ); };