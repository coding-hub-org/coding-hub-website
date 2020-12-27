import React, { useEffect } from 'react';
import Title from '../../components/Title';
import TeamCardList from "../../components/TeamCardList";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import './MembersSection.css';
const team = [
    {
        imageUrl: "https://avatars2.githubusercontent.com/u/26859409?v=4",
        name: "Gonzalo Reyes",
        title: "Co-founder | Designer | Full Stack Developer",
        time:"2018-2020",
        email: "mailto:greye003@plattsburgh.edu",
        linkedIn: "gonzalo-reyes",
        website: "https://www.iamgonchi.com/",
        github: "gonzen2310",
        details: "Coding and Design Lord of Plattsburgh"
    },
    {
        imageUrl: "https://avatars2.githubusercontent.com/u/25006527?v=4",
        name: "Gaurav Jayasawal",
        time:"2018-2019",
        title: "Co-founder | Full Stack Developer",
        email: "mailto:jgaurav6@gmail.com",
        linkedIn: "gauravjj",
        website: "http://www.gauravjj.com",
        github: "jgaurav6",
        details: "Coding and Design Lord of Plattsburgh"
    },
    {
        imageUrl: "https://avatars2.githubusercontent.com/u/17516041?v=4",
        name: "Keenan Kunzelman",
        time:"2018-2019",
        title: "Co-founder | CSO",
        email: "mailto:kkunz001@plattsburgh.edu",
        linkedIn: "keenankunzelman",
        website: "http://keenan-kunzelman.surge.sh/",
        github: "KeenanKunzelman",
        details: "Coding and Design Lord of Plattsburgh"
    },
    {
        imageUrl: "https://avatars2.githubusercontent.com/u/31390562?v=4",
        name: "Hung Nguyen",
        time:"2018-2020",
        title: "Co-founder | Lead Mobile Developer",
        email: "mailto:hnguy011@plattsburgh.edu",
        linkedIn: "nthungdev",
        website: "web",
        github: "nthungdev",
        details: "Coding and Design Lord of Plattsburgh"
    },
    {
        imageUrl: "https://avatars2.githubusercontent.com/u/27921089?v=4",
        name: "Keith Prevost",
        time:"2018-2019",
        title: "Co-founder | Back-end Developer",
        email: "mailto:kprev003@plattsburgh.edu",
        linkedIn: "keith-prevost-776125161",
        website: "web",
        github: "rickyprev",
        details: "Coding and Design Lord of Plattsburgh"
    },
    {
        imageUrl: "https://avatars1.githubusercontent.com/u/19680448?s=400&v=4",
        name: "Khanh Le",
        time:"2018-Present",
        title: "Co-founder | Full Stack Developer",
        email: "mailto:kle003@plattsburgh.edu",
        linkedIn: "wkhanh-le",
        website: "https://winkhanh.github.io/#/",
        github: "winkhanh",
        details: "Coding and Design Lord of Plattsburgh"
    },
    {
        imageUrl: "https://avatars1.githubusercontent.com/u/10709067?s=400&v=4",
        name: "Michael Gates",
        time:"2019-2019",
        title: "Full Stack Developer",
        email: "mailto:kprev003@plattsburgh.edu",
        linkedIn: "michaelgatesdev",
        website: "web",
        github: "MichaelGatesDev",
        details: "Coding and Design Lord of Plattsburgh"
    },
    {
        imageUrl: "https://avatars2.githubusercontent.com/u/39847629?s=400&v=4",
        name: "Swornim Barahi",
        time:"2018-2020",
        title: "Front-end Developer",
        email: "mailto:kprev003@plattsburgh.edu",
        linkedIn: "swornimbarahi",
        website: "web",
        github: "swornimbarahi",
        details: "Coding and Design Lord of Plattsburgh"
    },
    {
        imageUrl: "https://avatars1.githubusercontent.com/u/32785143?s=400&v=4",
        name: "Quan Vo",
        time:"2019-2020",
        title: "Full Stack Developer",
        email: 'mailto:qvo001@plattsburgh.edu',
        linkedIn: "quanvotr",
        website: "https://quan-vo-portfolio.netlify.com/",
        github: "votrungquan1999"
    },
    {
        imageUrl: "https://avatars1.githubusercontent.com/u/1631257?s=400&v=4",
        name: "Michael Barbas",
        time:"2019-2020",
        title: "Full Stack Developer",
        email: 'mailto:michaelbarbas@gmail.com',
        linkedIn: "michael-barbas-30a147150",
        website: "https://barbas.me",
        github: "mbarbas11"
    }
];
const MembersSection =()=>{
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <div className={"members-section"}>
            <Navbar/>
            <Title title="Our Members"/>
            <TeamCardList member={team}/>
            <Footer/>
        </div>
    )
}

export default MembersSection;