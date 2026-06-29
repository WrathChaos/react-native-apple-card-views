import * as React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import AppleCard from '../AppleCard';
import makeStyles from '../AppleCard.style';

const baseProps = {
  source: {uri: 'https://example.com/hero.jpg'},
  smallTitle: 'NEW GAME',
  largeTitle: 'The Brilliance of Brawl Stars',
  footnote: 'The next game from the makers of Clash Royale is here.',
  onPress: jest.fn(),
};

describe('AppleCard', () => {
  it('renders the small title, large title and footnote text', () => {
    render(<AppleCard {...baseProps} onPress={jest.fn()} />);

    expect(screen.getByText('NEW GAME')).toBeTruthy();
    expect(screen.getByText('The Brilliance of Brawl Stars')).toBeTruthy();
    expect(
      screen.getByText(
        'The next game from the makers of Clash Royale is here.',
      ),
    ).toBeTruthy();
  });

  it('calls onPress when the card is pressed', () => {
    const onPress = jest.fn();
    render(<AppleCard {...baseProps} onPress={onPress} />);

    fireEvent.press(screen.getByRole('button'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('exposes a button accessibility role defaulting its label to the large title', () => {
    render(<AppleCard {...baseProps} onPress={jest.fn()} />);

    expect(
      screen.getByLabelText('The Brilliance of Brawl Stars'),
    ).toBeTruthy();
  });

  it('honours an explicit accessibilityLabel override', () => {
    render(
      <AppleCard
        {...baseProps}
        onPress={jest.fn()}
        accessibilityLabel="Featured game card"
      />,
    );

    expect(screen.getByLabelText('Featured game card')).toBeTruthy();
  });

  it('uses the documented `footnote` prop name (regression guard for README drift)', () => {
    render(
      <AppleCard {...baseProps} onPress={jest.fn()} footnote="Custom note" />,
    );

    expect(screen.getByText('Custom note')).toBeTruthy();
  });

  it('builds responsive styles from the supplied window size', () => {
    const styles = makeStyles(400, 800);

    expect(styles.backgroundStyle.width).toBeCloseTo(360);
    expect(styles.backgroundStyle.height).toBeCloseTo(400);
    expect(styles.topHeaderContainer.width).toBeCloseTo(280);
  });

  it('has a stable displayName for devtools', () => {
    expect(AppleCard.displayName).toContain('AppleCard');
  });
});
