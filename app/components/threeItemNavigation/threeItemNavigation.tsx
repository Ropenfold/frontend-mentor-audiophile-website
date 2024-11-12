import React, { useState, useEffect } from 'react'
import { fetchContentful } from '../../../lib/contentful';

interface CategoryImage {
    url: string;
}

interface NavigationItem {
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

const ThreeItemNavigation = () => {

    const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);
    const [isLoading, setLoadingStatus] = useState<boolean>(false);

    useEffect(() => {
      const fetchData = async () => {
        setLoadingStatus(true);
        const data = await fetchContentful<NavigationData>(GET_NAVIGATION_ITEMS);
        setNavigationItems(data.navigationItemCollection.items);
        setLoadingStatus(false);
        console.log('data', data);
      };
      
      fetchData().catch(console.error);
    }, []);

  return (

    <div>
        {isLoading ? <div>...Loading</div> : <div>
            
        ThreeItemNavigation</div> }
    </div>
        
  )
}

export default ThreeItemNavigation