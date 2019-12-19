import React from 'react';
import { withTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import '../css/language.css';

const LanguageButton = ({ t, i18n, className, changeDolarCurrency }) => {
  const changeLanguage = (countryCode) => {
    changeDolarCurrency();
    i18n.changeLanguage(countryCode);
  };

  return (
    <div className="row">
      <div className={className}>
        <ReactFlagsSelect
          className="language-menu"
          countries={['US', 'AR']}
          customLabels={{ US: 'English', AR: 'Español' }}
          placeholder={t('Select Language')}
          defaultCountry="US"
          selectedSize={18}
          onSelect={(countryCode) => changeLanguage(countryCode)}
        />
      </div>
    </div>
  );
};

export default withTranslation()(LanguageButton);
