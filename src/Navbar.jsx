import React from 'react';
import { Menu } from '@headlessui/react';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Menu>
                <Menu.Button>Dropdown</Menu.Button>
                <Menu.Items>
                    <Menu.Item as="div">1</Menu.Item>
                    <Menu.Item as="div">2</Menu.Item>
                    <Menu.Item as="div">3</Menu.Item>
                    <Menu.Item as="div">4</Menu.Item>
                    <Menu.Item as="div" disabled>This is descriptive bottom text</Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    )
}

export default Navbar;