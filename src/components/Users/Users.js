import React from 'react'

import User from './User/UserContainer'

export default ({
  users,
  className,
}) => (
  <div className={className}>
    {users.map((user) => (
      <User
        data={user}
      />
    ))}
  </div>
)
