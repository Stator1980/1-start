import './App.css';
import Button from './components/Button/Button';
import CartFilm from './components/CartFilm/CartFilm';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import ListCartFilm from './components/ListCartFilm/ListCartFilm';
import NavBar from './components/NavBar/NavBar';
import Paragraf from './components/Paragraf/Paragraf';
import { data_local } from '../data.js';
import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';
import FormLogin from './components/FormLogin/FormLogin.jsx';

function App() {
  const data = data_local;

  const [profile, setProfile] = useLocalStorage('profile');

  const addProfile = profile => {
    setProfile(profile);
  };

  const logOut = () => {
    console.log('Клик');
    profile.isLogined = false;
    setProfile(profile);
  };

  return (
    <>
      <div className="navbar-top">
        <NavBar profile={profile} logOut={logOut}></NavBar>
      </div>

      <FormLogin onSubmit={addProfile} data={profile}></FormLogin>

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
