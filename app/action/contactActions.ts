// src/app/lib/sendContactEmail.ts
export const sendContactEmail = async (values: {
  firstName: string
  lastName: string
  email: string
  message: string
}) => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values), // ✅ Correct: send all fields
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || 'Failed to send email')
  }

  return await response.json() // ✅ Return API success response
}
