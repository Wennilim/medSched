import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'

export const Header = () => {
  const menu = [
    {
      name: 'Home',
      path: ROUTES.home
    },
    {
      name: 'About',
      path: ROUTES.about
    },
    {
      name: 'Contact',
      path: ROUTES.contact
    }
  ]
  return (
    <section className='mx-5 my-10 flex items-center justify-between shadow-sm pb-3'>
      <span className='flex gap-3'>
        <img src='/logo.svg' alt='logo' className='w-10 h-10' />
        <h2 className='font-bold text-4xl hidden sm:block'><span className='text-logo'>Med</span>Sched</h2>
        <span className='hidden md:flex items-center ml-8 gap-4 transition-all ease-in-out'>
            {menu.map((item) => (
          <a href={item.path} className='ml-5 text-xl hover:text-logo cursor-pointer hover:scale-105'>{item.name}</a>
        ))}
        </span> 
        </span>
        <Button className='bg-logo hover:bg-hover text-white px-4 py-3 rounded-xl'>Get Started</Button>
    </section>
  )
}
