import React from 'react';
import '../css/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout';
import HowToUse from '../pages/HowToUse';
import Home from '../pages/Home';
import Converter from '../pages/Converter';
import Colorpalette from '../pages/Colorpalette';
import NoPage from '../pages/NoPage';

function Main(){

        return(
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="how" element={<HowToUse />} />
                <Route path="home" element={<Home />} />
                <Route path="convert" element={<Converter />} />
                <Route path="colorpalette" element={<Colorpalette />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        )

    }

export default Main