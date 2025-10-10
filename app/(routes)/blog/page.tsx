import React from 'react'
import { Clock } from 'lucide-react'

const BlogPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <Clock className="w-16 h-16 text-primary mb-4 animate-pulse" />
      <h1 className="text-4xl font-bold text-secondary mb-2">
        Blog Coming Soon
      </h1>
      <p className="text-gray-600 text-lg max-w-md">
        We’re working hard to bring you helpful articles and insights. Stay
        tuned!
      </p>
    </div>
  )
}

export default BlogPage
