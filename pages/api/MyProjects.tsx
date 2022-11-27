// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type DataMyProjects = {
  titleGame:string,
  url:string,
  thumbNail:string,
  describe:string,
  id:number
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataMyProjects>
) {
  res.status(200).json(
    [
    {
      titleGame:"Lurch",
      url:"https://marcinito.github.io/lurch/",
  thumbNail:"/MyProjects/lurchImg.png",
  describe:` Game embeded in fantastic World of LuRcH in which Timmy hero
   of this game fight against monster in order to save his sheep.Game for people
   who are looking adventure and can handle varioustype of gun.Try youreslf maybe you will slay furious dragon.`,
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
)
}
