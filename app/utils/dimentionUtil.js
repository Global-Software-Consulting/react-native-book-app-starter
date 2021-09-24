import {useEffect, useMemo, useState,useCallback} from 'react';
import {Dimensions} from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { useDeviceOrientation } from '@react-native-community/hooks'

export function useOrientation(){
  const orientation = useDeviceOrientation()

  
  const onChangeDimensions = useCallback(() => {
    if (orientation.portrait) {
     return {width:widthPercentageToDP,height:heightPercentageToDP} 
    } else {
      return {width:heightPercentageToDP,height:widthPercentageToDP} 
      
    }
  },[orientation])
  return useMemo(() => onChangeDimensions(), [orientation])

}