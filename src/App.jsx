import './App.css';
import Button from './components/Button/Button';
import CartFilm from './components/CartFilm/CartFilm';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import ListCartFilm from './components/ListCartFilm/ListCartFilm';
import NavBar from './components/NavBar/NavBar';
import Paragraf from './components/Paragraf/Paragraf';

function App() {
  const data = [
    {
      nameFilm: 'Black Widow',
      rating: 324,
    },
    {
      nameFilm: 'Shang Chi',
      rating: 124,
    },
    {
      nameFilm: 'Loki',
      rating: 235,
    },
    {
      nameFilm: 'How I Met Your Mother',
      rating: 123,
    },
    {
      nameFilm: 'Money Heist',
      rating: 8125,
    },
    {
      nameFilm: 'Friends',
      rating: 123,
    },
    {
      nameFilm: 'The Big Bang Theory',
      rating: 554,
    },
    {
      nameFilm: 'Two And a Half Men',
      rating: 456,
    },
  ];

  const onClick = () => {
    console.log('Клик');
  };

  return (
    <>
      <div className="elipse5"></div>
      <div className="vector3"></div>
      <div className="elipse6"></div>
      <div className="vector4"></div>
      <div className="navbar-top">
        <NavBar />
      </div>
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
            isIcon="false"
          />
          <Button onClick={onClick}>Искать</Button>
        </div>
      </div>

      <ListCartFilm>
        <CartFilm image="card1.png" nameFilm={data[0].nameFilm}></CartFilm>
        <CartFilm image="card2.png" nameFilm={data[1].nameFilm}></CartFilm>
        <CartFilm image="card3.png" nameFilm={data[2].nameFilm}></CartFilm>
        <CartFilm image="card4.png" nameFilm={data[3].nameFilm}></CartFilm>
        <CartFilm image="card5.png" nameFilm={data[4].nameFilm}></CartFilm>
        <CartFilm image="card6.png" nameFilm={data[5].nameFilm}></CartFilm>
        <CartFilm image="card7.png" nameFilm={data[6].nameFilm}></CartFilm>
        <CartFilm image="card8.png" nameFilm={data[7].nameFilm}></CartFilm>
      </ListCartFilm>
    </>
  );
}

export default App;
