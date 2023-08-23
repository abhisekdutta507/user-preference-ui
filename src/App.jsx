import { redirect } from 'react-router-dom';

export const appLoader = () => {
  return redirect('/dashboard');
};

export const App = () => {
  return <div>App</div>;
}

export default App;
