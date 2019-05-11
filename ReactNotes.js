class ShoppingList extends React.Component {
  // ShoppingList is a React component class - a component takes in parameters (props)
  render() {
    // render() method returns a description of what you want to see on the screen
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
// <div /> syntax transformed at production time to React.createElement("div");
React.createElement(
  "div",
  {
    className: "shopping-list"
  },
  React.createElement("h1", null, "Shopping List for ", props.name),
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Instagram"),
    React.createElement("li", null, "WhatsApp"),
    React.createElement("li", null, "Oculus")
  )
);
// Above code is same as the first one.
// We can now reference the whole shopping list by writing <Shopping List />
// Each React component is encapsulated and can operate independently

// To make components "remember" things, components use "state" by setting this.state in their constructors
// this.state should be considered as private to a React component that it's defined in

// In JavaScript classes, you need to always call super when defining the constructor of a subclass.
// All React component classes that have a constructor should start it with a super(props) call.

// To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component.
// The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

// Don't mutate data directly

// function components only contain a render method and don't have their own state
// Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered.
