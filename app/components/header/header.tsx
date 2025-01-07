"use client"

import React, { useEffect, useState } from 'react'
import { fetchContentful } from '../../../lib/contentful';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';
import Image from 'next/image';
import { NavigationItem, NavigationData } from '@/redux/types/navigationTypes'; 


const GET_NAVIGATION_ITEMS = `
  query{
navigationItemCollection {
  items {
    categoryName
    isDesktopViewNavigationItem
    slug
    categoryImageCollection {
      items {
       url
      }
    }
  }
}
}
`;

const Header = () => {

    const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);
    console.log('navigationItems', navigationItems);

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchContentful<NavigationData>(GET_NAVIGATION_ITEMS);
        setNavigationItems(data.navigationItemCollection.items);
      };
      
      fetchData().catch(console.error);
    }, []);

    
  return (
    <div className='fixed bg-black h-16 content-center z-50'>
      <div className='flex h-5 w-screen justify-between'>
      <HamburgerMenu />
      <h1 className='text-white'>audiophile</h1>
      <Image
      src="/img/icon-cart.svg"
      width={15}
      height={1}
      alt="cart"
    />
    </div>
    </div>
  )
}

export default Header