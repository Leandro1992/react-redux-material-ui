import React from 'react'
import PropTypes from 'prop-types'

import useStyles from './use-styles'

const Dashboard = ({ id }) => {
  const styles = useStyles()
  const dashboardUrl = 'https://reactjs.org/'
  return (
    <div className={styles.container}>
      {dashboardUrl ? (
        <iframe
          src={dashboardUrl}
          title="Google"
          className={styles.frame}
          height="100%"
          width="100%"
        />
      ) : (
        <p>No dashboard found</p>
      )}
    </div>
  )
}
Dashboard.propTypes = {
  id: PropTypes.string,
}

Dashboard.defaultProps = {
  id: '',
}

export default React.memo(Dashboard)
