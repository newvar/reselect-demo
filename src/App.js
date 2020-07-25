import React from 'react'
import Users from 'components/Users/UsersContainer'
import Bands from 'components/Bands/BandsContainer'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <Users className={styles.Users} />
      <Bands className={styles.Bands} />
    </div>
  )
}

export default App
