import React from 'react';

export default class Home extends React.Component {
    render() {
        const style = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }

        return (
            <div>
                <div style={style}>
                    <div>
                        <div className={"container"}>
                            <h2 className={"teal-text"}>Hello World</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae faucibus arcu, eu lacinia erat. Donec sit amet tristique nisi, vel tempor nisi. Aliquam erat volutpat. Praesent vestibulum lectus sem, quis malesuada libero scelerisque eget. In non dui et leo facilisis lacinia. Duis hendrerit pretium elit, a pharetra nibh imperdiet et. Fusce pulvinar ut velit ac scelerisque. Sed at volutpat felis. Ut a tincidunt nisl. Nulla viverra nulla pellentesque interdum lacinia. Suspendisse potenti.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}