/* eslint-disable */
import React from 'react';
import Modal from 'reactstrap';

import ControlButton from './ControlButton';

export default (props) => {

  const styles = require('./Controls.scss');
  const iconVoiceOn = require('./assets/ic_voice_on.png');
  const iconVoiceOff = require('./assets/ic_voice_off.png');
  const iconVideoOn = require('./assets/ic_video_on.png');
  const iconVideoOff = require('./assets/ic_video_off.png');
  return (
    <div className={`${styles.controlBar}`}>
      <div className="btn-group btn-group-lg" role="group" aria-label="...">
        <ControlButton
          onClick={props.toggleAudio}
          streamOpen={props.streamOpen}
          src={props.audioOn ? iconVoiceOn : iconVoiceOff}
        />
        <ControlButton
          onClick={props.toggleVideo}
          streamOpen={props.streamOpen}
          src={props.cameraOn ? iconVideoOn : iconVideoOff}
        />
        <ControlButton
          onClick={props.makeCall}
          streamOpen={props.streamOpen}
          controlOn={props.wasCallAccepted}
          className={() => this.props.disableCallButton()}
          faClass={'fa fa-phone fa-2x'}
        />
        {/* <button onClick={this.startCall}
          type="button"
          className={
            `${this.disableCallButton() ? 'disabled' : ''}
            btn btn-default`
          }
          >
          <i className='fa fa-phone' aria-hidden='true'></i>
        </button> */}
        <ControlButton
          onClick={props.stopCall}
          streamOpen={props.wasCallAccepted}
          controlOn={!props.wasCallAccepted}
          faClass={'fa fa-times fa-2x'}
        />
        {/* <button onClick={this.stopCall}
          type="button"
          className={
            `${this.disableControlButtons() ? 'disabled' : ''}
            btn btn-default`
          }>
          <i className='fa fa-times' aria-hidden='true' />
        </button> */}
      </div>
    </div>
  )
}
