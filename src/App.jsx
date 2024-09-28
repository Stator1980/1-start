import './App.css';
import Button from './components/Button/Button';
import CartFilm from './components/CartFilm/CartFilm';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import ListCartFilm from './components/ListCartFilm/ListCartFilm';
import NavBar from './components/NavBar/NavBar';
import Paragraf from './components/Paragraf/Paragraf';
import { data_local } from '../data.js';
import FormLogin from './components/FormLogin/FormLogin.jsx';
import { UserContexProvider } from './contex/user.contex.jsx';

function App() {
  const data = data_local;

  return (
    <UserContexProvider>
      <div className="navbar-top">
        <NavBar />
      </div>

      <FormLogin />

      <div className="search">
        <Header>Поиск</Header>
        <Paragraf>
          Введите название фильма, сериала или мультфильма для поиска и
          добавления в избранное.
        </Paragraf>
        <div className="search-wrapper">
          <Input
            placeholder="Введите название"
            className="search-form"
            isIcon="yes!"
          />
          <Button appearence="small">Искать</Button>
        </div>
      </div>

      <ListCartFilm>
        {data.map(p => (
          <CartFilm
            key={p.id}
            image={p.poster}
            nameFilm={p.nameFilm}
          ></CartFilm>
        ))}
      </ListCartFilm>
    </UserContexProvider>
  );
}

export default App;
