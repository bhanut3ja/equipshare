import { React, useState } from "react";
import './Map.css';
import Map from '../../images/Map.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

const Maps = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="map-component">
        <div className="map-top-header">
          <h1 className="map-heading">Map</h1>
          <p className="map-routing">Home &gt; Map</p>
        </div>
        <div className="details-section">
          <div className="details-1">
            <p className="details-heading1">Category:</p>
            <select name="" id="" className="details-dropdown">
              <option value="">Select Category</option>
              <option value="">Select Category</option>
              <option value="">Select Category</option>
            </select>
          </div>
          <div className="details-2">
            <p className="details-heading2">Site:</p>
            <select name="" id="" className="details-dropdown">
              <option value="">Select Category</option>
              <option value="">Select Category</option>
              <option value="">Select Category</option>
            </select>
          </div>
          <div className="details-3">
            <p className="details-heading3">Type:</p>
            <select name="" id="" className="details-dropdown">
              <option value="">Select Category</option>
              <option value="">Select Category</option>
              <option value="">Select Category</option>
            </select>
          </div>

          <button className="map-get-details" onClick={handleShow}>Get Details</button>
        </div>

        <div className="cards-and-map">
          <div className="all-cards">
            <div className="cards">
              <h2 className="card-heading">Equipment Name 01</h2>
              <div className="heading-desc">
                <div className="heading-names">
                  <p className="heading">Site:</p>
                  <p className="heading">Category:</p>
                  <p className="heading">Status:</p>
                  <p className="heading">Assigned To:</p>
                </div>

                <div className="heading-contents">
                  <p className="heading">Site Name</p>
                  <p className="heading">Category Name</p>
                  <p className="heading">Status Name</p>
                  <p className="heading">Full Name</p>
                </div>
              </div>
            </div>
            <div className="cards">
              <h2 className="card-heading">Equipment Name 02</h2>
              <div className="heading-desc">
                <div className="heading-names">
                  <p className="heading">Site:</p>
                  <p className="heading">Category:</p>
                  <p className="heading">Status:</p>
                  <p className="heading">Assigned To:</p>
                </div>

                <div className="heading-contents">
                  <p className="heading">Site Name</p>
                  <p className="heading">Category Name</p>
                  <p className="heading">Status Name</p>
                  <p className="heading">Full Name</p>
                </div>
              </div>
            </div>
            <div className="cards">
              <h2 className="card-heading">Equipment Name 03</h2>
              <div className="heading-desc">
                <div className="heading-names">
                  <p className="heading">Site:</p>
                  <p className="heading">Category:</p>
                  <p className="heading">Status:</p>
                  <p className="heading">Assigned To:</p>
                </div>

                <div className="heading-contents">
                  <p className="heading">Site Name</p>
                  <p className="heading">Category Name</p>
                  <p className="heading">Status Name</p>
                  <p className="heading">Full Name</p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-section">
            <div className="map-map">
              <img src={Map} className="MapImage" alt="" />
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Geofence Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Geofence Name</Form.Label>
                  <Form.Control type="text"  placeholder="name"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Color</Form.Label>
                  <Form.Control type="text" placeholder="color" />
                </Form.Group>
              </Row>
              <Row className="check-type mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label style={{marginRight:"1rem"}}>Type</Form.Label>
                  <Form.Check
                    inline
                    label="Site"
                    name="group1"
                  />
                  <Form.Check
                    inline
                    label="Yard"
                    name="group1"
                  />
                  <Form.Check
                    inline
                    label="Readymix Plant"
                    name="group3"
                  />
                  <Form.Check
                    inline
                    label="Road"
                    name="group4"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Label>Select Site</Form.Label>
                <Form.Group as={Col} controlId="formGridEmail">

                  <Dropdown className="d-inline">
                    <Dropdown.Toggle style={{ width: '463px', textAlign: 'left' }} id="dropdown-autoclose-true" variant="outline-secondary">
                      Select Site
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
                <div key='default-checkbox' className="mb-3">
                  <Form.Check style={{ marginTop: '11px' }} as={Col}
                    type='checkbox'
                    id='default-checkbox'
                    label='Receive asset entry alerts'
                  />
                </div>

              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={handleClose}>
             Add/Done
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
export default Maps;