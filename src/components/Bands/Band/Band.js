import React from 'react'
import cx from 'classnames'

import styles from './Band.module.scss'

export default ({
  data: {
    id,
    name,
  },
  hovered,
  selected,
  active,
  setHoveredBand,
  resetHoveredBand,
  toggleBandSelection,
}) => (
  <div
    className={cx(styles.Band, {
      [styles.hovered]: hovered,
      [styles.selected]: selected,
      [styles.active]: active,
    })}
    key={id}
    onMouseOver={() => setHoveredBand(id)}
    onMouseOut={resetHoveredBand}
    onClick={() => toggleBandSelection(id)}
  >
    {name}
  </div>
)
