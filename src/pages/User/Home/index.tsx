import React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/candidate">Candidate</Link>
      </nav>
    </>
  )
}

export default Home
