import React from 'react'

import Band from './Band/BandContainer'

export default ({
  bands,
  className,
}) => (
  <div className={className}>
    {bands.map((band) => (
      <Band
        data={band}
      />
    ))}
  </div>
)
