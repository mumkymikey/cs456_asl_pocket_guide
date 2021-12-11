import './Resources.css';
import { resource_links } from '../util/constants.js';

function Resources() {
  return(
    <div>
      <h1 style={{ textAlign: 'center' }}>Resources</h1>
      <h2>About American Sign Language</h2>
      <ul>
        <li>
          <p>
            <a href={resource_links['association_of_deaf']} target='_blank' rel='noreferrer'>
             National Association of the Deaf
            </a> describes general info on ASL, as well as resources to learning the language.
          </p>
        </li>
        <li>
          <p>
            <a href={resource_links['asl_yt_channel']} target='_blank' rel='noreferrer'>
              ASL Instructional Youtube Channel
            </a> that has hundreds of videos showing examples of words in ASL.
          </p>
        </li>
        <li>
          <p>
            <a href={resource_links['asl_for_children']} target='_blank' rel='noreferrer'>
              American Society for Deaf Children
            </a> provides resources for children learning ASL.
          </p>
        </li>
      </ul>

      <h2>About Hearing Loss</h2>
      <ul>
        <li>
          <p>
            <a href={resource_links['hearing_loss_association']} target='_blank' rel='noreferrer'>
              Hearing Loss Association of America
            </a> contains all sorts of information relating to hearing loss at any age.
          </p>
        </li>
        <li>
          <p>
            <a href={resource_links['hearing_loss_in_children']} target='_blank' rel='noreferrer'>
              Hearing Loss in Children
            </a> is a resource from the CDC that describes hearing loss specifically for children.
          </p>
        </li>
        <li>
          <p>
            <a href={resource_links['asha_organizations']} target='_blank' rel='noreferrer'>
              ASHA Hearing Loss Organizations and Associations
            </a> contains information regarding several orgs related to hearing loss.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Resources;
