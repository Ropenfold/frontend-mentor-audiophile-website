import React from 'react'
import { NavigationItem } from '../threeItemNavigation/threeItemNavigation';
import Image from 'next/image';
import Link from 'next/link';

interface ThreeItemNavigationItemProps {
    item: NavigationItem;
}

export const ThreeItemNavigationItem: React.FC<ThreeItemNavigationItemProps> = ({ item }) => {
  return (
    <div className='relative w-11/12 h-[217px] mx-4'>
      <Image className='absolute left-1/2 top-5 -translate-x-1/2 z-40' src={item.categoryImageCollection.items[0].url} width={150} height={150} alt={item.categoryName}/>
      <div className='bg-white h-1/4 w-full' />
      <div className='bg-darkGrey h-3/4 w-full flex flex-col justify-center items-center pt-20'>
      <p>{item.categoryName.toLocaleUpperCase()}</p>
      <div className='flex'>
      <Link href={`/${item.slug}`}>SHOP</Link>
      <Link href={`/${item.slug}`}>{">"}</Link>
      </div>
      </div>
   </div>
  )
}
