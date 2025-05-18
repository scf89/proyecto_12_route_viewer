# 🗺️ Visor de Rutas GPX / GeoJSON

Este proyecto es una SPA construida con **React** que permite cargar archivos de rutas en formato `.gpx`, `.geojson`y `.kmz` para visualizarlos en un mapa interactivo.

## ✨ Características

- Visualización de rutas con **OpenLayers**.
- Soporte para formatos `.gpx`, `.geojson`, `.kmz`.
- Dos capas base: **mapa** y **satélite**, conmutables.
- SPA con React Router (`react-router-dom`).
- Uso de `useReducer` para manejar el estado de las rutas.
- Custom hook `useRouteLoader` para cargar y parsear archivos.
- Sin re-renderizados innecesarios.
- Estilos básicos con diseño limpio y responsive.