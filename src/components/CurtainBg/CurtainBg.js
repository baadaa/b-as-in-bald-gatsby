import React from 'react';
import './CurtainBg.scss';

export default props => (
  <div className="bgArea">
    <div className="content">
      <div className="content__item" id="content-item-01">
        {props.children}
      </div>
    </div>
  </div>
);
