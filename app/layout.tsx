"use client"
import "./globals.css";
import Header from "./components/header/header";
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from '../redux/store';
import ModalBackgroundLayer from "./components/modalBackgroundLayer/modalBackgroundLayer";
import ThreeItemNavigation from "./components/threeItemNavigation/threeItemNavigation";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><Provider store={store}>
        <Header />
        <ThreeItemNavigation />
        <ConnectedModalBackgroundLayer />
        {children}
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