import React, { Component } from 'react';

class Item extends Component {
 
    handleDelete(id) {
        this.props.onClickDelete(id);
    }

    handleEdit(item) {
        this.props.onClickEdit(item);
    }

    render() {
        let { item, index } = this.props;
        let elmLevel = <button type="button" className="btn btn-info">Easy</button>;
        if (item.level === 1) {
            elmLevel = <button type="button" className="btn btn-success">Medium</button>
        } else if (item.level === 2) {
            elmLevel = <button type="button" className="btn btn-danger">Hard</button>
        }

        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{elmLevel}</td>
                <td>
                    <button onClick={() => this.handleEdit(item)}type="button" className="btn btn-dark">Edit</button>
                    <button onClick={() => window.confirm("Are you sure want to delete it ?") ? this.handleDelete(item.id) : null } type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default Item;
