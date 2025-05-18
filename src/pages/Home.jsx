function Home() {
    return (
      <section>
        <h1>Visor de rutas</h1>
        <p>Sube tus rutas y visualízalas fácilmente en un mapa interactivo</p>
        <p>Soporta formatos GPX / GeoJSON / KMZ</p>
        <p>
        <a
          href="/camino-santiago.gpx"
          download
          style={{
            color: '#a5b4fc',
            textDecoration: 'underline',
            fontWeight: 500
          }}
        >
          📥 Descargar archivo de ejemplo (.gpx)
        </a>
      </p>
      </section>
    )
  }
  
  export default Home
  