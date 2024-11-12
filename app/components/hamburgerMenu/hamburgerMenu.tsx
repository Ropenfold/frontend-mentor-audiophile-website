import React from 'react'
import { openCloseDrawer } from '../../../redux/actions/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const HamburgerMenu = () => {

  const isVisible = useSelector((state: RootState) => state.menu.background);
  console.log('isVisible', isVisible);

  const dispatch = useAppDispatch();

  const openDrawer = () => {
    dispatch(openCloseDrawer(isVisible));
  }

  return (
    <nav>
        <div className="space-y-0.5 flex-col flex content-center" onClick={() => openDrawer()}>
            <span className="block h-0.5 w-4 bg-white"></span>
            <span className="block h-0.5 w-4 bg-white"></span>
            <span className="block h-0.5 w-4 bg-white"></span>
          </div>
    </nav>
  )
}

export default HamburgerMenu