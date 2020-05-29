import React from 'react';

class FormComponent extends React.Component {
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className='mb-3 mr-sm-5'>
                <div className='form-group row align-items-center'>
                    <label for='firstName' class='col-sm-3 col-form-label text-sm-right'>
                        First Name:
                    </label>
                    <div className='col-sm-9'>
                        <input
                            type='text'
                            name='firstName'
                            value={this.props.firstName}
                            onChange={this.props.handlePersonFirstName}
                        />
                    </div>
                </div>

                <div className='form-group row align-items-center'>
                    <label for='lastName' class='col-sm-3 col-form-label text-sm-right'>
                        Last Name:
                    </label>
                    <div className='col-sm-9'>
                        <input
                            type='text'
                            name='lastName'
                            value={this.props.lastName}
                            onChange={this.props.handlePersonLastName}
                        />
                    </div>
                </div>
                <div className='form-group row align-items-center'>
                    <label for='Age' class='col-sm-3 col-form-label text-sm-right'>
                        Age:
                    </label>
                    <div className='col-sm-9'>
                        <input
                            type='number'
                            name='age'
                            value={this.props.age}
                            onChange={this.props.handlePersonAge}
                        />
                    </div>
                </div>
                <div className='text-right'>
                    <button className='btn btn-primary' type='submit'>
                        {!this.props.person.ix && this.props.person.ix !== 0
                            ? 'Create New Person'
                            : 'Update Person'}
                    </button>
                </div>
            </form>
        );
    }
}

export default FormComponent;
