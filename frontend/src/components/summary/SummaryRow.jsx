import React from 'react';
import '../../css/main.css';

const SummaryRow = ({ summary }) => {
  const { createAt, total, items } = summary;
  const cantItems = items.length;
  return (
    <div className="main-row row">
      <div className="col-5 main-menu-text-item  align-self-center">
        <h5>{createAt}</h5>
      </div>
      <div className="col-3 main-menu-text-item align-self-center">
        <h5>{cantItems}</h5>
      </div>
      <div className="col-4 main-menu-text-item align-self-center">
        <h5>${total}</h5>
      </div>
    </div>
  );
};

export default SummaryRow;
