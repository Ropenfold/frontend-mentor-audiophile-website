import { fetchContentful } from '@/lib/contentful';
import { PageContentCollection, PageContentItem, PageCollectionResponse } from '@/redux/types/navigationTypes';
import HeroSectionComponent from './components/heroSectionComponent/heroSectionComponent';

const GET_HOMEPAGE_DATA = `query {
  pageCollection(where: { pageName: "Homepage" }, limit: 1) {
    items {
      pageName
      pageContentCollection {
        items {
          __typename
          ... on HeroSection {
            heroTitle
            isNewProduct
            heroImageCollection {
              items {
                url 
                title
                description
              }
            }
            heroText
            button {
							... on Button {
                buttonText
                buttonTitle
                textColour
                linkUrl
                colour
                hoverColour
              }
            }
          }
        }
      }
    }
  }
}`

const createLayoutComponents = (pageContentCollection: PageContentCollection) => {
  return pageContentCollection.items.map((item: PageContentItem, index: number) => {
    console.log('item.__typename', item.__typename);
    switch (item.__typename) {
      case 'HeroSection':
        console.log('in HeroSectionComponent');
        return <HeroSectionComponent key={`hero-${index}`} {...item} />;
      default:
        return null; // In case the __typename doesn't match 'HeroSection'
    }
  });
};

export default async function Home() {

const data = await fetchContentful<PageCollectionResponse>(GET_HOMEPAGE_DATA)
const {
  pageCollection: {
    items: [
      {
        pageContentCollection,
      },
    ],
  },
} = data;

console.log('pageContentCollection', pageContentCollection);

  const layout = createLayoutComponents(pageContentCollection)

  return (
    <div>
      {layout}
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    <div>Homepage</div>
    </div>
  );
}
