import Quote from './component/quote.component';
import './App.css';
import img_1 from './284873_original.jpg';
import img_2 from './kadr-iz-filma-sluzhebnyj-roman-1977-5.jpeg';
import img_3 from './original.jpg';
import img_4 from './3812c15989a07180f8e0ce597d9c1f31.jpg';


const films = [
  {
    quote: '— … не всё потеряно и жизнь не кончена, пока у тебя есть хорошая история и друг, которому её можно рассказать.',
    name: 'Легенда о пианисте',
    photo: [img_1]
  },
  {
    quote: '— Как вам сапоги? — Очень вызывающие, я бы такие не взяла. — Значит, хорошие сапоги, надо брать.',
    name: 'Служебный роман',
    photo: [img_2]
  },
  {
    quote: 'Если человек искренне раскаивается в своих грехах, он может вернуться в то время, которое было самым счастливым для него, и остаться там навсегда. Может это и есть рай.',
    name: 'Зеленая миля',
    photo: [img_3]
  },
  {
    quote: 'Страх делает тебя пленником. Надежда дает тебе свободу.',
    name: 'Побег из Шоушенка',
    photo: [img_4]
  },
];

function App() {
  const randomQuoteID = Math.floor(Math.random() * 4);
  const quote = films[randomQuoteID].quote;
  const name = films[randomQuoteID].name;
  const photo = films[randomQuoteID].photo;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Цитаты из фильмов</h1>
      </header>
      <main>
        <Quote quote={quote} name={name} photo={photo} />
      </main>
    </div>
  );
}

export default App;
