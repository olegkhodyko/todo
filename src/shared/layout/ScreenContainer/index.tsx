import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';

interface ScreenContainerProps extends PropsWithChildren<ViewProps> {
  testID: string;
}

const ScreenContainer: FC<ScreenContainerProps> = ({
  testID,
  children,
  style,
  ...rest
}): React.JSX.Element => {
  const insets = useSafeAreaInsets();

  const safeAreaStyle: ViewStyle = {
    flex: 1,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingHorizontal: Math.max(insets.left, insets.right),
    backgroundColor: 'white',
    overflow: 'hidden',
  };

  return (
    <View testID={testID} style={[safeAreaStyle, style]} {...rest}>
      {children}
    </View>
  );
};

export default ScreenContainer;
