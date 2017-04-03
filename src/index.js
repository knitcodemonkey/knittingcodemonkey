import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';


ReactDOM.render(
  <main className="flex flex-column min-vh-100 w-100 justify-center">
    <header className="flex flex-row white content-center">
      <Header />
    </header>
    <section className="w-100 flex-auto">
      <App />
    </section>
    <footer className="w-100 bg-light-gray">
      <Footer />
    </footer>
  </main>,
  document.getElementById('root')
);
