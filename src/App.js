import { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
    const [cards, setCards] = useState([
        {
            id: '123asd',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg',
            name: 'John Doe',
            title: 'Back End Developer'
        },
        {
            id: '123dsa',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg',
            name: 'Richard Roe',
            title: 'International Creative Administrator'
        },
        {
            id: '123sda',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg',
            name: 'Jane Doe',
            title: 'Front End Developer'
        }
    ])
    const [showCard, setShowCard] = useState(true)
    const toggleShowCard = () => setShowCard(!showCard)

    const onDelete = (cardIndex) => {
        const cardCopy = [...cards]
        cardCopy.splice(cardIndex, 1)
        setCards(cardCopy)
    }

    const onChangeNameHandler = (e, id) => {
        // 1. witch the card by id
        const cardIndex = cards.findIndex(card=>card.id === id);
        // 2. make a copy of the cards
        const cardCopy = [...cards];
        // 3. change the name of the spesific cards
        cardCopy[cardIndex].name = e.target.value;
        // 4. set the cards
        setCards(cardCopy);
    }

    const cardsMarkup = showCard && (
        cards.map((card, index) => {
            return (
                <Card
                    key={card.id}
                    avatar={card.avatar}
                    name={card.name}
                    title={card.title}
                    onDelete={()=>onDelete(index)}
                    onChange={ (e)=>onChangeNameHandler(e, card.id) }
                />
            )
        })
    )
    return (
        <div className="App">
            <button className="button button-blue" onClick={toggleShowCard}>Toggle show/hide</button>
            {cardsMarkup}
        </div>
    );
}

export default App;
