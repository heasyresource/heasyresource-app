import Link from 'next/link'
import { headers } from 'next/headers'
import { getSubdomain } from '@/utils/publicFunctions';

export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  const subdomain = getSubdomain(domain);
  const defaultSubdomain = ['www', 'heasyresource']
  let link = '/';
  if (subdomain && !defaultSubdomain.includes(subdomain)) {
    const getSubdomain = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/companies/subdomain/${subdomain}`);
    const getSubdomainData = await getSubdomain.json();
    if (getSubdomainData.results !== null && getSubdomainData.results?.isActive === 1) {
      link = `http://${domain}`
    } else {
      link = process.env.NEXTAUTH_URL
    }
  }
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={link}>Return Home</Link>
    </div>
  )
}