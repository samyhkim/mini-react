// For now, we only care about adding stuff to the DOM.
// We'll handle updating and deleting later.

// Start by creating the DOM node using the element type,
// and then append the new node to the container.
function render(element, container) {
    // Create the DOM node using the element type,
    // then append the new node to the container.
    const dom = element.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type)

    // Assign the element props to the node.
    const isProperty = key => key !== "children"
    Object.keys(element.props).filter(isProperty).forEach(name => {
        dom[name] = element.props[name]
    })

    // Recursively do the same for each child.
    element.props.children.forEach(child =>
        render(child, dom)
    )
    container.appendChild(dom)
}
  ​
const Didact = {
    createElement,
    render,
}
  ​
/** @jsx Didact.createElement */
const element = (
<div id="foo">
    <a>bar</a>
    <b />
</div>
)
const container = document.getElementById("root")
Didact.render(element, container)