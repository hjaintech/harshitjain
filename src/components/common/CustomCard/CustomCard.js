import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import GFGImage from '../../../assets/GFG-logo.jpeg';
import './CustomCard.css';



const CustomCard = (props) => {
//TODO: Anchor tag is being used inside button because we needed the linked page to open in a new tab. See if we can improve this, otherwise work on styling it properly
    return (
        <Card raised="true" className="Card">
            <CardMedia
          className="media"
          image={GFGImage}
          title="GeeksForGeeks"
        />

            <CardHeader
                title={props.title}
                subheader="September 14, 2016"
            />
            <CardActions>
                <Button variant='outlined'> 
                    <a href={props.url} target="_blank" >View Article </a>
                </Button>
            </CardActions>
        </Card>
    );
}

export default CustomCard;