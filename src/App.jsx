import { Post } from './Post'
import { Header } from './components/Header'

import './styles.css'

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="Eduardo Diniz" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aut omnis eveniet animi, distinctio velit quibusdam quisquam, commodi id quidem vero quae. Sapiente assumenda earum consequatur expedita, ut numquam saepe?" 
      />
      <Post 
        author="Outro Author" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aut omnis eveniet animi, distinctio velit quibusdam quisquam, commodi id quidem vero quae. Sapiente assumenda earum consequatur expedita, ut numquam saepe?" 
      />
    </>
  )
}

