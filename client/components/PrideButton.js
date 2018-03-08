import React from 'react';
import cn from 'classnames';
import styles from './PrideButton.css';
import { withReaction } from 'plugin-api/beta/client/hocs';
import ColoredRainbowIcon from '../assets/ColoredRainbowIcon.svg';
import GrayscaleRainbowIcon from '../assets/GrayscaleRainbowIcon.svg';

const plugin = 'talk-plugin-pride';

class PrideButton extends React.Component {
  handleClick = () => {
    const { postReaction, deleteReaction, alreadyReacted, user } = this.props;

    // If the current user does not exist, trigger sign in dialog.
    if (!user) {
      showSignInDialog();
      return;
    }

    if (alreadyReacted) {
      deleteReaction();
    } else {
      postReaction();
    }
  };

  render() {
    const { count, alreadyReacted } = this.props;
    return (
      <div className={cn(styles.container, `${plugin}-container`)}>
        <button
          className={cn(
            styles.button,
            {
              [`${styles.reacted} talk-plugin-pride-reacted`]: alreadyReacted,
            },
            `${plugin}-button`
          )}
          onClick={this.handleClick}
        >
          <span className={cn(`${plugin}-label`, styles.label)}>Pride</span>
          {alreadyReacted ? (
            <img
              src={ColoredRainbowIcon}
              className={cn(styles.icon, `${plugin}-icon`)}
            />
          ) : (
            <img
              src={GrayscaleRainbowIcon}
              className={cn(styles.icon, `${plugin}-icon`)}
            />
          )}
          <span className={cn(`${plugin}-count`)}>{count > 0 && count}</span>
        </button>
      </div>
    );
  }
}

export default withReaction('pride')(PrideButton);
