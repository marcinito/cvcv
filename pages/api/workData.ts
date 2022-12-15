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
  id:number
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
        {jobTitle:"builder",company:"Stas-Bud",city:"Olsztyn",timePeriod:{from:"10.07.2012",to:"28.08.2012"},
  description:"My responsibility was destroy old wall and prepare the site for rebuilding",id:0},
  //Second
  {jobTitle:"builder",company:"Stas-Bud",city:"Olsztyn",timePeriod:{from:"10.07.2012",to:"28.08.2012"},
  description:"ii opioppi opi opiop iopiipiopo oooooooo oo ooo oooiiii iiiiiiii iiiiii iiiiiii iiiip",id:1},
  //Third
  {jobTitle:"builder",company:"Stas-Bud",city:"Olsztyn",timePeriod:{from:"10.07.2012",to:"28.08.2012"},
  description:"Work on building area, clsdsada l",id:2},
  //Four
  {jobTitle:"builder",company:"Stas-Bud",city:"Olsztyn",timePeriod:{from:"10.07.2012",to:"28.08.2012"},
  description:"Work on building area, cleaning , help with unmount old arrangement of wall",id:3},
  //Five

]
})
}
