import React, { useState, useEffect } from 'react'
import { fetchContentful } from '../../../lib/contentful';
import { ThreeItemNavigationItem } from '../threeItemNavigationItem/threeItemNavigationItem';

interface CategoryImage {
    url: string;
}

export interface NavigationItem {
    categoryName: string;
    isDesktopViewNavigationItem: boolean;
    slug: string;
    categoryImageCollection: {
        items: CategoryImage[];
    };
}

interface NavigationData {
    navigationItemCollection: {
        items: NavigationItem[];
    }
}

type ThreeItemNavigationProps = {
  isOpen: boolean; 
};

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

const ThreeItemNavigation: React.FC<ThreeItemNavigationProps> = ({ isOpen }) => {

    const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);
    const [isLoading, setLoadingStatus] = useState<boolean>(false);



    useEffect(() => {
      const fetchData = async () => {
        setLoadingStatus(true);
        const data = await fetchContentful<NavigationData>(GET_NAVIGATION_ITEMS);
        setNavigationItems(data.navigationItemCollection.items);
        setLoadingStatus(false);
      };
      
      fetchData().catch(console.error);
    }, []);

  return (

    <div className={`fixed z-40 top-14 left-0 w-full bg-white shadow-lg transition-transform transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } h-[calc(100vh-3.5rem)] overflow-y-auto`}>
        {isLoading ? <div>...Loading</div> : <div>
            {navigationItems.map((item, index) => {
                if (!item.isDesktopViewNavigationItem) {
              return <ThreeItemNavigationItem key={item.categoryName || index} item={item}/>
                }
            } )}
        </div> }
    </div>
        
  )
}

export default ThreeItemNavigation