
import { Sky } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

import Lights from './Lights.jsx'
import  { SouthTerminal } from './SouthTerminal.jsx'
import { ParkingGarage } from './ParkingGarage.jsx'
import { MainTerminal } from './MainTerminal.jsx'
import { AirportTopo } from './AirportTopo.jsx'


export default function Experience()
{

    const { selection } = useControls('building', { selection:  
        {options: 
            [
                'SouthTerminal', 
                'ParkingGarage',
                'MainTerminal',
                'topography',
            ]
        } 
    })

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        { /** lights. sky and ground plane */ }
        <Lights />
        <Sky distance={1000000} />
        <mesh scale={ 100000 } rotation={[ -Math.PI * 0.5, 0, 0 ]} position={[ 0, -2000, 3000 ]} >
           <planeGeometry/>
           <mesh onClick={(e) => console.log(e.eventObject.userData.name)}StandardMaterial color={ '#aa8877' } />
        </mesh>

        {/** Buildings */}
        {/* { selection === 'SouthTerminal' && <SouthTerminal position={[ 16000, -5000, -10000 ]}/> }
        { selection === 'ParkingGarage' && <ParkingGarage position={[ 5000, -5000, 0 ]}/> }
        { selection === 'MainTerminal' && <MainTerminal position={[ 8000, -5000, -15000 ]} rotation-y={ Math.PI * 0.5 } /> }
        { selection === 'topography' && <AirportTopo position={[ 0, -3000, 0 ]}/> } */}
        
        <SouthTerminal position={[ 0, 0, 0 ]}/> 
        <ParkingGarage position={[ 0, 0, 0 ]}/> 
        <MainTerminal position={[ 0, 0, 0 ]} /> 
        <AirportTopo position={[ 0, 0, 0 ]}/> 

    </>
}