/*
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")
ReactDOM.render(element, container)
*/

// node = DOM elements
// element = React elements

const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello"
    }
}

const container = document.getElementById("root")

// create a node using the element type - in this case h1
// then assign all the elements of props to that node
const node = document.createElement(element.type)
node["title"] = element.props.title

// create nodes for the children - we only have
// a string as a child so we create a text node
const text = document.createTextNode("")
text["nodeValue"] = element.props.children

// append the textNode to the h1
// append h1 to the container
node.appendChild(text)
container.appendChild(node)