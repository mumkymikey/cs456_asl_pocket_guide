import './Resources.css';
import { resource_links } from '../util/constants.js';

function Resources() {
  return(
    <div>
      <h1 style={{ textAlign: 'center' }}>Resources</h1>
      <h2>About American Sign Language</h2>
      <ul>
        <li>
          <a href={resource_links['association_of_deaf']} target='_blank' rel='noreferrer'>
           National Association of Deaf on ASL
          </a>
        </li>
        <br />
        <li>
          <a href={resource_links['asl_yt_channel']} target='_blank' rel='noreferrer'>
            ASL Instructional Youtube Channel
          </a>
        </li>
        <br />
        <li>
          <a href={resource_links['asl_for_children']} target='_blank' rel='noreferrer'>
            ASL for Children
          </a>
        </li>
      </ul>

      <h2>About Hearing Loss</h2>
      <ul>
        <li>
          <a href={resource_links['hearing_loss_association']} target='_blank' rel='noreferrer'>
            Hearing Loss Association of America
          </a>
        </li>
        <br />
        <li>
          <a href={resource_links['hearing_loss_in_children']} target='_blank' rel='noreferrer'>
            Hearing Loss in Children
          </a>
        </li>
        <br />
        <li>
          <a href={resource_links['asha_organizations']} target='_blank' rel='noreferrer'>
            ASHA Hearing Loss Organizations and Associations
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Resources;
