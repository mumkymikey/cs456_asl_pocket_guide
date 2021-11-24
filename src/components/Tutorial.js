import PropTypes from 'prop-types';
import EmbeddedTutorialVideo from './EmbeddedTutorialVideo.js';
import { alphabet_video_tutorials } from '../util/constants.js';

function Tutorial({ letter }) {
  return(
    <div>
      <h1>How to Sign the Letter {letter}</h1>
      <EmbeddedTutorialVideo embedId={alphabet_video_tutorials[letter]} />
    </div>
  )
}

Tutorial.propTypes = {
  letter: PropTypes.string.isRequired
}


export default Tutorial;
