import { useGLTF } from "@react-three/drei";

export function AirportTopo(props) {
  const model = useGLTF('./S10_Only_Topo_2022_2_Gltf.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./S10_Only_Topo_2022_2_Gltf.glb");

