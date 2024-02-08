import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  ) 
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const anotherElement = (
  <a href="http://google.com" target='_blank' rel="noreferrer">Visit Now!</a>
)

const anotherUser = "Someone"; // Global variable to inject it in reactElement2

// Making element with the help of React
// React.createElement takes object as a input and it's syntax is predefined.
const reactElement2 = React.createElement(
  'a', // 1st parameter = tag
  {href: "http://google.com", target:'_blank', rel:"noreferrer"}, // 2nd parameter = Attributes
  "Click me to visit Google", // 3rd parameter = Direct Text
  anotherUser // 4th parameter = Evaluated Expressions
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // ReactElement() // As it's not a function, we can't call it as a function
  // <ReactElement /> // This also expecting a function so it will also not work
  
  // ReactElement // As it's an object we called it as ReactElement
  // This code is correct but it will not work because may be there key names of object are not matching with parameters that are expected by vite react

  // anotherElement

  reactElement2 // This code will work because we create that element with react's createElement function

  // <App />
)
