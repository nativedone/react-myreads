import React from 'react'

import FallbackComponent from './FallbackComponent'

const NoBook = () => (
  <FallbackComponent message={'No book to show!'}>
    {(theme, message) => (
      <div className={theme.light}>
        <h1>{message}</h1>
        <h2>Verify if you're logged in</h2>
      </div>
    )}
  </FallbackComponent>
)

export default NoBook
