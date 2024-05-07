import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  const shoppingListLink = screen.getByText(/Shopping List/i);
  const homeLink = screen.getByText(/Home/i);
  const todoListLink = screen.getByText(/Todo List/i);
  
  expect(homeLink).toBeInTheDocument();
  expect(shoppingListLink).toBeInTheDocument();
  expect(todoListLink).toBeInTheDocument();
});

test('clicking on navigation links navigates to the correct page', () => {
  render(<App />);
  
  const shoppingListLink = screen.getByText(/Shopping List/i);
  fireEvent.click(shoppingListLink);
  const shoppingListHeader = screen.getByTestId('shopping-list-header');
  expect(shoppingListHeader).toBeInTheDocument();

  const homeLink = screen.getByText(/Home/i);
  fireEvent.click(homeLink);
  const homeHeader = screen.getByText(/Welcome to the List App!/i);
  expect(homeHeader).toBeInTheDocument();

  const todoListLink = screen.getByText(/Todo List/i);
  fireEvent.click(todoListLink);
  const todoListHeader = screen.getByTestId('todo-list-header');
  expect(todoListHeader).toBeInTheDocument();
});

