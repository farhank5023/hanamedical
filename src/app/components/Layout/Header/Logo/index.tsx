import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/app/utils/paths'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src={getImgPath('/images/logo/hana_logo.png')}
        alt='Hana Medical Services logo'
        width={900}
        height={300}
        className='h-14 w-auto object-contain block dark:hidden sm:h-16 md:h-20 lg:h-22'
      />

      <Image
        src={getImgPath('/images/logo/hana_logo.png')}
        alt='Hana Medical Services logo'
        width={900}
        height={300}
        className='hidden h-14 w-auto object-contain dark:block sm:h-16 md:h-20 lg:h-22'
      />
    </Link>
  )
}

export default Logo
