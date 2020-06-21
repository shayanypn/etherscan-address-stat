import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <main className="not-found text-center">
      <h1>404</h1>
      <p>Sorry, cannot find the page.</p>
      <br />
      <br />
      <button
        className="btn btn-primary btn-sm btn-round"
        onClick={() => history.push('/')}
      >
        Back to Home
      </button>
    </main>
  );
};

export default NotFound;
