import './PocketGuide.css';
import IconButton from '@mui/material/IconButton';
import { alphabet } from '../util/constants.js';

function Bananas() {
  return (
    <div>
      <h1>ASL Pocket Guide</h1>
      {
        alphabet.map(letter =>
          <>
            <IconButton color="primary" aria-label={letter}>
              <svg height="50" width="50">
                <text x="10" y="40" class="text-icon">{letter}</text>
              </svg>
            </IconButton>
          </>
        )
      }
    </div>
  )
}

export default Bananas;
