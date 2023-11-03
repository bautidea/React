import { ReactNode } from 'react';
// We created this component by typing 'rafce' by using the vscode extension 'ES7+'
// We want to make this component dynamic so we need to use an interface to define the shape of
// props.

// There is a special prop that all components support, that is 'children', with this we can pass
// our text as a child to this component.
// Since we are passing a child that has HTML content, we need to state that the children prop
// has a type of ReactNode class.
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
