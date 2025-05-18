import { useState } from 'react'
import React, { memo } from 'react'

const LayerSwitcher = memo(function LayerSwitcher(props) {
  const [layer, setLayer] = useState('mapa')

  const changeLayer = (type) => {
    setLayer(type)
    document.dispatchEvent(new CustomEvent('change-layer', { detail: type }))
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={() => changeLayer('mapa')} disabled={layer === 'mapa'}>
        Mapa
      </button>
      <button onClick={() => changeLayer('satelite')} disabled={layer === 'satelite'}>
        Satélite
      </button>
    </div>
  )
})

export default LayerSwitcher
