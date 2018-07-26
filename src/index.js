import React from 'react'
import ReactDOM from 'react-dom'
import { Entity, Scene } from 'aframe-react'

const Panel = ({ children, position }) => (
  <Entity geometry={{ primitive: 'plane' }} material={{ color: 'steelblue', metalness: 0.25 }} position={position}>
    {children}
  </Entity>
)

const Text = ({ children }) => (
  <Entity text={{ align: 'center', width: 3, value: children }} />
)

const App = () => (
  <Scene>
    <Panel position={{ x: 0, y: 1.5, z: -1 }}>
      <Text>o hey</Text>
    </Panel>
  </Scene>
)

ReactDOM.render(<App />, document.getElementById('app'))
