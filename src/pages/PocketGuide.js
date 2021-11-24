import './PocketGuide.css';
import IconButton from '@mui/material/IconButton';
import { alphabet } from '../util/constants.js';
import { useNavigate } from 'react-router-dom';

function Bananas() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>ASL Pocket Guide</h1>
      {
        alphabet.map(letter =>
          <>
            <IconButton color="primary" aria-label={letter} onClick={() => {navigate(`/pocket-guide/${letter}`)}}>
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
