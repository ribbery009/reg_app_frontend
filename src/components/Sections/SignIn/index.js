import React, { useState} from 'react';

//Components
import AuthWrapper from './../../AuthWrapper/index';
import FormInput from '../../../components/AuthWrapper/index';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SignIn = props => {

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     if (currentUser) {
//       resetForm();
//       history.push('/');
//     }

//   }, [currentUser]);



//   const handleLogin = (e) => {
//     e.preventDefault();


//     setLoading(true);

//     //form.current.validateAll();

//     if (true) {
//       dispatch(login(email, password))
//         .then(() => {
        
//            history.push("/");
//           // window.location.reload();
//         })
//         .catch(() => {
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   };


//   const resetForm = () => {
//     setEmail('');
//     setPassword('');
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // dispatch(emailSignInStart({ email, password }));
//   }


  return (
    <div className="waveWrapper waveAnimation">
    
      <Container>
        <Row>
          <Col>
            <AuthWrapper>
              <div className="formWrap">
                <form >

                  <div className="input-wrapper">
                    <span className="input-icon"></span>
                    <FormInput
                      type="name"
                      name="name"
                      value={email}
                      placeholder="Email"
                      handleChange={e => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="input-wrapper">
                    <span className="input-icon"></span>
                    <FormInput
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      handleChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-block" disabled={loading}>
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Login</span>
                    </button>
                  </div>
                
                </form>
              </div>
            </AuthWrapper>
          </Col>
        </Row>
      </Container>
      <div className="waveWrapperInner bgTop">
        <div className="wave waveTop"></div>
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div className="wave waveMiddle"></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div className="wave waveBottom"></div>
      </div>

    </div>
  )
}

export default SignIn;