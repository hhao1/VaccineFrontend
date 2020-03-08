import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import MapContainer from './MapContainer'

function MapPopup(props){

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="w-75 border-0 mt-8" onClick={toggle} style={{'background': 'orange', 'color': 'white'}}>Nearest Store</Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Store Location</ModalHeader>
        <ModalBody style={{height: '25em'}}>
            <MapContainer mapheight={"90%"}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MapPopup;