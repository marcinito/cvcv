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
  description:"sadasdasdf sdrfsdsdfas dfsdafsd afsdafdsa fdsfdsf sdfdsfsdfs dfdsfds"},
  //Second
  {jobTitle:"builder",company:"Stas-Bud",city:"Olsztyn",timePeriod:{from:"10.07.2012",to:"28.08.2012"},
  description:"ii opioppi opi opiop iopiipiopo oooooooo oo ooo oooiiii iiiiiiii iiiiii iiiiiii iiiip"},
  //Third
  {jobTitle:"builder",company:"Stas-Bud",city:"Olsztyn",timePeriod:{from:"10.07.2012",to:"28.08.2012"},
  description:"Work on building area, clsdsada l"},
  //Four
  {jobTitle:"builder",company:"Stas-Bud",city:"Olsztyn",timePeriod:{from:"10.07.2012",to:"28.08.2012"},
  description:"Work on building area, cleaning , help with unmount old arrangement of wall"},
  //Five

]
})
}
