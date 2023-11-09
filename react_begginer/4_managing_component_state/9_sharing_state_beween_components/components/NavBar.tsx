import React from 'react';

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  cartItemsCount: number;
  loadedExpenses: Expenses[];
}
const NavBar = ({ cartItemsCount, loadedExpenses }: Props) => {
  return <div>NavBar: {cartItemsCount}</div>;
};

export default NavBar;
