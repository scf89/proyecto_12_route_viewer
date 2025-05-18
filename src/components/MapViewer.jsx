import { useEffect, useRef } from 'react'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import { OSM, XYZ } from 'ol/source'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import { Vector as VectorSource } from 'ol/source'
import { useRoutesState } from '../context/RouteContext'
import { fromLonLat } from 'ol/proj'

function MapViewer() {
  const mapRef = useRef(null)
  const mapObj = useRef(null)
  const osm = new TileLayer({ source: new OSM(), visible: true })
  const sat = new TileLayer({
    source: new XYZ({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    }),
    visible: false,
  })
  const vectorSource = useRef(new VectorSource())

  const { routes } = useRoutesState()

  useEffect(() => {
    if (!mapObj.current){
      mapObj.current = new Map({
        target: mapRef.current,
        layers: [osm, sat, new VectorLayer({ source: vectorSource.current })],
        view: new View({
          center: fromLonLat([-3.7038, 40.4168]),
          zoom: 6,
        }),
      })
    }

    const handleLayerChange = (e) => {
      const layer = e.detail
      osm.setVisible(layer === 'mapa')
      sat.setVisible(layer === 'satelite')
    }

    document.addEventListener('change-layer', handleLayerChange)
    return () => document.removeEventListener('change-layer', handleLayerChange)
  }, [])

  useEffect(() => {
    vectorSource.current.clear()

  if (routes.length === 0) return

  routes.forEach((feature) => {
    vectorSource.current.addFeature(feature)
  })

  const map = mapObj.current
  const view = map.getView()

  const extent = vectorSource.current.getExtent()

  view.fit(extent, {
    padding: [50, 50, 50, 50], 
    duration: 1000, 
    maxZoom: 16,    
  })
  }, [routes])

  return <div ref={mapRef} style={{ height: '500px', marginTop: '1rem' }}></div>
}

export default MapViewer
