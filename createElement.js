/*
const element = React.createElement(
  "div",
  { id: "foo" },
  React.createElement("a", null, "bar"),
  React.createElement("b")
)
const container = document.getElementById("root")
ReactDOM.render(element, container)
*/

/*
An element is an object with type and props.
The only thing our funciton needs to do is
create that object.

const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
*/

// Tells Babel to use the function we define.
/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
const container = document.getElementById("root");
ReactDOM.render(element, container);

/*
Use spread operator for the props and rest
paramater syntax for the children: ensures
that children prop will always be an array.

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}

createElement("div") returns:
{
    "type": "div",
    "props": {"children": []}
}

createElement("div", null, a) returns:
{
    "type": "div",
    "props": {"children": [a]}
}

createElement("div", null, a, b) returns:
{
    "type": "div",
    "props": {"children": [a, b]}
}
*/

// What if the children array contains primitive values
// like strings or numbers?
// Wrap everything that isn't an object inside its own
// element and create a unique type for them: TEXT_ELEMENT.
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        typeof child === "object" ? child : createTextElement(child);
      }),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
