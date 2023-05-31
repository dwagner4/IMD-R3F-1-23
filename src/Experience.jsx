import { MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import { Sky } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { button, folder, useControls } from 'leva'

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

import { useThree } from "@react-three/fiber";


export default function Experience()
{

    const { selection } = useControls( 'Menu', { 
        'View':  {options: 
            [
                'Aerial View',
                'South Terminal', 
                'Main Terminal',
                'Inside S. Terminal 1',
                'Inside S. Terminal 2',
            ]
        },
        visibility: folder({
            'topography': true,
            'SouthTerminal': true,
            'MainTerminal': true,
            'NorthTerminal': true,
            'Garage': true,
        }),
        Sequence: button(() => {console.log("Fuck you, bitch")})
    })

    const { sequence } = useControls({

    })


    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        { /** lights. sky and ground plane */ }
        <Lights />
        <Sky distance={1000000} />
        


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