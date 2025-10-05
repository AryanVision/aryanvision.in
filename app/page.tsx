
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',gap:16}}>
      <h1>Welcome to richapp</h1>
      <p>A starter Next.js + Prisma scaffold.</p>
      <Link href="/api/hello">Try API</Link>
    </main>
  )
}
