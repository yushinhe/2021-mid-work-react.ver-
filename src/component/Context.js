import React, { Component } from 'react'
import Data from '../component/bookdata'
const RoomContext = React.createContext();
export default class RoomProvider extends Component {
    state = {
        books: [],
    };
    //getData
    componentDidMount() {
        let books = this.formatData(Data)
        this.setState({
            books,
        })
    }
    getRoom = id => {
        let tempRoom = [...this.state.books];
        const room = tempRoom.find(room => room.id === id)
        return room
    }


    render() {
        return (
            <div>
                <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
                    {this.props.children}
                </RoomContext.Provider>
            </div>
        )
    }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomContext, RoomConsumer, RoomProvider }