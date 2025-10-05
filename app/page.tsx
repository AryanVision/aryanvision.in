// app/page.tsx
import Link from 'next/link';
import { EMERGENCY_CONTACTS } from '@/lib/constants';

export default function Home() {
  const criticalContacts = EMERGENCY_CONTACTS.national.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AdhikarMitra
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Friend in Rights & Grievance Resolution
          </p>
          <p className="text-lg opacity-90">
            Simplifying Indian laws for every citizen of Andhra Pradesh
          </p>
        </div>
      </section>

      {/* Emergency Quick Access */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-600">
            🚨 Emergency Helplines
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {criticalContacts.map((contact, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center border-l-4 border-red-500">
                <div className="text-lg font-semibold text-gray-800">{contact.name}</div>
                <div className="text-2xl font-bold text-red-600 mt-2">{contact.number}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/emergency" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
              View All Emergency Contacts →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Can We Help You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/rights" className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-blue-200">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-2">Know Your Rights</h3>
              <p className="text-gray-600">Understand common legal issues and your rights as a citizen</p>
            </Link>

            <Link href="/grievance" className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-green-200">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold mb-2">File Grievance</h3>
              <p className="text-gray-600">Access government portals and file complaints online</p>
            </Link>

            <Link href="/services" className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-orange-200">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">AP Services</h3>
              <p className="text-gray-600">Andhra Pradesh specific helplines and services</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>🇮🇳 Empowering Andhra Pradesh Citizens Through Knowledge & Action</p>
          <p className="mt-2 text-gray-400">For complex legal matters, always consult a licensed lawyer</p>
        </div>
      </footer>
    </div>
  );
}