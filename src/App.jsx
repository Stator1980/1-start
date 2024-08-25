import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Paragraf from './components/Paragraf/Paragraf';

function App() {
  return (
    <>
      <div className="search">
        <Header>Поиск</Header>
        <Paragraf>
          Введите название фильма, сериала или мультфильма для поиска и
          добавления в избранное.
        </Paragraf>
        <Button>Искать</Button>
      </div>
    </>
  );
}

export default App;
