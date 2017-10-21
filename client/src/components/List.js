import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';
import ListItem from './ListItem';
import Map from './Map';

class ListView extends Component {

  constructor() {
    super();
    this.state = {
      selected: ''
    }
    this.getNeeds = this.getNeeds.bind(this);
  }

  getNeeds() {
    return this.props.needs.map((need) => {
      return (
        <ListItem need={need} key={need.id} onClick={this.selectNeed.bind(this, need)}/>
      )
    })
  }

  selectNeed(need) {
    console.log(need)
  }

  render() {
    return (
      <Wrapper header="Current Needs">
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
