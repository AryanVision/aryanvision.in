// app/layout.tsx
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'AdhikarMitra - Your Rights Friend',
  description: 'Simplifying Indian laws for every citizen of Andhra Pradesh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation Header */}
        <nav className="bg-white shadow-lg border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                AdhikarMitra
              </Link>
              <div className="flex space-x-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
                <Link href="/emergency" className="text-gray-700 hover:text-blue-600">
                  Emergency
                </Link>
                <Link href="/rights" className="text-gray-700 hover:text-blue-600">
                  Your Rights
                </Link>
                <Link href="/grievance" className="text-gray-700 hover:text-blue-600">
                  Grievance
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}