import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from '../common/MainHeader'

export default function MainLayout() {
  return (
    <>
    <MainHeader/>
    <Outlet/>
    </>
  )
}
