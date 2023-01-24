import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../component/AboutMe'
import MyPhoto from '../component/myPhoto/MyPhoto'
import Nav from '../component/Nav'
import {useEffect} from 'react'
import s from '../styles/Home.module.scss'
import {useRef} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { saveDataFromApiWork } from '../redux/features/apiWork/apiWork'
import MyProjects from '../component/MyProjects'
import { saveDataMyProjects } from '../redux/features/apiMyProjects/myProjects'
import { DataMyProjects } from './api/MyProjects'
import { DataWork } from './api/workData'
import Contact from '../component/Contact'
import { saveDataMySport } from '../redux/features/apiSport/apiSport'


let myWork=    { dataWork:
  [
    //FIRST
    {jobTitle:"Bulding area",company:"Stas-Bud",city:"Olsztyn",timePeriod:{from:"10.07.2014",to:"28.08.2014"},
description:`My responsibility was destroy old wall and prepare the site for rebuilding`,id:0},
//Second
{jobTitle:"season work",company:"Hofladen Austermann",city:"Neuwarendorf 24, 48231 Warendorf, Niemcy",timePeriod:{from:"31.06.2015",to:"17.08.2015"},
description:`Seasonal work on field like cucumber picker`,id:1},
//Third
{jobTitle:"cooker",company:"Diner BISTRO & CATERING",city:"Olsztyn",timePeriod:{from:"03.09.2016",to:"24.11.2016"},
description:`helper in kitchen ,washing plates etc`,id:2},
//Four
{jobTitle:"Work with flowers",company:"//-//",city:"Holandia, Someren",timePeriod:{from:"10.01.2017",to:"14.05.2017"},
description:`Working with flowers: sorting, packing, labeling and cutting plants`,id:3},
//Five
{jobTitle:"line operator",company:"Bakkavor Spalding",city:"West Marsh Rd, Spalding PE11 2BB, Wielka Brytania",timePeriod:{from:"17.05.2017",to:"22.10.2017"},
description:`Line operator in factory which produce salads`,id:4},
    ////
{jobTitle:"forklift-driver",company:"Hawthorn Produce Handling & Packing (HP2)",city:"Spalding",timePeriod:{from:"25.10.2017",to:"10.02.2018"},
    description:`Forklift-driver in factory with grapes, my responsibility was:
     bringing pallets with grapes to line, (un)load lorrys, movements pallets in warehouse`,id:5},
     ////
{jobTitle:"line operator",company:"Gousto Warehouse",city:"Spalding",timePeriod:{from:"24.02.2018",to:"10.07.2018"},
     description:`Work in cold store like semi-finished product packer`,id:6},
    ///
{jobTitle:"line operator",company:"Kinder Garden Plants",city:"Spalding",timePeriod:{from:"24.02.2018",to:"10.07.2018"},
    description:`flower picker in the greenhouse`,id:7},

///
{jobTitle:"line operator",company:"Cereal Innovation Centre",city:"Peterborought",timePeriod:{from:"16.04.2019",to:"17.06.2019"},
description:`Work in factory which produce cereals for brekfeast`,id:9},
///
{jobTitle:"forklift-driver",company:"Young's Seafood Humberston Road",city:"Grimsby",timePeriod:{from:"07.01.2020",to:"10.05.2020"},
description:`Work like forklif-driver on yard in fish factory`,id:10},
///

///
{jobTitle:"Driver class II",company:"ROHLIG SUUS Logistics S.A. Oddział Olsztyn",city:"Olsztyn",timePeriod:{from:"10.06.2020",to:"01.03.2021"},
description:`Class II lorry driver my responsibility was: multidrop delivery`,id:11},
///
{jobTitle:"engineer",company:"Mała elektrownia wodna",city:"Orła Białego, 11-040 Dobre Miasto, Polska",timePeriod:{from:"10.06.2021",to:"31.12.2021"},
description:`I was helper for engineer during re build  water power plant. I was helping demolition and construction new mechanism from scratch`,id:12},
//
{jobTitle:"line operator",company:"Gi Group agency",city:"6 George St, Freshney Place, Grimsby DN31 1HB, Wielka Brytania",timePeriod:{from:"23.01.2022",to:"17.06.2022"},
description:`Work like line operator in factory which produce soup, it was part time work because i needed more time for learning.`,id:13},
//
{jobTitle:"line operator",company:"AM2PM Recruitment",city:"Grimsby",timePeriod:{from:"02.07.2022",to:"10.10.2022"},
description:`Work in factory with frozen fish, it was part time work because i needed more time for learning.`,id:14},
//
{jobTitle:"driver",company:"GB Terminals Ltd",city:"South Killingholme, Immingham DN40 3DZ, Wielka Brytania",timePeriod:{from:"15.10.2022",to:"20.01.2023"},
description:`Compound driver in BMW, my responsibility was: take cars from parkng to their delivery bay`,id:15},

]
}
let myProjects=    [
  {
    titleGame:"Lurch",
    url:"https://marcinito.github.io/lurch/",
thumbNail:"/MyProjects/lurchImg.png",
describe:` Game embeded in fantastic World of LuRcH in which Timmy hero
 of this game fight against monster in order to save his sheeps.Game for people
 who are looking adventure and can handle various type of gun.Try youreslf maybe you will slay furious dragon.`,
 id:1},
 /////NEXT
 {
  titleGame:"Game Story",
  url:"https://game-story.vercel.app/",
thumbNail:"/MyProjects/gameStory.png",
describe:`Are you cut? Or have bleeding injury, becarefull
Vampire can be your guest in oncoming night, do not desired quest.
They are like shark feel smell of bleed from long distance, always thirsty and clever to get what they
want.Their attribute are long claws, sharp teeth, cunning personality`,
id:2}
]
let Sport=[
  {id:0,title:"running",img:"/AboutMe/Sport/bieganieSport.jpg",describe:"I like running throught forest, meadow, in place where is a lot of nature and listen to music or audiobook"},
  {id:1,title:"gym",img:"/AboutMe/Sport/silowniaSport.jpg",describe:"Weightlifting"},
  {id:2,title:"Mixed martial Arts",img:"/AboutMe/Sport/mmaSport.png",describe:"I was practicing myuai thai, boks, teakwondo, mma, jujutsu and watching films with bruce lee"},
  {id:3,title:"Riding on bike",img:"/AboutMe/Sport/bikeSport.png",describe:`Very good way to travel through nearest region, absorb a lot new views, and move very fast for free.I really aprreciate that somebody invent bike:`,link:"https://en.wikipedia.org/wiki/Pierre_Lallement"},
  {id:4,title:"Swimming",img:"/AboutMe/Sport/swimmingSport.png",describe:`Swimming for me is something like 'running' in water, very good exercies in order chill out.Other good side for me is that really hard is get injure`},
]
const Home: NextPage = () => {

  const dispatch=useDispatch()
  dispatch(saveDataFromApiWork(myWork))
  dispatch(saveDataMyProjects(myProjects))
  dispatch(saveDataMySport(Sport))
 
 

useEffect(()=>{
  window.scrollTo(0,0)
},[])
  return (
    <div className={s.container}>
      <Head>
        <title>Marcin Kalwara</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Collegiate+One&family=Bahianita&family=Dancing+Script:wght@500;600&family=Fasthand&family=Inconsolata:wght@200;400&family=Inspiration&family=Pacifico&family=Patrick+Hand&family=Rubik+Distressed&family=Rubik+Glitch&family=Rubik+Microbe&family=Rubik:wght@300&display=swap" rel="stylesheet"/>

        
      </Head>
      
    <nav className={s.nav}>
      <Nav></Nav>

    </nav>
      <main className={s.main}>
        <MyPhoto></MyPhoto>
        <AboutMe ></AboutMe>
        <MyProjects></MyProjects>
      </main>

      <footer className={s.footer}>
       <Contact></Contact>
      </footer>
    </div>
  )
}

export default Home
