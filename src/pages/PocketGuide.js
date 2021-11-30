import './PocketGuide.css';
import IconButton from '@mui/material/IconButton';
import { alphabet, numbers } from '../util/constants.js';
import { useNavigate } from 'react-router-dom';

function Bananas() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>ASL Pocket Guide</h1>
      <h2>Letters</h2>
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
      <h2>Numbers</h2>
      {
        numbers.map(number =>
          <>
            <IconButton color="primary" aria-label={number} onClick={() => {navigate(`/pocket-guide/${number}`)}}>
              <svg height="50" width="50">
                <text x="10" y="40" class="text-icon">{number}</text>
              </svg>
            </IconButton>
          </>
        )
      }
    </div>
  )
}

export default Bananas;
