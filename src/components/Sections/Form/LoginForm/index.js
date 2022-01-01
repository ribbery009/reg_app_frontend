import React, { useState } from 'react';
import FormInput from '../FormInput';
import './style.scss';

const LoginForm = ({handleClick}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [loading, setLoading] = useState(false);

    return (
        <>
            <div className='btn-wrapper'>
                <button className='reg-btn' onClick={handleClick}>
                    <h3 className='login-title'>Belépés</h3>
                </button>
            </div>
            <div className='login-form'>
                <form >

                    <div className="input-wrapper">

                        <FormInput
                            type="name"
                            name="name"
                            value={email}
                            placeholder="E-mail"
                            handleChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-wrapper">

                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Jelszó"
                            handleChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group button-wrapper">
                        <button className="btn btn-primary btn-block" disabled={loading}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>tovább</span>
                        </button>
                    </div>

                </form>
            </div>
        </>
    )

}
export default LoginForm;