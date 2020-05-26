import React from 'react';
import './attribution.scss';

export default class Attribution extends React.Component {
  render() {
    return (
      <div className="attribution-page background">
        <div className="wrapper">
          <h1>Attribution</h1>
          <div className="attribution-container">
            <div className="attribution">
              <img src="https://via.placeholder.com/100x100"></img>
              <p>value proposition by Chanut is Industries</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100x100"></img>
              <p>value proposition by Chanut is Industries</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100x100"></img>
              <p>value proposition by Chanut is Industries</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100x100"></img>
              <p>value proposition by Chanut is Industries</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
