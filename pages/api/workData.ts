// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type DataWork = {
  dataWork:{
    jobTitle:string,
    company:string,
    city:string,
    timePeriod:{
      from:string|number
      to:string|number

  },description:string,
  id:number,
}[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataWork>
) {
  res.status(200).json(
    { dataWork:
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
})
}
