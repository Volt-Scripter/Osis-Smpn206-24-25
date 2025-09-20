import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Calendar, MessageCircle, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navigationItems = [
    { id: 'beranda', label: 'Beranda', icon: Users },
    { id: 'dokumentasi', label: 'Dokumentasi', icon: Calendar },
    { id: 'proker', label: 'Program Kerja', icon: MessageCircle },
    { id: 'sekbid', label: 'Seksi & Bidang', icon: Users },
    { id: 'kontak', label: 'Kontak', icon: Mail }
  ];

  const programs = [
    {
      title: 'Penerimaan Siswa Baru',
      description: 'Membantu proses orientasi dan adaptasi siswa baru dengan kegiatan yang menyenangkan',
      image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Lomba Olahraga Antar Kelas',
      description: 'Kompetisi olahraga untuk meningkatkan sportivitas dan kekompakan antar siswa',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Festival Seni & Budaya',
      description: 'Pameran dan pertunjukan seni untuk mengembangkan kreativitas siswa',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Bakti Sosial',
      description: 'Kegiatan sosial untuk menumbuhkan rasa peduli kepada sesama',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const divisions = [
    {
      name: 'Seksi Ketaqwaan',
      description: 'Mengorganisir kegiatan keagamaan dan spiritual',
      color: 'bg-blue-500'
    },
    {
      name: 'Seksi Olahraga',
      description: 'Mengelola kompetisi dan kegiatan olahraga',
      color: 'bg-green-500'
    },
    {
      name: 'Seksi Seni & Budaya',
      description: 'Mengembangkan bakat seni dan pelestarian budaya',
      color: 'bg-purple-500'
    },
    {
      name: 'Seksi Lingkungan',
      description: 'Menjaga kebersihan dan kelestarian lingkungan sekolah',
      color: 'bg-emerald-500'
    },
    {
      name: 'Seksi Humas',
      description: 'Menjalin komunikasi dengan pihak eksternal',
      color: 'bg-orange-500'
    },
    {
      name: 'Seksi Dokumentasi',
      description: 'Mendokumentasikan seluruh kegiatan OSIS',
      color: 'bg-cyan-500'
    }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'beranda':
        return (
          <div className="space-y-20">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600"></div>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1920" 
                  alt="Students" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-6 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                  OSIS
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  SMPN 206 Jakarta
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  Periode 2024–2025
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setActiveSection('proker')}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Lihat Program Kerja
                  </button>
                  <button 
                    onClick={() => setActiveSection('kontak')}
                    className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Hubungi Kami
                  </button>
                </div>
              </div>
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Tentang OSIS SMPN 206
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Organisasi Siswa Intra Sekolah yang berkomitmen untuk mengembangkan potensi siswa, 
                    memfasilitasi kegiatan positif, dan menciptakan lingkungan belajar yang kondusif.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <Users className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Kepemimpinan</h3>
                    <p className="text-gray-600">Mengembangkan jiwa kepemimpinan dan tanggung jawab siswa</p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Kreativitas</h3>
                    <p className="text-gray-600">Menyalurkan bakat dan minat siswa dalam berbagai bidang</p>
                  </div>
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Komunikasi</h3>
                    <p className="text-gray-600">Menjembatani komunikasi antara siswa, guru, dan sekolah</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'dokumentasi':
        return (
          <section className="py-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
                Dokumentasi Kegiatan
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1,2,3,4,5,6].map((index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <img 
                      src={`https://images.pexels.com/photos/${index === 1 ? '8364026' : index === 2 ? '209977' : index === 3 ? '1105666' : index === 4 ? '6646917' : index === 5 ? '8000629' : '159844'}/pexels-photo-${index === 1 ? '8364026' : index === 2 ? '209977' : index === 3 ? '1105666' : index === 4 ? '6646917' : index === 5 ? '8000629' : '159844'}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={`Kegiatan ${index}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold">Kegiatan OSIS {index}</h3>
                      <p className="text-sm opacity-80">Dokumentasi kegiatan siswa</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'proker':
        return (
          <section className="py-20 min-h-screen bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
                Program Kerja 2024-2025
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                  <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={program.image}
                        alt={program.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{program.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{program.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'sekbid':
        return (
          <section className="py-20 min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
                Seksi & Bidang
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {divisions.map((division, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`${division.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Users className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{division.name}</h3>
                    <p className="text-gray-600">{division.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'kontak':
        return (
          <section className="py-20 min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                Hubungi Kami
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-white">
                  <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                      <span>SMPN 206 Jakarta, Indonesia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-cyan-400" />
                      <span>+62 21 XXXX XXXX</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-6 h-6 text-cyan-400" />
                      <span>osis@smpn206jakarta.sch.id</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-4">Media Sosial</h4>
                    <div className="flex space-x-4">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform cursor-pointer">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                      <div className="bg-blue-600 p-3 rounded-full hover:scale-110 transition-transform cursor-pointer">
                        <Facebook className="w-6 h-6 text-white" />
                      </div>
                      <div className="bg-blue-400 p-3 rounded-full hover:scale-110 transition-transform cursor-pointer">
                        <Twitter className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Kirim Pesan</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Nama Lengkap"
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                    <input 
                      type="email" 
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                    <textarea 
                      rows={4}
                      placeholder="Pesan Anda"
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 border border-white border-opacity-30 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    ></textarea>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">OS</span>
              </div>
              <span className="font-bold text-xl text-gray-800">OSIS SMPN 206</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 bg-white border-t border-gray-200">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 block mb-1 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">OS</span>
              </div>
              <span className="font-bold text-2xl">OSIS SMPN 206</span>
            </div>
            <p className="text-gray-400 mb-6">
              Organisasi Siswa Intra Sekolah SMP Negeri 206 Jakarta
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="bg-blue-600 p-3 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-blue-400 p-3 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
            <p className="text-gray-400">
              © 2024 OSIS SMPN 206 Jakarta. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;