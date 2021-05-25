import { Physics } from '@react-three/cannon'
import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Box, Plane } from './components'
import './styles.css'

const App = () => {
  return (
    <div className='webgl'>
      <Canvas>
        <OrbitControls />
        <Stars />
        <Physics>
          <Box />
          <Plane />
        </Physics>
      </Canvas>
    </div>
  )
}

export default App
