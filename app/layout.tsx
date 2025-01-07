"use client"
import "./globals.css";
import Header from "./components/header/header";
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from '../redux/store';
import ModalBackgroundLayer from "./components/modalBackgroundLayer/modalBackgroundLayer";
import ThreeItemNavigation from "./components/threeItemNavigation/threeItemNavigation";
import { Footer } from "./components/footer/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="relative">
        <Provider store={store}>
        <Header />
        <ConnectedThreeItemNavigation />
        <ConnectedModalBackgroundLayer />
        {children}
        <Footer />
        </Provider>
      </body>
    </html>
  );
}

function ConnectedModalBackgroundLayer() {
  const isVisible = useSelector((state: RootState) => state.menu.background);
  console.log('isVisible', isVisible);
  return <ModalBackgroundLayer visible={isVisible} />;
}

function ConnectedThreeItemNavigation() {
  const isOpen = useSelector((state: RootState) => state.menu.openMenu);
  console.log('isVisible', isOpen);
  return <ThreeItemNavigation isOpen={isOpen} />;
}