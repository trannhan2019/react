import { Link, Typography } from '@mui/material'
import React from 'react'

export default function Copyright() {
  return (
    <Typography align='center'>
        {'Copyright © '}
        <Link>trannhan.com</Link>
        {new Date().getFullYear()}
    </Typography>
  )
}
