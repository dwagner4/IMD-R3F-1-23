import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200000,
            position: [ 0, 400, 1200 ]
        } }
    >
        <Experience />
    </Canvas>
    <div id="nda">
        <h5>Confidential / not for distribution</h5>
    </div>
    </>
)