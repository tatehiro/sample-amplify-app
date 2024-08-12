import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@aws-amplify/ui-react/styles.css'
import { Amplify} from 'aws-amplify'
import { signOut } from "aws-amplify/auth"
import { Authenticator } from '@aws-amplify/ui-react'
import outputs from '../amplify_outputs.json'

Amplify.configure(outputs)

function App() {
  const [count, setCount] = useState(0)

  async function handleSignOut() {
    await signOut()
  }

  return (
    <>
      <Authenticator>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <p>
          <a className="App-link" href="." onClick={handleSignOut}>Sign Out</a>
        </p>
      </Authenticator>
    </>
  )
}

export default App
