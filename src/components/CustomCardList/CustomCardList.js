import React from 'react';
import CustomCard from '../common/CustomCard/CustomCard';


const CustomCardList = (props) => {
    const cards = props.cards.map(cardData => <CustomCard title={cardData.title} url={cardData.url} />);
    return (
        //TODO: Add CSS to show the cards properly
        <div style={styles.cardListContainer}>
            {cards}
        </div>
    );
}

const styles = {
    cardListContainer :{
        display: 'flex',
        flexWrap: 'wrap'
    }
}
export default CustomCardList;