import GPX from 'ol/format/GPX'
import GeoJSON from 'ol/format/GeoJSON'
import KML from 'ol/format/KML'
import { Feature } from 'ol'
import { useCallback } from 'react'
import { fromLonLat } from 'ol/proj'

export function useRouteLoader() {
  const parseFile = useCallback(async (file) => {
    const text = await file.text()
    const extension = file.name.split('.').pop().toLowerCase()

    let format
    if (extension === 'gpx') format = new GPX()
    else if (extension === 'geojson' || extension === 'json') format = new GeoJSON()
    else if (extension === 'kmz') {
      alert('KMZ no soportado directamente. Convierte a KML o GeoJSON.')
      return null
    } else {
      format = new KML()
    }

    const features = format.readFeatures(text, {
      featureProjection: 'EPSG:3857',
    })

    return features[0] // puedes cambiarlo si quieres varias features
  }, [])

  return { parseFile }
}
