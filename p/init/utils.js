export let createEl = (eleName, attributes) => {
  let ele = document.createElement(eleName);
  for (const attr in attributes) {
    if (attr == 'inner') {
      ele.innerHTML = attributes[attr];
    }
    else if(attr == 'href') {
      ele.href = attributes[attr];
    }
    else {
      ele.setAttribute(attr, attributes[attr]);
    }
  }
  return ele;
}

export let setAttrEle = (ele, attributes) => {
  for(const attr in attributes){
    if(attr == 'inner'){
      ele.innerHTML = attributes[attr];
    }
    else if(attr == 'href') {
      ele.href = attributes[attr];
    }
    else if(attr == 'classAdd'){
      ele.classList.add(...attributes[attr]);
    }
    else if(attr == 'classDel'){
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
