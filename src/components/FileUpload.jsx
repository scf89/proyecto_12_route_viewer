import { useRouteLoader } from '../hooks/useRouteLoader'
import { useRoutesDispatch } from '../context/RouteContext'
import React, { useState, useRef, memo } from 'react'

const FileUpload = memo(function FileUpload(props) {
  const { parseFile } = useRouteLoader()
  const dispatch = useRoutesDispatch()

  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fileInputRef = useRef()

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) {
      setError('Por favor selecciona un archivo.')
      return
    }

    try {
      setLoading(true)
      const feature = await parseFile(file)
      dispatch({ type: 'CLEAR_ROUTES' })
      dispatch({ type: 'ADD_ROUTE', payload: feature })
    } catch (err) {
      setError('No se pudo procesar el archivo. Asegúrate de que sea un formato válido.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <input
        type="file"
        accept=".gpx,.kmz,.geojson,.json"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      
      <button type="button" onClick={triggerFileInput} style={{ marginBottom: '1rem' }}>
        {file ? `📁 ${file.name}` : '📂 Seleccionar archivo'}
      </button>

      <br />

     
      <button type="submit" disabled={loading || !file}>
        {loading ? 'Cargando...' : 'Subir archivo'}
      </button>

      
      {error && <p style={{ color: 'salmon', marginTop: '0.5rem' }}>{error}</p>}
    </form>
  )
})

export default FileUpload
