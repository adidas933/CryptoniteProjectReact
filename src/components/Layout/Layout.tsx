import React from 'react';
import {Footer} from './Footer/Footer';
import { Header } from './Header/Header';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({children}:LayoutProps) => (
  <div className="Layout">
    <Header/>
    {children}
    <Footer/>
  </div>
);

