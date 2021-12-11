import './Home.css';
import asl_image from '../images/ASL.png';

function Home() {
  return(
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to the ASL Pocket Guide!</h1><br />
      <p>
        American Sign Language (ASL) is the primary sign language for Deaf communities in the US.
        And like with any language, there's a steep learning curve in becoming fluent in ASL.
        That's what this pocket guide exists for!
      </p>
      <img src={asl_image} alt='ASL' class='center-image' />
      <p>
        The ASL Pocket Guide provides a way for users to quickly find out how to sign each letter,
        The guide also provides the user with resources to learning ASL, as well as resources
        regarding hearing loss in general.
      </p>
      <p>
        Navigate the pocket guide by using the sidebar navigation.
      </p>
    </div>
  )
}

export default Home;
