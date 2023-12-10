import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './layout/Header';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
        <Header />
        <AppRouter />
    </div>
  );
}

export default App;
