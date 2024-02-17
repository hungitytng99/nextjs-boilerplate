'use client'

import { selectUser } from '@/libs/redux/slices'
import { useAppSelector } from '@/libs/redux/store/hook'

function AppHeader() {
  const userLogined = useAppSelector(selectUser)
  return (
    <div>
      <div>{userLogined.name}</div>
      AppHeader <br />
    </div>
  )
}

export default AppHeader
