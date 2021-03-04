import React, { useLayoutEffect } from 'react';
// useEffect fue remplazado por useLayoutEffect investigar como funciona
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
// import { Redirect } from 'react-router-dom';
import '../assets/styles/components/Player.scss';
import NotFound from '../containers/NotFound';

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button
          type='button'
          onClick={() => {
            props.history.goBack();
          }}
        >
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
    // <Redirect to='/404/' />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProp = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProp)(Player);
