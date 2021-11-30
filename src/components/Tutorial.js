import PropTypes from 'prop-types';
import EmbeddedTutorialVideo from './EmbeddedTutorialVideo.js';
import { alphanumeric_video_tutorials } from '../util/constants.js';

function Tutorial({ alphanumeric }) {
  return(
    <div>
      <h1>How to Sign: {alphanumeric}</h1>
      <EmbeddedTutorialVideo embedId={alphanumeric_video_tutorials[alphanumeric]} />
    </div>
  )
}

Tutorial.propTypes = {
  alphanumeric: PropTypes.string.isRequired
}

export default Tutorial;
