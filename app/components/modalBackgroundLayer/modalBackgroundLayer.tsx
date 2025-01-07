import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useAppDispatch } from '@/redux/hooks';
import { openCloseDrawer } from '@/redux/actions/navigation';


interface ModalBackgroundLayerProps {
    visible: boolean
}

const ModalBackgroundLayer: React.FC<ModalBackgroundLayerProps> = ({visible}) => {

  const dispatch = useAppDispatch();

  const close = (isVisible: boolean) => {
    dispatch(openCloseDrawer(isVisible));
  }

  const isVisible = useSelector((state: RootState) => state.menu.background);
  console.log('isVisible', isVisible);

  return (
    <div onClick={() => close(isVisible)} className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
    visible ? 'opacity-100 z-30' : 'opacity-0 pointer-events-none'
    }`} />
  )
}

export default ModalBackgroundLayer