import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';
import ListItem from './ListItem';
import Map from './Map';
import NeedModal from './NeedModal';

class ListView extends Component {

  constructor() {
    super();
    this.state = {
      selected: ''
    }
    this.getNeeds = this.getNeeds.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fillNeed = this.fillNeed.bind(this);
  }

  getNeeds() {
    return this.props.needs.map((need) => {
      return (
        <ListItem need={need} key={need.id} onClick={this.selectNeed.bind(this, need)}/>
      )
    })
  }

  selectNeed(need) {
    this.setState({selected: need});
  }

  closeModal() {
    this.setState({selected: ''});
  }

  fillNeed(need) {
    window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
    this.setState({selected: ''});
  }

  renderModal() {
    return <NeedModal need={this.state.selected}
                      onClose={this.closeModal}
                      onFill={this.fillNeed}/>;
  }

  render() {
    return (
      <Wrapper header="Second Response">
        { this.state.selected && this.renderModal() }
        <Map/>
        <ul className="list-items">
          {this.getNeeds()}
        </ul>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    needs: state.needs
  }
}


const List = connect(mapStateToProps)(ListView);

export default List;
