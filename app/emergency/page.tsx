// app/emergency/page.tsx
import { EMERGENCY_CONTACTS } from '@/lib/constants';

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2 text-red-600">🚨 Emergency Contacts</h1>
        <p className="text-center text-gray-600 mb-8">Immediate help when you need it most</p>

        {/* National Emergency */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">National Emergency Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EMERGENCY_CONTACTS.national.map((contact, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
                    <p className="text-2xl font-bold text-red-600 mt-2">{contact.number}</p>
                  </div>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Emergency</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Andhra Pradesh Specific */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Andhra Pradesh Helplines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EMERGENCY_CONTACTS.andhra.map((contact, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
                    <p className="text-xl font-bold text-blue-600 mt-2">{contact.number}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">AP</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Note */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">📝 Important Notes</h3>
          <ul className="text-yellow-700 list-disc list-inside space-y-1">
            <li>Always keep your location ready when calling emergency numbers</li>
            <li>For non-emergency issues, use the specific department helplines</li>
            <li>Save these numbers in your phone for quick access</li>
            <li>For medical emergencies, 108 provides free ambulance service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}