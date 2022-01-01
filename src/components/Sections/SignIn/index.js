import React, { useState } from 'react';
import './style.scss'
//Components

import AuthWrapper from '../../AuthWrapper/index';
import RegForm from '../Form/RegForm';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LogForm from '../Form/LoginForm';

const SignIn = props => {

  const [formsState, setFormState] = useState(0);



  const handleClick = (e) => {


    // Megvizsgálom, melyik formtól jött a click esemény
    if (!e.target || !e.target.attributes || !e.target.attributes[0].nodeValue) {
      return
    }
    else if (e.target.attributes[0].nodeValue == "reg-title") {
      setFormState(0);
    }
    else if (e.target.attributes[0].nodeValue == "login-title") {
      setFormState(1);
    }
  }


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
          <Col className='col-wrapper'>
            <AuthWrapper>
              <div className="formWrap">
                <div className={`reg-wrapper ${formsState==0 ? "active" : 'inActive'}`}>
                  <RegForm handleClick={handleClick} />
                </div>
                <div className={`login-wrapper ${formsState==1 ? "active" : 'inActive'}`}>
                  <LogForm handleClick={handleClick} />
                </div>
              </div>
            </AuthWrapper>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default SignIn;