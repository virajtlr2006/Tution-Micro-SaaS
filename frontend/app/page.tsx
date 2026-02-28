'use client'

import { useCurrentUser } from '@/hooks/useHook'
import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { useEffect } from 'react'

const page = () => {
  const { userId } = useAuth()
  const { email, isLoaded, fullName } = useCurrentUser()

  useEffect(() => {
    // Ensure all data is available before sending
    if (!isLoaded || !email || !userId || !fullName) return

    const data = { 
      tution_name: fullName, // mapping fullName to tution_name
      owner_id: userId       // mapping userId to owner_id
    }

    const sendData = async () => {
      try {
        const response = await axios.post("http://localhost:8080/", data)
        console.log(response)
      } catch (error) {
        console.error("Error sending data:", error)
      }
    }

    sendData()
  }, [userId, fullName, email, isLoaded])

  return (
    <div className='text-4xl flex justify-center mt-5'>
      Tu-Tech..A complete solution for the tution attendee management
    </div>
  )
}

export default page