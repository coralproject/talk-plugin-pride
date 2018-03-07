import React from 'react';
import cn from 'classnames';
import styles from './PrideButton.css';
import { withReaction } from 'plugin-api/beta/client/hocs';
import RainbowIcon from './RainbowIcon';

class PrideButton extends React.Component {
  handleClick = () => {
    const { postReaction, deleteReaction, alreadyReacted } = this.props;

    if (alreadyReacted) {
      deleteReaction();
    } else {
      postReaction();
    }
  };

  render() {
    const { alreadyReacted } = this.props;
    return (
      <div className={cn(styles.container, 'talk-plugin-pride-container')}>
        <a
          className={cn(styles.button, 'talk-plugin-pride-button')}
          onClick={this.handleClick}
        >
          {alreadyReacted ? (
            <RainbowIcon />
          ) : (
            <RainbowIcon paletteType="grayscale" />
          )}
        </a>
      </div>
    );
  }
}

export default withReaction('pride')(PrideButton);
