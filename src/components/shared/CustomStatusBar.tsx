import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeContext } from 'styled-components';

const CustomStatusBar: React.FunctionComponent = () => {
  const themeContext = useContext(ThemeContext);
  const defaultColor = themeContext.colors.STATUS_BAR_DEFAULT;

  return <StatusBar backgroundColor={defaultColor} />;
};

export default CustomStatusBar;
