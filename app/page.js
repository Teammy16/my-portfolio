import Image from "next/image";
export default function Home() {
  const name = "Adithep";
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-500 to-blue-500">
      
      {/* Avatar */}
      <div className="w-80 h-40 mb- relative"> 
        <Image
          src="/3.png" 
          alt="รูปโปรไฟล์ Adithep"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* ชื่อ */}
      <h1 className="text-7xl font-bold text-white mb-4">
        {<p class="underline">Adithep Sunthonaekchit</p>} 
      </h1>
      
      {/* Tagline */}
      <p className="text-2xl text-white/80 mb-8">
        {"Web Developer · Bangkok"}
      </p>
      
      {/* 2 ปุ่ม */}
      <div className="flex gap-4">
        <a 
    href="#projects" 
    className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
  >
    View Projects
  </a>
  <a 
          href="#contact" 
          className="px-6 py-3 bg-transparent text-white font-medium rounded-full border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
        >
          Contact Me
        </a>
      </div>
      
    </main>
  );
}
