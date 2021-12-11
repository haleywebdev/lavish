import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes><Route path='/' /></Routes>

      <h1>Hey.</h1>
    </BrowserRouter>
  );
}

export default App;
