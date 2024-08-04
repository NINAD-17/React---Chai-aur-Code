// step 4: 
function customRender(reactElement, container) {
    /*
        const domElement = document.createElement(reactElement.type);
        domElement.innerHTML = reactElement.children;
        domElement.setAttribute('href', reactElement.props.href);
        domElement.setAttribute('target', reactElement.props.target);

        container.appendChild(domElement);
    */

    // loop based code. Because there can be many props so instead of adding manually add it by loops
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props) {
        if(prop === 'children') continue; // this condition is for old react where props also contain childrens
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

// step 2:
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


// step 1: 
const mainContainer = document.querySelector("#root");

// step 3: 
customRender(reactElement, mainContainer);