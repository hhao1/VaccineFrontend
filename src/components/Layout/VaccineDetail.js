import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Jumbotron, Button } from 'reactstrap';
import classnames from 'classnames';

import MapPopup from './MapPopup'

function VaccineDetail(props) {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) 
        setActiveTab(tab);
  }

//   const{
//       vaccineSelected
//   } = this.props

  return (
    <Jumbotron className="container mt-5">
        <Row>
            <Col sm={{ size: '4', offset: 1 }} id="vaccine-title" style={{height: '30em', 'fontFamily': "'Overpass', sans-serif"}}>
                <h1 style={{'fontSize': '3.5em', 'color': 'gray'}}>What You Need To Know About</h1> 
                <h2 style={{'color': 'red'}}>Influenza</h2>

                {/* <Button className="w-75 border-0 mt-8" style={{'background': 'orange', 'color': 'white'}}>Nearest Store</Button> */}
                <MapPopup/>
            </Col>

            <Col sm={{ size: '6'}} className="border border-light rounded" id="vaccine-info" style={{height: '30em'}}>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        > Description</NavLink>
                    </NavItem>

                    <NavItem className="ml-2">
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        > Symptoms</NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab} className="mt-4" style={{fontFamily: "'Source Serif Pro', serif"}}>
                    <TabPane tabId="1" className="p-3">
                    Influenza is a viral infection that attacks your respiratory system — your nose, throat and lungs. Influenza is commonly called the flu, but it's not the same as stomach "flu" viruses that cause diarrhea and vomiting.
                    For most people, influenza resolves on its own. But sometimes, influenza and its complications can be deadly.
                    </TabPane>
                    <TabPane tabId="2">
                        Symptoms
                    </TabPane>
                </TabContent>
            </Col>
        </Row>
    </Jumbotron>
  );
}

export default VaccineDetail;