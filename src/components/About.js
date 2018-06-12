import React from 'react';

export default class About extends React.Component {
    render() {
        const style = {
            height: 300,
            display: "flex",
            alignItems: "center"
        }

        return (

            <div className={"container"}>
                <h5 className={"teal-text"}>About US</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae faucibus arcu, eu lacinia erat. Donec sit amet tristique nisi, vel tempor nisi. Aliquam erat volutpat. Praesent vestibulum lectus sem, quis malesuada libero scelerisque eget. In non dui et leo facilisis lacinia. Duis hendrerit pretium elit, a pharetra nibh imperdiet et. Fusce pulvinar ut velit ac scelerisque. Sed at volutpat felis. Ut a tincidunt nisl. Nulla viverra nulla pellentesque interdum lacinia. Suspendisse potenti.
                </p>
            </div>

        );
    }
}