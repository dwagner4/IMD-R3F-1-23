import { MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import { Sky } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

import Lights from './Lights.jsx'
import  { SouthTerminal } from './models/SouthTerminal.jsx'
import { ParkingGarage } from './models/ParkingGarage.jsx'
import { MainTerminal } from './models/MainTerminal.jsx'
import { AirportTopo } from './models/AirportTopo.jsx'
import { BuildingMasses } from './models/BuildingMasses.jsx'
import { CarAgency } from './models/CarAgency.jsx'
import { CargoPlanes } from './models/CargoPlanes.jsx'
import { ConcourseD } from './models/ConcourseD.jsx'
import { FuelTanks } from './models/FuelTanks.jsx'
import { GTC } from './models/GTC.jsx'
import { LinkStation } from './models/LinkStation.jsx'
import { NEGTC } from './models/NEGTC.jsx'
import { NorthTerminal } from './models/NorthTerminal.jsx'
import { PlanesParked } from './models/PlanesParked.jsx'
import { Planes3 } from './models/Planes3.jsx'
import { SD4 } from './models/SD4.jsx'
import { TrainTracks } from './models/TrainTracks.jsx'
import { Terminal2 } from './models/Terminal2.jsx'
import { Terminal2Roadway } from './models/Terminal2Roadway.jsx'
import { Trucks } from './models/Trucks.jsx'


export default function Experience()
{

    const { selection } = useControls('building', { selection:  
        {options: 
            [
                'airport',
                'SouthTerminal', 
                'ParkingGarage',
                'MainTerminal',
                'buildings',
                'car agency',
                'cargo planes',
                'concourse D',
                'fuel tanks',
                'GTC',
                'link station',
                'north terminal',
                'planes 1',
                'planes 3',
                'train tracks',
                'terminal 2',
                'roadway',
                'trucks',
                // 'airport',
            ]
        } 
    })

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        { /** lights. sky and ground plane */ }
        <Lights />
        <Sky distance={1000000} />
        { selection !== 'airport' && <mesh scale={ 100000 } rotation={[ -Math.PI * 0.5, 0, 0 ]} position={[ 0, -2000, 3000 ]} >
           <planeGeometry/>
           <meshStandardMaterial color={ '#aa8877' } />
        </mesh>}

        {/** Buildings */}
        {/* { selection === 'SouthTerminal' && <SouthTerminal position={[ 16000, -5000, -10000 ]}/> } */}
        { selection === 'SouthTerminal' && <SouthTerminal position={[ 0, 0, 0 ]}/> }
        { selection === 'ParkingGarage' && <ParkingGarage position={[ 0, 0, 0 ]}/> }
        { selection === 'MainTerminal' && <MainTerminal position={[ 0, 0, 0 ]} rotation-y={ Math.PI * 0.5 } /> }
        { selection === 'topography' && <AirportTopo position={[ 0, 0, 0 ]}/> }
        { selection === 'buildings' && <BuildingMasses position={[ 0, 0, 0 ]} /> }
        { selection === 'car agency' && <CarAgency position={[ 0, 0, 0 ]} /> }
        { selection === 'cargo planes' && <CargoPlanes position={[ 0, 0, 0 ]} /> }
        { selection === 'concourse D' && <ConcourseD position={[ 0, 0, 0 ]} /> }
        { selection === 'fuel tanks' && <FuelTanks position={[ 0, 0, 0 ]} /> }
        { selection === 'GTC' && <GTC position={[ 0, 0, 0 ]} /> }
        { selection === 'Link station' && <LinkStation position={[ 0, 0, 0 ]} /> }

        { selection === 'North Terminal' && <NorthTerminal position={[ 0, 0, 0 ]}/> }
        { selection === 'planes 1' && <PlanesParked position={[ 0, 0, 0 ]}/> }
        { selection === 'planes 3' && <Planes3 position={[ 0, 0, 0 ]}/> }

        { selection === 'train tracks' && <TrainTracks Position={[ 0, 0, 0 ]} /> }
        { selection === 'terminal 2' && <Terminal2 Position={[ 0, 0, 0 ]} /> }
        { selection === 'roadway' && <Terminal2Roadway Position={[ 0, 0, 0 ]} /> }
        { selection === 'trucks' && <Trucks Position={[ 0, 0, 0 ]} /> }

        
        {selection === 'airport' && <>
                <SouthTerminal position={[ 0, 0, 0 ]}/> 
                <ParkingGarage position={[ 0, 0, 0 ]}/> 
                <MainTerminal position={[ 0, 0, 0 ]} /> 
                <AirportTopo position={[ 0, 0, 0 ]}/> 
                <BuildingMasses position={[ 0, 0, 0 ]} />
                <CarAgency position={[ 0, 0, 0 ]} />
                <CargoPlanes position={[ 0, 0, 0 ]} />
                <ConcourseD position={[ 0, 0, 0 ]} />
                <FuelTanks position={[ 0, 0, 0 ]} />
                <GTC position={[ 0, 0, 0 ]} />
                <LinkStation position={[ 0, 0, 0 ]} />

                <NorthTerminal position={[ 0, 0, 0 ]}/>
                <PlanesParked position={[ 0, 0, 0 ]}/>
                <Planes3 position={[ 0, 0, 0 ]}/>

                <TrainTracks Position={[ 0, 0, 0 ]} />
                <Terminal2 Position={[ 0, 0, 0 ]} />
                <Terminal2Roadway Position={[ 0, 0, 0 ]} />
                <Trucks Position={[ 0, 0, 0 ]} />
            </>
        }
    </>
}