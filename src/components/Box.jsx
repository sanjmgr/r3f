import React from 'react'
import { useBox } from '@react-three/cannon'

const Box = () => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 1, 0],
  }))

  const yVelocity = () => {
    api.velocity.set(0, 2, 0)
  }

  return (
    <mesh ref={ref} position={[0, 1, 0]} onClick={yVelocity}>
      <boxBufferGeometry attach='geometry' />
      <meshBasicMaterial attach='material' wireframe='true' color='hotpink' />
    </mesh>
  )
}

export default Box
