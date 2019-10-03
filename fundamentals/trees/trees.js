// Our representation of the DOM as a JS object.
const root = document.getElementById('root');

const ourTree = {

  div: {
    style: [
      'background-color:red',
      'width',
      'min-height',
      'border',
    ],
    redBoxChildren: ['BUTTON', 'DIV', 'SPAN']
  }
  


  // div: {
    //   header: "Hello There",
    //   button: "Click me plz",
    //   div: {
    //     header: "I'm a green box",
    //     div: {
    //       div: {},
    //       div: {},
    //       div: {}
    //     }
    //   }
    // }

};

const DOMRenderer = {
  append: (node, child) => node.appendChild(child),
  create: type => document.createElement(type),
  createText: str => document.createTextNode(str),
  remove: el => el.parentNode.removeChild(el),
};

// The function that uses the rendering API object above (DOMRenderer) to build the page as expected!
const treeMaker = (soil, tree, renderer) => {
  // redbox DIV
  const rootOfTree = Object.keys(tree)[0];
  // console.log(rootOfTree);
  const createdRootOfTree = renderer.create(rootOfTree);
  console.log("Created the Box", createdRootOfTree);

  const redBoxChildren = tree.div.redBoxChildren;
  // console.log(redBoxChildren[0]);
  const rbButton = renderer.create(redBoxChildren[0]);
  // console.log(rbButton);
  const rbString = "Click Me Please";
  
  const rbStringCreated = renderer.createText(rbString);
  const renderedText = renderer.append(rbButton, rbStringCreated);
  const rbSpan = renderer.create(redBoxChildren[2]);


  console.log("red box span with button", rbSpan);
  
  // Adding String
  
  const RedString = "Hello There";
  const RedStringCreated = renderer.createText(RedString);
  console.log("created red string", RedStringCreated);

  const rbButtonSpan = renderer.append(rbSpan, rbButton);


  const rbSpanTwo = renderer.create(redBoxChildren[2]);
  const secondSpanAppended = renderer.append(rbSpanTwo, RedStringCreated);
  const rbStringSpan = renderer.append(createdRootOfTree, secondSpanAppended);


  createdRootOfTree.style['background-color'] = 'red';
  createdRootOfTree.style.height = '100px';
  createdRootOfTree.style.width = '100%';

  renderer.append(soil, createdRootOfTree);
};

// DONT TOUCH BELOW
treeMaker(root, ourTree, DOMRenderer);

window.treeMaker = treeMaker;
window.ourTree = ourTree;
window.DOMRenderer = DOMRenderer;
