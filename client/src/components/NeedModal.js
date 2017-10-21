import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Modal from 'react-modal';

const NeedModal = ({need, onClose, onFill}) => (
  <Modal isOpen={!!need}
         shouldCloseOnOverlayClick={true}
         onRequestClose={onClose}
         style={{
           content: {
             top: '50px',
             left: '300px',
             right: '300px',
             bottom : '300px',
           }
         }}
    >
    <div className="modal-content list-item">
      <h1>
        {`${need.count} ${need.need} needed`}
      </h1>
      <p className="subtext">
        {need.description}
      </p>
      <button className="cta-dark" onClick={() => {onFill(need)}}>
        I can help!
      </button>
    </div>
  </Modal>
)

export default NeedModal;
