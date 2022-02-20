import React from 'react'
import { Icon, Tooltip } from '@mui/material'

function MyIcon({ icon, tooltip, sx, ...props }) {
  const isClickable = !!props.onClick

  const _Icon = <Icon
    sx={{
      color: isClickable ? '#808080' : '#404040',
      ':hover': {
        cursor: 'pointer',
        color: '#404040',
      },
      ...sx
    }}
    {...props}
  >
    {icon}
  </Icon>

  return (
    tooltip
    ? <Tooltip title={tooltip} arrow>{_Icon}</Tooltip>
    : _Icon
  )
}

export default MyIcon
