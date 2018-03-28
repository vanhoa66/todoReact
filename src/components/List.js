import React, { Component } from 'react';
import Item from "./Item"

class List extends Component {
    render() {
        let { items } = this.props;
        const elmItem = items.map((item, index) => {
            return (<Item
                onClickDelete={this.props.onClickDelete}
                onClickEdit={this.props.onClickEdit}
                index={index}
                item={item}
                key={index}
            />)
        })
        return (
            <div className="card">
                <div className="card-header text-white bg-success">
                   <b>List Of Tasks</b>
        </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task</th>
                            <th scope="col">Level</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elmItem}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;
