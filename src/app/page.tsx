import PlatformOverview from '@/components/PlatformOverview'
import CompanyOverview from '@/components/CompanyOverview'
import PlatformModules from '@/components/PlatformModules'
import ContactAccess from '@/components/ContactAccess'

export default function Home() {
  return (
    <main>
      <PlatformOverview />
      <CompanyOverview />
      <PlatformModules />
      <ContactAccess />
    </main>
  )
}
