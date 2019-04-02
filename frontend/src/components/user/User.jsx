import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props) => {
    console.log()
    return (
    <tr key={props.user.id}>
                    <td>{props.user.id}</td>
                    <td>{props.user.name}</td>
                    <td>{props.user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => props.onLoadUser(props.user)}>
                            <FontAwesomeIcon icon='pen' />
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => props.onDelete(props.user.id)}>
                            <FontAwesomeIcon icon="trash" />
                        </button>
                    </td>
                </tr>
  );
};