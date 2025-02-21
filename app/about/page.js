export default function About() {
  return (
    <div className="min-h-screen p-10 text-white bg-gray-900 flex flex-col items-center">
      {/* Foto Profil */}
      <img 
        src="/profile.jpg" 
        alt="Profile Picture" 
        className="w-40 h-40 rounded-full border-4 border-yellow-400 shadow-lg"
      />

      {/* Heading */}
      <h1 className="text-5xl font-bold text-yellow-400 mt-6">About Me</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl text-center">
        Saya seorang **Cyber Security Enthusiast** dan **Full Stack Developer** dengan pengalaman dalam 
        membangun aplikasi web yang aman dan scalable. Saya selalu tertarik dengan teknologi terbaru 
        dan cara-cara untuk meningkatkan keamanan digital.
      </p>

      {/* What I Do Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-yellow-400">What I Do</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-400">Cyber Security</h3>
            <p className="text-gray-300 mt-2">Saya melakukan penetration testing dan membantu meningkatkan keamanan aplikasi web serta infrastruktur IT.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-400">Full Stack Development</h3>
            <p className="text-gray-300 mt-2">Membangun aplikasi web menggunakan **React, Next.js, Node.js**, serta **Java & PL/SQL** untuk backend.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-400">Digital Forensics</h3>
            <p className="text-gray-300 mt-2">Meneliti dan menganalisis serangan cyber serta mengembangkan solusi keamanan berbasis data forensik.</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-yellow-400">Skills</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <p className="text-yellow-400 font-semibold">JavaScript</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <p className="text-yellow-400 font-semibold">Next.js</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <p className="text-yellow-400 font-semibold">Java</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <p className="text-yellow-400 font-semibold">PL/SQL</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <p className="text-yellow-400 font-semibold">Penetration Testing</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <p className="text-yellow-400 font-semibold">Digital Forensics</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <p className="text-yellow-400 font-semibold">Linux</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <p className="text-yellow-400 font-semibold">Docker</p>
          </div>
        </div>
      </div>
    </div>
  );
}
