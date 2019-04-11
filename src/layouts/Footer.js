import React from 'react';
import { connect } from 'react-redux';
import { Modal,
         ModalHeader,
         ModalBody,
         ModalFooter,
         Button } from 'reactstrap';

import { toggleModal } from '../actions';

class Footer extends React.Component {
    render() {
        return(
            <footer id="main-footer" className="bg-dark">
            <div className="container">
              <div className="row">
                <div className="col text-center py-4">
                  <p>Create By Chakatpon Khunthong</p>
                  <p>Copyright &copy;
                    <span id="year">{new Date().getFullYear()}</span>
                  </p>
                  <button className="btn btn-primary" onClick={() => this.props.toggleModal(this.props.modalOpen)}>Contact Us</button>
                </div>
              </div>
            </div>
            <Modal className="text-dark" isOpen={this.props.modalOpen} toggle={() => this.props.toggleModal(this.props.modalOpen)}>
                <ModalHeader >Contact Us</ModalHeader>
                <ModalBody>
                 <form >
                    <div className ="form-group">
                      <label for="name">Name</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className ="form-group">
                      <label for="email">Email</label>
                      <input type="email" className="form-control"/>
                    </div>
                    <div className ="form-group">
                      <label for="message">Message</label>
                      <textarea className ="form-control"></textarea>
                    </div>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={() => this.props.toggleModal(this.props.modalOpen)} color="primary" >Submit</Button>{' '}
                  <Button onClick={() => this.props.toggleModal(this.props.modalOpen)} color="secondary" >Cancel</Button>
                </ModalFooter>
            </Modal>
          </footer>
        );
    }
}

const mapStateToProps = ( state ) => {
    return { modalOpen: state.modalOpen}
}

export default connect(mapStateToProps, { toggleModal })(Footer);