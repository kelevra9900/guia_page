import React, { Fragment } from 'react';
import LoginModal from '../../components/LoginModal';
import Head from '../../containers/Head';


const LoginAuth = () => {
    return(
        <Fragment>
            <Head />
            <LoginModal />
        </Fragment>
    );
}


export default LoginAuth;