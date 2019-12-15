import React, { useEffect, useState } from 'react';

const EditClient = ({ t }) => {
  const user = this.props.match.params.idClient;

  return (
    <div className="row">
      <div className="col-12">
        <h2>{t('Edit information')}</h2>
      </div>
    </div>
  );
};

export default EditClient;
