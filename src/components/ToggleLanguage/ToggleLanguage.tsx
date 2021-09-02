import React from 'react';

export const locale = {
  toggleLanguage: {
    enToggleTitle: 'English',
    ruToggleTitle: 'Русский',
  }
};

const EN_LANGUAGE_KEY = '/en/';
const RU_LANGUAGE_KEY = '/ru/';

export function ToggleLanguage() {
  return (
    <select>
      <option value={EN_LANGUAGE_KEY} lang="en">
        {locale.toggleLanguage.enToggleTitle}
      </option>
      <option value={RU_LANGUAGE_KEY} lang="ru">
        {locale.toggleLanguage.ruToggleTitle}
      </option>
    </select>
  )
}

