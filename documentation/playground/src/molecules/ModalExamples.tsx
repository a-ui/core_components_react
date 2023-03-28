import { Button, Modal } from '@a-ui/react';
import { useState } from 'react';

export function ModalExamples() {
  const [closedCount, setClosedCount] = useState(0);
  const [openCount, setOpenCount] = useState(0);
  const [controlledOpen, setControlledOpen] = useState(false);
  const [title, setTitle] = useState('');
  const handleTitle = () => {
    setTitle('GEBRUIK ANNULEREN OM AF TE SLUITEN');
  };
  const toggleControlledOpen = () => {
    setControlledOpen(!controlledOpen);
  };
  return (
    <div className="u-margin">
      <h2>Modals</h2>
      <div className="u-margin">
        <Button theme="danger" onClick={toggleControlledOpen}>
          CONTROLLED MODAL TRIGGER
        </Button>
        <Modal
          onClose={toggleControlledOpen}
          confirmButton={{
            id: `aui-modal-confirm`,
            size: 'small',
            onClick: handleTitle,
            children: 'Bevestigen'
          }}
          cancelButton={{
            id: `aui-modal-cancel`,
            size: 'small',
            emphasis: 'medium',
            onClick: toggleControlledOpen,
            children: 'Annuleren'
          }}
          open={controlledOpen}
          appRootId="aui-react-playground"
          title={{ label: title }}
        >
          <div>This is a controlled modal.</div>
        </Modal>
        <p></p>
        <Modal
          onClose={() => setClosedCount(closedCount + 1)}
          onAfterOpen={() => setOpenCount(openCount + 1)}
          title={{ label: 'Hello world!' }}
          trigger={<Button>UNCONTROLLED MODAL TRIGGER</Button>}
          confirmButton={{
            id: `aui-modal-confirm`,
            size: 'small',
            children: 'Bevestigen'
          }}
          cancelButton={{
            id: `aui-modal-cancel`,
            size: 'small',
            emphasis: 'medium',
            children: 'Annuleren'
          }}
          shouldCloseOnOverlayClick={false}
          appRootId="aui-react-playground"
        >
          <div>This modal is uncontrolled.</div>
        </Modal>
        <p>Modal has been opened "{openCount}" times.</p>
        <p>Modal has been closed "{closedCount}" times.</p>
      </div>
    </div>
  );
}

export default ModalExamples;
