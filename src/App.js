import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import News from './components/News/News';
import Title from './components/Title/Title';


function App() {
  return (
    <div class="main_container">
      <Aside />
      <main class="main_wrapper">
        <Header />
        <div class="container">
          <Title />
          <News />
        </div>
      </main>
    </div>

  );
}


export default App;
