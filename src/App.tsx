import './App.css';
import { Coins } from './components/Coins/Coins';
import { Layout } from './components/Layout/Layout';
import { NavBar } from './components/Layout/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Layout>
        <Coins />
      </Layout>
    </div>
  );
}

export default App;
