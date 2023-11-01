import { Fragment } from 'react';

// By convention we pu all of our components in a folder called components.
function ListGroup() {
  // By using Bootstrap we return a styled 'ListGroup'
  return (
    // If we would like to add a another element we would get a compilation error, because
    // in react a component cannot return more than one element.
    // To solve this problem we have a couple of different ways
    // 1- Wrap everything into a div, But we are adding one extra element in the DOM.
    // 2- Better is to use a fragment, when this component gets rendered on the screen we wont have
    //    an additional element like a div.
    //* We can replace Fragment with <>, if we do this theres no need of importing Fragment component
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </Fragment>
  );
}

export default ListGroup;
