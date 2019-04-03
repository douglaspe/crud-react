import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { loadUser, deleteUser } from '../../actions';

class User extends Component {
    onLoadUser = () => {
        this.props.loadUser(this.props.user);
    }

    onDeleteUser = () => {
        this.props.deleteUser(this.props.user.id);
    }
     
    render() {
        const { user } = this.props
        return (
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-warning mr-md-2"
                        onClick={this.onLoadUser}>
                        <FontAwesomeIcon icon='pen' />
                    </button>
                    <button className="btn btn-danger"
                        onClick={this.onDeleteUser}>
                        <FontAwesomeIcon icon="trash" />
                    </button>
                </td>
            </tr>
        );
    }
}

export default connect(
    null,
    { loadUser, deleteUser }
)(User);