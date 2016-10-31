import React from 'react';
// import ReactDOM from 'react-dom';

export default function renderApp({ store }) {
  if (!store) throw new Error('Missing required store property');

  return (
    <div>
      APP GOES HERE!
    </div>
  );
}
