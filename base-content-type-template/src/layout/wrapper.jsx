import { animationCreate } from '@/utils/utils';
import React, {useEffect} from 'react';
import BackToTop from '../lib/BackToTop';
import FooterTwo from './footers/footer';
import HeaderTwo from './headers/header';

const Wrapper = ({children, categories}) => {
    useEffect(() => {
        setTimeout(() => {
          // animationCreate()
        }, 30);
      },[])

    return (
        <>
        <HeaderTwo categories={categories} />
            {children}
            <FooterTwo />
            <BackToTop />
        </>
    );
};

export default Wrapper;