import React, { Component } from 'react';

class Item extends Component {
    render() {
        let { item, index } = this.props;
        let elmLevel = <button type="button" className="btn btn-light">Small</button>;
        if (item.level === 1) {
            elmLevel = <button type="button" className="btn btn-light">Medium</button>
        } else if (item.level === 2) {
            elmLevel = <button type="button" className="btn btn-light">High</button>
        }

        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{elmLevel}</td>
                <td>
                    <button type="button" className="btn btn-primary">Edit</button>
                    <button type="button" className="btn btn-secondary">Delete</button>
                </td>
            </tr>
        );
    }
}

export default Item;
