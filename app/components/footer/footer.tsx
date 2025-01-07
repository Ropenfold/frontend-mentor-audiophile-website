import React, { useEffect, useState } from 'react';
import { fetchContentful } from '@/lib/contentful';
import { NavigationItem, NavigationData } from '@/redux/types/navigationTypes';
import Link from 'next/link';
import Image from 'next/image';

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

export const Footer = () => {

    const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetchContentful<NavigationData>(GET_NAVIGATION_ITEMS);
          setNavigationItems(data.navigationItemCollection.items);
        };
        
        fetchData().catch(console.error);
      }, []);

  return (
    <div className="flex flex-col h-[500px] bg-black items-center">
        <p className='text-white'>audiophile</p>
        <nav className="flex flex-col items-center">
        {navigationItems.map((item: NavigationItem, key) => {
          return  <Link className='text-white' key={key} href={`${item.slug}`}>{item.categoryName.toLocaleUpperCase()}</Link>
        })}
        </nav>
        <p className='text-white'>Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <p className='text-white'>Copyright 2021. All Rights Reserved</p>
        <div className="flex items-center">
        <Image src='/img/facebook-icon.svg' height={30} width={30} alt='facebook logo'/>
        <Image src='/img/twitter-icon.svg' height={20} width={20} alt='twitter logo'/>
        <Image src='/img/instagram-logo.svg' height={20} width={20} alt='instagram logo'/>
        </div>
    </div>
  )
}
