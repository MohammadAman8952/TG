import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="bg-[#363434] text-gray-300 py-8 mt-2 border rounded-2xl border-gray-700">
  <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <div class="text-center md:text-left">
      <h2 class="text-lg font-bold text-white">🎮 Total Gaming</h2>
      <p class="text-sm mt-1">Level up your fun. One game at a time.</p>
    </div>
    <div class="flex space-x-6 mt-4 md:mt-0">
       <a href="https://www.instagram.com/invites/contact/?igsh=1kef8bmyy9byl&utm_content=pe28v6u" class="hover:text-white transition">Instagram</a>
      <a href="https://github.com/MohammadAman8952" target="_blank" class="hover:text-white transition">GitHub</a>
      <a href="https://www.linkedin.com/in/mohammad-aman-5a6ba7333/" target="_blank" class="hover:text-white transition">LinkedIn</a>
     
    </div>
  </div>
  <div class="text-center text-xs text-gray-500 mt-6">
    &copy; 2025 Aman | Powered by React + Tailwind | Game On! 🕹️
  </div>
</footer>

      
    </div>
  )
}

export default Footer
