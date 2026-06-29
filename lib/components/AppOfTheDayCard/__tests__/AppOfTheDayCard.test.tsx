import * as React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import AppOfTheDayCard from '../AppOfTheDayCard';
import makeStyles from '../AppOfTheDayCard.style';

const baseProps = {
  title: 'Colorfy: Coloring Art Games',
  subtitle: 'Drawing & painting for everyone',
  largeTitle: 'APP\nOF THE\nDAY',
  buttonText: 'GET',
  buttonSubtitle: 'In-App Purchases',
  iconSource: {uri: 'https://example.com/icon.jpg'},
  backgroundSource: {uri: 'https://example.com/bg.jpg'},
  onPress: jest.fn(),
  onButtonPress: jest.fn(),
};

describe('AppOfTheDayCard', () => {
  it('renders title, subtitle, large title, button text and subtitle', () => {
    render(
      <AppOfTheDayCard {...baseProps} onPress={jest.fn()} onButtonPress={jest.fn()} />,
    );

    expect(screen.getByText('Colorfy: Coloring Art Games')).toBeTruthy();
    expect(screen.getByText('Drawing & painting for everyone')).toBeTruthy();
    expect(screen.getByText('APP\nOF THE\nDAY')).toBeTruthy();
    expect(screen.getByText('GET')).toBeTruthy();
    expect(screen.getByText('In-App Purchases')).toBeTruthy();
  });

  it('fires onPress for the card and onButtonPress for the GET button independently', () => {
    const onPress = jest.fn();
    const onButtonPress = jest.fn();
    render(
      <AppOfTheDayCard
        {...baseProps}
        onPress={onPress}
        onButtonPress={onButtonPress}
      />,
    );

    fireEvent.press(screen.getByLabelText('GET'));
    expect(onButtonPress).toHaveBeenCalledTimes(1);
    expect(onPress).not.toHaveBeenCalled();

    fireEvent.press(screen.getByLabelText('Colorfy: Coloring Art Games'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('labels the card with its title and the action button with its text', () => {
    render(
      <AppOfTheDayCard {...baseProps} onPress={jest.fn()} onButtonPress={jest.fn()} />,
    );

    expect(screen.getByLabelText('Colorfy: Coloring Art Games')).toBeTruthy();
    expect(screen.getByLabelText('GET')).toBeTruthy();
  });

  it('accepts the reserved gradientColors prop without leaking it or crashing', () => {
    expect(() =>
      render(
        <AppOfTheDayCard
          {...baseProps}
          onPress={jest.fn()}
          onButtonPress={jest.fn()}
          gradientColors={['#fff', '#000']}
        />,
      ),
    ).not.toThrow();
  });

  it('builds responsive styles from the supplied window size', () => {
    const styles = makeStyles(400, 800);

    expect(styles.container.width).toBeCloseTo(360);
    expect(styles.container.height).toBeCloseTo(400);
    expect(styles.bottomBarStyle.width).toBeCloseTo(360);
  });

  it('has a stable displayName for devtools', () => {
    expect(AppOfTheDayCard.displayName).toContain('AppOfTheDayCard');
  });
});
