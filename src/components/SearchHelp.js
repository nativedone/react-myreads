import React from 'react'

const SEARCH_TERMS =
  'https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md'

const SearchHelp = () => (
  <div className="help-search">
    Top searched: 'react' and 'learn'. See{' '}
    <a href={SEARCH_TERMS}>available terms</a>{' '}
  </div>
)

export default SearchHelp
