import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CustomCardList from './CustomCardList/CustomCardList';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Home extends React.Component {
    
    
    _getCardsData = () => {
        //TODO: Get cards data from a seperate JSON File
        return [{
            title: "ES2015: Latest version of JavaScript",
            url : "https://www.geeksforgeeks.org/es2015-latest-version-of-javascript/"
        },{
            title: "New features of JavaScript Arrays with ES2015",
            url : "https://www.geeksforgeeks.org/new-features-of-javascript-arrays-with-es2015/"
        },{
            title: "JavaScript ES2015: Block Scoping",
            url : "https://www.geeksforgeeks.org/javascript-es2015-block-scoping/"
        },{
            title: "Must use JavaScript Array Functions – Part 1",
            url : "https://www.geeksforgeeks.org/must-use-javascript-array-functions-part-1/"
        },
        {
            title: "Must use JavaScript Array Functions – Part 2",
            url : "https://www.geeksforgeeks.org/must-use-javascript-array-functions-part-2/"
        },
        {
            title: "Must use JavaScript Array Functions – Part 3",
            url : "https://www.geeksforgeeks.org/must-use-javascript-array-functions-part-3/"
        },
        {
            title: "Understanding variable scopes in Javascript",
            url : "https://www.geeksforgeeks.org/understanding-variable-scopes-in-javascript/"
        },
        {
            title: "Project Idea | (Static Code Checker for C++)",
            url : "https://www.geeksforgeeks.org/project-idea-static-code-checker-for-c/"
        },
        {
            title: "Project Idea | (Trip Planner)",
            url : "https://www.geeksforgeeks.org/project-idea-trip-planner/"
        },
        {
            title: "Project Idea | (Personalized real-time update system)",
            url : "https://www.geeksforgeeks.org/project-idea-personalized-real-time-update-system/"
        }
    ];
    }

    render() {
        const { classes } = this.props;
        const cardsData = this._getCardsData();

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>*/}
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Harshit Jain
                        </Typography>
                        {/*<Button color="inherit">Login</Button>*/}
                    </Toolbar>
                </AppBar>
                <CustomCardList cards={cardsData}/>
                
            </div>
        );
    }
}

export default withStyles(styles)(Home);