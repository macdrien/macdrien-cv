import React from 'react';

import Header from "../subpages/Header";
import data from "../resources/data.json";
import Section from "../components/Section";
import Footer from "../subpages/Footer";

export default function Main() {
    return <React.Fragment>
        <Header/>
        {
            data.map((element, index) => <Section {...element} key={index}/>)
        }
        <Footer/>
    </React.Fragment>;
}