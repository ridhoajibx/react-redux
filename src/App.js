import { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
    const [cards, setCards] = useState([
        {
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg',
            name: 'John Doe',
            title: 'Back End Developer'
        },
        {
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg',
            name: 'Richard Roe',
            title: 'International Creative Administrator'
        },
        {
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg',
            name: 'Jane Doe',
            title: 'Front End Developer'
        }
    ])
    const [showCard, setShowCard] = useState(true)
    const toggleShowCard = () => setShowCard(!showCard)

    const onDelete = (cardIndex) => {
        const card_copy = [...cards]
        card_copy.splice(cardIndex, 1)
        setCards(card_copy)
    }

    const cardsMarkup = showCard && (
        cards.map((card, index) => {
            return (
                <Card
                    key={index}
                    avatar={card.avatar}
                    name={card.name}
                    title={card.title}
                    onDelete={()=>onDelete(index)}
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
