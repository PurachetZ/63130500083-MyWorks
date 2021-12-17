export let createEl = (elName, attributes) => {
  let el = document.createElement(elName);
  for (const attr in attributes) {
    if (attr == 'inner') {
      el.innerHTML = attributes[attr];
    } 
    else {
      el.setAttribute(attr, attributes[attr]);
    }
  }
  return el;
}

export let setAttrEle = (ele, attributes) => {
  for(const attr in attributes){
    if(attr == 'inner'){
      ele.innerHTML = attributes[attr];
    }
    else if(attr == '+Class'){
      ele.classList.add(...attributes[attr]);
    }
    else if(attr == '-Class'){
      ele.classList.remove(...attributes[attr]);
    }
    else{
      ele.setAttribute(attr, attributes[attr]);
    }
  }
}

//ใช้ append แทน
// export let appendManyChilds = (parent, ...childs) => {
//   childs.forEach((e) => parent.appendChild(e));
// }

export let $ = ( id ) => { return document.getElementById( id ); };

export async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  const text = await response.text();
  const newLine = text.split('\n');

  return text;
}
