import React, { Component } from 'react';
import classnames from 'classnames';

class NewUser extends Component {

    state = {
        name: '',
        email: '',
        errors: {},
        loading: false
    }
    
    handleInputChange = e => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
              [e.target.name]: e.target.value,
              errors
            });
          } else {
            this.setState({ [e.target.name]: e.target.value });
          }
    };
    
    handleSubmit = e => {
        e.preventDefault();

        // validation
        let errors = {};
        if (this.state.name === '') errors.name = "Deve ser preenchido";
        if (this.state.email === '') errors.email = "Deve ser preenchido";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0
    
        if (isValid) {
            if (this.state.name.trim() === this.state.email.trim()) {
                this.props.onAddUser(this.state);
                this.handleReset();
            }  
        }
    };
    
    handleReset = () => {
        this.setState({ name: '', email: '' })
    };

    render() {
        return (
                <div className="form" >
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className={classnames('form-group', { error: !!this.state.errors.name})}>
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={e => this.handleInputChange(e)}
                                placeholder="Digite o nome..." />
                            <span>{this.state.errors.name}</span>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className={classnames('form-group', { error: !!this.state.errors.email})}>
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={e => this.handleInputChange(e)}
                                placeholder="Digite o e-mail..." />
                            <span>{this.state.errors.email}</span>
                        </div>

                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-primary"
                                    onClick={this.handleSubmit}>Salvar</button>
                                <button className="btn btn-primary"
                                onClick={ this.handleUpdate }>Atualizar</button>
                                <button className="btn btn-secondary"
                                    onClick={e => this.handleReset(e)}>
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewUser;