export const colors = (isDarkMode: Boolean) => {
  return {
    background: isDarkMode ? '#140033' : '#FFFFFF',
    textGrey: isDarkMode ? '#FFFFFF99' : '#14003399',
    textBlack: isDarkMode ? '#FFFFFF' : '#140033',
  };
};
