import React from 'react';
import Modal from './components/modal';

const createRootComponent = appProps => () => <Modal {...appProps} />;

export default createRootComponent;
