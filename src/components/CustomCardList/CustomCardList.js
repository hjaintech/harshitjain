import React from 'react';
import CustomCard from '../common/CustomCard/CustomCard';


const CustomCardList = (props) => {
    const cards = props.cards.map(cardData => <CustomCard title={cardData.title} url={cardData.url}/>);
    return (
        //TODO: Add CSS to show the cards properly
        <div>
           {cards}
        </div>
    );
}

export default CustomCardList;