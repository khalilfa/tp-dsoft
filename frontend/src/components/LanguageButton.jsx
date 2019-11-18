import React from 'react';
import { withTranslation } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import '../css/language.css';

const LanguageButton = ({ t, i18n }) => (
  <ReactFlagsSelect
    className="language-menu"
    countries={['US', 'AR']}
    customLabels={{ US: 'English', AR: 'Español' }}
    placeholder={t('Select Language')}
    defaultCountry="US"
    selectedSize={22}
    onSelect={(countryCode) => i18n.changeLanguage(countryCode)}
  />
);

export default withTranslation()(LanguageButton);
