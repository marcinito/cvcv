import type { NextApiRequest, NextApiResponse } from 'next'

export interface SportType{
    id:number,
    title:string,
    img:string,
    describe:string
}

export default function handler(req:NextApiRequest, res:NextApiResponse<SportType[]>) {
    res.status(200).json(
        [
            {id:0,title:"running",img:"/AboutMe/Sport/bieganieSport.jpg",describe:"I like running throught forest, meadow, in place where is a lot of nature and listen to music or audiobook"},
            {id:1,title:"gym",img:"/AboutMe/Sport/silowniaSport.jpg",describe:"Weightlifting"},
        ]
        )
  }