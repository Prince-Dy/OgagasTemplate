import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-secondary text-white py-4 relative top-60"> 
            <div className="container mx-auto text-center">
            <p className="text-sm">© {} OGAGA. All rights reserved.</p>
            <p className="text-xs mt-2">Follow us on 
                <a href="https://twitter.com" className="text-blue-400 hover:underline ml-1">Twitter</a>, 
                <a href="https://facebook.com" className="text-blue-400 hover:underline ml-1">Facebook</a>, 
                <a href="https://instagram.com" className="text-blue-400 hover:underline ml-1">Instagram</a>
            </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer