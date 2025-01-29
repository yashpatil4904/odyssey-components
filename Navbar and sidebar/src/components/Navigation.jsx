import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { useState } from 'react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Navigation() {
    const [placeholder,setPlaceholder] = useState("search for location");

    const handleSelectChange =(event)=>{
        const new_value = event.target.value;
        if(new_value==="LOCATION"){
            setPlaceholder("search for location");
        } else if(new_value==="NEWS"){
            setPlaceholder("search for news");
        }else if(new_value==="VIDEO"){
            setPlaceholder("search for video");
        }
        };
    
  
  return (
    <nav className="flex w-screen items-center justify-between h-16 bg-gray-100 shadow px-4 ">
  <div className="flex justify-start">
    <div className="ml-6 sm:ml-12 md:ml-16 lg:ml-25 font-bold text-blue-600 text-xl">MY APP</div>
  </div>

  <div className="flex items-center justify-between gap-4 w-full sm:w-auto">
    <div className="flex items-center gap-4 w-full sm:w-auto">
      <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 w-full sm:w-auto">
        <input
          id="price"
          name="price"
          type="text"
          placeholder={placeholder}
          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
        />
        <div className="grid shrink-0 grid-cols-1 focus-within:relative">
          <select
            id="location"
            name="location"
            aria-label="location"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            onChange={handleSelectChange}
          >
            <option value="LOCATION">LOCATION</option>
            <option value="NEWS">NEWS</option>
            <option value="VIDEO">VIDEO</option>
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </div>
      </div>
    </div>

    <div className="hidden sm:block">
      <Popover className="relative">
        <Popover.Button className="inline-flex items-center justify-center gap-x-2 px-4 py-2 text-sm font-semibold text-gray-900 bg-white rounded-lg shadow hover:bg-gray-200">
          <span>Solutions</span>
          <ChevronDownIcon aria-hidden="true" className="w-5 h-5" />
        </Popover.Button>

        <Popover.Panel
          className="absolute left-1/2 z-10 mt-2 w-screen max-w-md -translate-x-1/2 px-4 sm:px-0"
        >
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative bg-white p-4">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-x-4 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 group-hover:bg-indigo-100">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                  </div>
                  <div>
                    <a href={item.href} className="block font-medium text-gray-900">
                      {item.name}
                    </a>
                    <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </div>

    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
          Options
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              License
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>

    <button type="button" className="text-white items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none mt-2 focus:ring-blue-300 dark:focus:ring-blue-800 h-9 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2 flex-shrink-0">
      SIGN UP
    </button>
  </div>
</nav>

  )
}
