export interface CategoryImage {
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

export interface NavigationData {
    navigationItemCollection: {
        items: NavigationItem[];
    }
}

export interface PageProps {
    navigationItems: NavigationItem[];
}

export interface heroImageItem {
    url: string;
    title: string;
    description: string;
}

export interface HeroSectionProps {
    __typename: 'HeroSection';
    heroTitle: string;
    heroImageCollection: { items: heroImageItem[]};
    heroText: string;
    isNewProduct: boolean;
    button? : {
        buttonText: string;
        buttonTitle: string;
        textColour: string;
        linkUrl: string;
        colour: string;
        hoverColour: string;
    }
}

export interface ProductSectionProps {
    __typename: 'ProductSection';
    productSectionTitle: string;
    productSectionImage?: { url: string };
    productSectionText?: string;
    button? : {
        buttonText: string;
        linkUrl: string;
        textColour: string;
        colour: string;
        hoverColour: string;
    } 
}

export type PageContentItem = HeroSectionProps | ProductSectionProps;

export interface PageContentCollection {
    items: PageContentItem[]; 
  }

  export interface PageCollectionResponse {
    pageCollection: {
      items: {
        pageName: string;
        pageContentCollection: PageContentCollection;  // Collection of content items for the page
      }[];
    };
  }