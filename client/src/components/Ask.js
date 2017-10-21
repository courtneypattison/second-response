import React, { Component } from 'react';
import { connect } from 'react-redux';
import Help from './Help';
import Wrapper from './Wrapper';

class AskComponent extends Component {
  constructor() {
    super();
    this.state = {
        description: '',
        count: 1,
        address: '',
        city: '',
        state: '',
        zip: '',
        need: ''
    }
    this.submit = this.submit.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateZip = this.updateZip.bind(this);
    this.selectNeed = this.selectNeed.bind(this);
  }

  submit(evt) {
    evt.preventDefault()
    console.log(this.state)
  }

  selectNeed(evt) {
    console.log(evt)
    this.setState({
      need: evt.target.value
    })
  }

  updateDescription(evt) {
    this.setState({
      description: evt.target.value
    });
  }

  updateCount(evt) {
    this.setState({
      count: evt.target.value
    })
  }

  updateAddress(evt) {
    this.setState({
      address: evt.target.value
    });
  }

  updateCity(evt) {
    this.setState({
      city: evt.target.value
    })
  }

  updateState(evt) {
    this.setState({
      state: evt.target.value
    })
  }

  updateZip(evt) {
    this.setState({
      zip: evt.target.value
    })
  }

  getOptions() {
    return this.props.needs.map((need) => {
      return (
      <option key={need} value={need}>
        {need}
      </option>);
    })
  }

  render() {
    return (
      <Wrapper header="What do you need?">
        <p>Post what you need here!</p>
        <form onSubmit={this.submit}>
          <select name="needs" value={this.state.need} onChange={this.selectNeed}>
            {this.getOptions()}
          </select>
          <input type="text"
                 placeholder="Input a short description"
                 maxLength="140"
                 onChange={this.updateDescription}
                 value={this.state.description}>
          </input>
          <input type="number"
                 onChange={this.updateCount}
                 value={this.state.count}>
          </input>
          <input type="text"
                 placeholder="Address"
                 onChange={this.updateAddress}
                 value={this.state.address}>
          </input>
          <input type="text"
                 placeholder="City"
                 onChange={this.updateCity}
                 value={this.state.city}>
          </input>
          <input type="text"
                 placeholder="State"
                 onChange={this.updateState}
                 value={this.state.state}>
          </input>
          <input type="text"
                 placeholder="Zip Code"
                 onChange={this.updateZipCode}
                 value={this.state.zip}>
          </input>
          <button type="submit">Submit</button>
        </form>
      </Wrapper>
    );
  }
}


const mapStateToProps = state => {
  return {
    needs: state.needTypes
  }
}


const Ask = connect(mapStateToProps)(AskComponent);

export default Ask;
