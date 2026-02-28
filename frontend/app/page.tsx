// 🔒 Client-side component
'use client'

// 📦 Import necessary hooks and utilities
import { useCurrentUser } from '@/hooks/useHook'
import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { useEffect } from 'react'

// 🏠 Home page component
const page = () => {
  // 🔐 Get authenticated user ID from Clerk
  const { userId } = useAuth()
  
  // 👤 Get current user details (email, fullName, loading state)
  const { email, isLoaded, fullName } = useCurrentUser()

  // 🚀 Effect to send user data to backend when all data is loaded
  useEffect(() => {
    // ✅ Ensure all data is available before sending
    if (!isLoaded || !email || !userId || !fullName) return

    // 📋 Prepare data payload for API
    const data = { 
      tution_name: fullName, // 📝 mapping fullName to tution_name
      owner_id: userId       // 🔑 mapping userId to owner_id
    }

    // 📤 Send data to backend API
    const sendData = async () => {
      try {
        const response = await axios.post("http://localhost:8080/", data)
        console.log(response) // ✅ Log successful response
      } catch (error) {
        console.error("Error sending data:", error) // ❌ Log any errors
      }
    }

    sendData() // 🎯 Execute the API call
  }, [userId, fullName, email, isLoaded]) // 🔄 Re-run when dependencies change

  // 🎨 Render the page UI
  return (
    <div className='text-4xl flex justify-center mt-5'>
      Tu-Tech..A complete solution for the tution attendee management
    </div>
  )
}

export default page