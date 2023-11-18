import React, { Component } from "react";
class Body extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className='center-div'>
                <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                    <img src='https://tse4.mm.bing.net/th?id=OIP.EeHdxZPTqxnesX9amDqCmwHaFj&pid=Api&P=0&h=180' height={300} width={300} alt="" />
                    <p> An image is a visual representation of something. An image can be a two-dimensional (2D) representation, such as a drawing, painting, or photograph, or a three-dimensional (3D) object, such as a carving or sculpture.</p>
                </div>
                <p>{this.state.count}</p>
                <button onClick={this.increment} className="like-button">like</button>
            </div>
        );
    }
}

export default Body;