import React from 'react';
import { Menu, Transition } from '@headlessui/react';

const Navbar = () => {
    return (
        <div className='flex h-10 justify-end items-center p-4 bg-black bg-opacity-20 border-b border-white border-opacity-20'>
            <Menu>
                <Menu.Button className='text-gray-200 font-medium bg-black bg-opacity-30 p-1 border border-white border-opacity-20 rounded-md'>Dropdown</Menu.Button>
                    <Transition 
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0">
                        <Menu.Items>
                            <Menu.Item as="div">1</Menu.Item>
                            <Menu.Item as="div">2</Menu.Item>
                            <Menu.Item as="div">3</Menu.Item>
                            <Menu.Item as="div">4</Menu.Item>
                            <Menu.Item as="div" disabled>This is descriptive bottom text</Menu.Item>
                        </Menu.Items>
                    </Transition>  
            </Menu>
        </div>
    )
}

export default Navbar;
