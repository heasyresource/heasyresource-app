import Link from 'next/link'
import { headers } from 'next/headers'
import { getSubdomain } from '@/utils/publicFunctions';

export default function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  const subdomain = getSubdomain(domain);
  const link = subdomain && subdomain !== 'heasyresource' ? process.env.NEXTAUTH_URL : '/';
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={link}>Return Home</Link>
    </div>
  )
}