import React from 'react';
import { Provider } from 'reakit';
import { Portal } from 'reakit/Portal';
import {
  useDialogState,
  Dialog,
  DialogDisclosure,
  DialogBackdrop,
} from 'reakit/Dialog';
import * as system from 'reakit-system-bootstrap';

const Modal = props => {
  const dialog = useDialogState();
  return (
    <Provider unstable_system={system}>
      <DialogDisclosure {...dialog}>{props.disclosureText}</DialogDisclosure>
      <Portal>
        <DialogBackdrop {...dialog} />
      </Portal>
      <Dialog {...dialog} aria-label="Welcome">
        content here
      </Dialog>
    </Provider>
  );
};

export default Modal;
