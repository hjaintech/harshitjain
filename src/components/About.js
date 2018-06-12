import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class About extends React.Component {
    render() {
        const styles = {
            root: {
                flexGrow: 1,
            },
        };

        return (
            <div className={styles.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Title
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}