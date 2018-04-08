import React from 'react'
import Spinner from 'react-spinner-material'

import ShowError from './ShowError'

const Loading = ({ status }) => (
  <div className="loading-wrapper">
    {status.value === 'loading' ? (
      <Spinner
        size={120}
        spinnerColor={'#F7BB41'}
        spinnerWidth={5}
        visible={true}
      />
    ) : (
      <ShowError message={status.message} />
    )}
  </div>
)

export default Loading
