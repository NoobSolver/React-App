import React from 'react';
import Modify from '../hoc/Modify';

const About = (props) => {
  setTimeout(() => {
    props.history.push("/");
  }, 4000);
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sapiente perferendis molestiae dolorum provident. Laudantium, sit veniam possimus iure sint debitis explicabo. Est eius optio saepe assumenda dolorum ipsa! Cum.</p>
    </div>
  );
};

export default Modify(About);
