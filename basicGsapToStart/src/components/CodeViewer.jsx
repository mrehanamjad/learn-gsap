import React from 'react'

function CodeViewer({code}) {
  return (
    <div className="bg-slate-800 text-gray-300 shadow-slate-700 shadow-inner p-7 rounded-lg mt-12">
    <pre>{code}</pre>
    </div>
  )
}

export default CodeViewer