import './PocketGuide.css';
import IconButton from '@mui/material/IconButton';
import { alphabet, numbers } from '../util/constants.js';
import { useNavigate } from 'react-router-dom';

function PocketGuide() {
  let navigate = useNavigate();

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Pocket Guide</h1>
      <p style={{ fontSize: '175%' }}>Select a letter/number to view its sign!</p>
      <h2>Letters</h2>
      {
        alphabet.map(letter =>
          <>
            <IconButton color="primary" aria-label={letter} onClick={() => {navigate(`/pocket-guide/${letter}`)}}>
              <svg height="50" width="50">
                <text x="13" y="38" class="text-icon">{letter}</text>
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
                <text x="13" y="38" class="text-icon">{number}</text>
              </svg>
            </IconButton>
          </>
        )
      }
    </div>
  )
}

export default PocketGuide;
