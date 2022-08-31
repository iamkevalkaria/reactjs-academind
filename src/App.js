import Expenses from './components/expenses/Expenses';
import { Fragment } from 'react';
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insuarance',
      amount: 288.5,
      date: new Date(2022, 5, 14),
    },
    {
      id: 'e2',
      title: 'Car Insuarance',
      amount: 288.5,
      date: new Date(2022, 6, 10),
    },
    {
      id: 'e3',
      title: 'Car Insuarance',
      amount: 288.5,
      date: new Date(2022, 15, 25),
    },
  ];
  return (
    <Fragment>
      <h1>Hi</h1>
      <Expenses items={expenses} />
    </Fragment>
  );
};

export default App;
