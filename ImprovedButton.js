import React from 'react';
export default class ImprovedButton extends React.Component {
    name = ["Ahmed", "Abir", "Syrine"];
    photo = ["ahmed.jpg", "abir.jpg", "syrine.jpg"];
    des = ["nheb yeser el mekla w el oumen", "ena ki nadhhek nwali nebki", "nosken fi beni khaled"]
    state = {
        name: "ahmed",
        photo: "ahmed.jpg",
        des: "nheb yeser el mekla w el oumen"
    }

    render() {
        let index = this.state.index;
        return (
            <div style={{ textAlign: "center" }}>

                <button onClick={() => {
                    this.setState({
                         name: this.name[0], photo: this.photo[0], des: this.des[0]
                    });
                }}>
                    Ahmed</button>

                <button onClick={() => {
                    this.setState({
                         name: this.name[1], photo: this.photo[1], des: this.des[1]
                    });
                }}>
                    Abir </button>

                <button onClick={() => {
                    this.setState({
                         name: this.name[2], photo: this.photo[2], des: this.des[2]
                    });
                }}>
                    Syrine </button>

                <h1> {this.state.name} </h1>
                <img src={this.state.photo} style={{ width: 400, height: 300 }} />
                <p>{this.state.des}</p>


            </div>
        )

    }

}
