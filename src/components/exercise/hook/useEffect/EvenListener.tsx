import { Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';

useEffect(() => {
  const handleResize = () => {
    const { width, height } = Dimensions.get('window');
    console.log(`Width: ${width}, Height: ${height}`);
  };

  const subscription = Dimensions.addEventListener('change', handleResize);

  return () => {
    subscription.remove();
  };
}, []);
