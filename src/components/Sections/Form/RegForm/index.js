import React, { useState } from 'react';
import FormInput from '../FormInput';
import './style.scss';

const RegistrationForm = ({handleClick}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [loading, setLoading] = useState(false);

    return (
        <>
            <div className='btn-wrapper'>
                <button className='login-btn' onClick={handleClick}>
                    <h3 className='reg-title'>Regisztráció</h3>
                </button>
            </div>

            <form >

                <div className="input-wrapper">
                    <FormInput
                        type="name"
                        name="name"
                        value={email}
                        placeholder="Név"
                        handleChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <FormInput
                        type="email"
                        name="email"
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
                <div className="input-wrapper">

                    <FormInput
                        type="password"
                        name="confirm-password"
                        value={confirmPassword}
                        placeholder="Jelszó megerősítése"
                        handleChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group button-wrapper">
                    <button className="btn btn-primary btn-block" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Befejezesés</span>
                    </button>
                </div>

            </form>
            </>)

}
export default RegistrationForm;