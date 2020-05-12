import _ from 'lodash';
import React, {useState, useEffect} from 'react';
import {View, Animated, Platform} from 'react-native';
import {Text} from 'react-native-ui-lib';

const FLOATING_PLACEHOLDER_SCALE = 0.875;
const Constants = {isIOS: Platform.OS === 'ios'};

export default function FloatingPlaceholder({placeholder, start}) {
  const [value, setValue] = useState('');
  const [floatingPlaceholderState, setFloatingPlaceholderState] = useState(
    new Animated.Value(start ? 1 : 0),
  );
  const [
    floatingPlaceholderTranslate,
    setFloatingPlaceholderTranslate,
  ] = useState(0);

  const [focused, setFocused] = useState();
  const floatOnFocus = true;

  useEffect(() => {
    Animated.spring(floatingPlaceholderState, {
        toValue: start ? 1 : 0,
        duration: 150,
        useNativeDriver: true
      }).start();

  }, [start])
  const multiline = false;
  return (
    <View style={{position: 'absolute', top: -23}}>
      <Animated.Text
        pointerEvents="none"
        numberOfLines={1}
        suppressHighlighting
        accessible={false}
        onLayout={onPlaceholderLayout}
        style={[
          {
            transform: [
              {
                scale: floatingPlaceholderState.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, FLOATING_PLACEHOLDER_SCALE],
                }),
              },
              {
                translateY: floatingPlaceholderState.interpolate({
                  inputRange: [0, 1],
                  outputRange: multiline && Constants.isIOS ? [30, 5] : [25, 0],
                }),
              },
              {
                translateX: floatingPlaceholderState.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -floatingPlaceholderTranslate],
                }),
              },
            ],
            color: '#ccc',
            fontSize: start ? 14 : 16,
          },
        ]}>
        {placeholder}<Text>*</Text>
      </Animated.Text>
    </View>
  );

  function onPlaceholderLayout(event) {
    const {width} = event.nativeEvent.layout;
    const translate = width / 2 - (width * FLOATING_PLACEHOLDER_SCALE) / 2;
    setFloatingPlaceholderTranslate(translate / FLOATING_PLACEHOLDER_SCALE);
  }

  function shouldFloatPlaceholder(text) {
    return hasText(text) || shouldFloatOnFocus();
  }

  function hasText(v) {
    return !_.isEmpty(v || value);
  }

  function shouldFloatOnFocus() {
    return focused && floatOnFocus;
  }
}
