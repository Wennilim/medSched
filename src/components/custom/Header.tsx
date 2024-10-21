import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Link } from 'react-router-dom'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export const Header = () => {
  const { user, login, logout } = useKindeAuth();

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

  const sideBarMenu = [
    {
      name: 'Profile',
      path: ROUTES.profile
    },
    {
      name: 'My Booking',
      path: ROUTES.myBooking
    },
    {
      name: 'Logout',
      path: '',
    }
  ]
  return (
    <section className='mx-5 my-10 flex items-center justify-between shadow-sm pb-3'>
      <Link to={ROUTES.home} className='flex gap-3'>
        <img src='/logo.svg' alt='logo' className='w-8 h-8 sm:w-10 xs:h-10' />
        <h2 className='font-bold text-4xl hidden xs:block xs:text-3xl'><span className='text-logo'>Med</span>Sched</h2>
        <span className='hidden md:flex items-center ml-8 gap-4 transition-all ease-in-out'>
          {menu.map((item) => (
            <Link key={item.name} to={item.path} className='ml-5 text-xl hover:text-logo cursor-pointer hover:scale-105'>{item.name}</Link>
          ))}
        </span>
      </Link>
      {user ?
        <Popover>
          <PopoverTrigger>
            <span className='w-full rounded-full bg-logo text-white text-sm font-bold px-2 py-3 shadow-sm' >
              {`${user.given_name?.split('')[0].toUpperCase()}${user.family_name?.split('')[0].toUpperCase()}`}
            </span>

          </PopoverTrigger>
          <PopoverContent className='w-44 mt-4 mr-2 rounded-xl bg-white'>
            {sideBarMenu.map((item) => (
              <ul key={item.name} className='flex flex-col gap-2 py-2 hover:text-hover hover:bg-stale-500 cursor-pointer'>
                <Link
                  to={item.path && item.path}
                  onClick={() => {
                    if (item.name === 'Logout' && item.path === '') {
                      logout()
                    }
                  }}
                >
                  {item.name}
                </Link>
              </ul>

            ))}

          </PopoverContent>
        </Popover>
        :
        <Button onClick={() => login()} className='bg-logo hover:bg-hover text-white px-4 py-3 rounded-xl'>Get Started</Button>

      }


    </section>
  )
}
