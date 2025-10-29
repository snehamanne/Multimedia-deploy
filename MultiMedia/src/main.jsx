import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Image } from './Components/Image.jsx'
import { Video } from './Components/Video.jsx'
import { Audio } from './Components/Audio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Image />
    <Audio />
    <Video />
  </StrictMode>,
)
