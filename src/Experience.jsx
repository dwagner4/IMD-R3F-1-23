import { Sky } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import  { SouthTerminal } from './SouthTerminal.jsx'
import Lights from './Lights.jsx'

export default function Experience()
{
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } /> */}

        <Lights />


        <Sky distance={1000000} />
        <mesh scale={ 100000 } rotation={[ -Math.PI * 0.5, 0, 0 ]} position={[ 0, -2000, 3000 ]} >
           <planeGeometry/>
           <meshStandardMaterial color={ '#aa8877' } />
        </mesh>

        <SouthTerminal />

    </>
}