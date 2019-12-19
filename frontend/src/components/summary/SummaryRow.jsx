import React from 'react';
import '../../css/main.css';

const SummaryRow = ({ summary, isDolarCurrency }) => {
  const { createAt, total, items } = summary;
  const cantItems = items.length;

  function valueInDollars(value){
    return (value / 60).toFixed(2);
  }
  
  function changeCurrency(value){
    const { total } = value;
    return isDolarCurrency ? `u$s ${valueInDollars(total)}` : `$ ${total}`; 
  }


  return (
    <div className="main-row row">
      <div className="col-5 main-menu-text-item  align-self-center">
        <h5>{createAt}</h5>
      </div>
      <div className="col-3 main-menu-text-item align-self-center">
        <h5>{cantItems}</h5>
      </div>
      <div className="col-4 main-menu-text-item align-self-center">
        <h5>{changeCurrency({total})}</h5>
      </div>
    </div>
  );
};

export default SummaryRow;
