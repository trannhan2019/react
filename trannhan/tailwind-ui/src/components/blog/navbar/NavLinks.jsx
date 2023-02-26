import { useState, Fragment } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { links } from "./links";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

const NavLinks = () => {
  return (
    <>
      {links.map((link, idx) => (
        <Menu key={idx}>
          <Menu.Button className="py-7 px-3 uppercase inline-flex">
            {link.name}{" "}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 hover:text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>
          {link.submenu && (
            <Menu.Items className="absolute w-56 origin-top-right divide-y">
              {link.sublinks.map((sublink, idx2) => (
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Item as="li" key={idx2}>
                    {sublink.Head}
                  </Menu.Item>
                </Transition>
              ))}
            </Menu.Items>
          )}
        </Menu>

        // menu mobile
      ))}
    </>
  );
};

export default NavLinks;
