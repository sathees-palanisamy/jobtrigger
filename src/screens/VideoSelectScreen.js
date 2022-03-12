import _ from 'lodash';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../actions';

class VideoSelectScreen extends Component {
  constructor(props) {
    super(props);
  this.state = {
    hovering: false,
    racfid: '',
    parameter1: '',
    racfpwd: '',
    formError: ''
  }

  this.handleUserId = this.handleUserId.bind(this);
  this.handleDonationAmt = this.handleDonationAmt.bind(this);
  this.handleTipAmt = this.handleTipAmt.bind(this);
  this.saveDonation = this.saveDonation.bind(this);


}

   handleUserId (event) {
    this.setState({racfid : event.target.value});
  };

   handleDonationAmt (event) {
    this.setState({parameter1 : event.target.value});
  };

   handleTipAmt (event) {
    this.setState({racfpwd : event.target.value});
  };

  saveDonation (event) {
    event.preventDefault();
    console.log(this.state.racfid);
    console.log(this.state.parameter1);
    console.log(this.state.racfpwd);

    if (this.state.racfid !== "") {
     console.log('racfid:' + racfid);
     this.props.jobTrigger(this.state.parameter1,this.state.racfid,this.state.racfpwd);
    } else {
      this.setState({formError : "Invalid Input"});
     
    }
  };


  render() {
    return (
      <div className="select-screen">
        <h1 >Mainframe Automation</h1>
        <form onSubmit={this.saveDonation}>
            <div>

            <div>
              <label>Paramter 1: </label>
              <input
                type="text"
                onChange={this.handleDonationAmt}
                id="amount"
                value={this.state.parameter1}
                
              />
            </div>

              <label >Racf ID: </label>
              <input
                type="text"
                onChange={this.handleUserId}
                id="racfid"
                value={this.state.racfid}
                name="racfid"
          
              />
            </div>
  
            <div >
              <label >Password: </label>
              <input
                type="password"
                onChange={this.handleTipAmt}
                id="racfpwd"
                value={this.state.racfpwd}
              />
            </div>
            <button  type="submit" >
              Submit
            </button>
            <div>{this.props.jobSubmitStatus}</div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { jobSubmitStatus: state.videos.jobSubmitStatus };
}


export default connect(mapStateToProps, actions)(VideoSelectScreen);
