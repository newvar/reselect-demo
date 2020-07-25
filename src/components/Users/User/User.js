import React from 'react'
import cx from 'classnames'

import styles from './User.module.scss'

export default ({
  data: {
    id,
    firstName,
    lastName,
  },
  hovered,
  selected,
  active,
  setHoveredUser,
  resetHoveredUser,
  toggleUserSelection,
}) => (
  <div
    className={cx(styles.User, {
      [styles.hovered]: hovered,
      [styles.selected]: selected,
      [styles.active]: active,
    })}
    key={id}
    onMouseOver={() => setHoveredUser(id)}
    onMouseOut={resetHoveredUser}
    onClick={() => toggleUserSelection(id)}
  >
    {firstName} {lastName}
  </div>
)
