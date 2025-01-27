"use client"
import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGantt } from 'lucide-react'
import React from 'react'

function CustomUserButton() {
  return (
      <UserButton
      appearance={{
        elements: {
            avatarBox: "h-9 w-9"
        }
      }}
      >

        <UserButton.MenuItems>
            <UserButton.Link  label='My Events' labelIcon={<ChartNoAxesGantt/>} href='/events'/>
            <UserButton.Action label='manageAccount' />
        </UserButton.MenuItems>
      </UserButton>
  )
}

export default CustomUserButton
