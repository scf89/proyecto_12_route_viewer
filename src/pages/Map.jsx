import FileUpload from '../components/FileUpload'
import MapViewer from '../components/MapViewer'
import LayerSwitcher from '../components/LayerSwitcher'

function MapPage() {
  return (
    <section>
      <FileUpload />
      <LayerSwitcher />
      <MapViewer />
    </section>
  )
}

export default MapPage
