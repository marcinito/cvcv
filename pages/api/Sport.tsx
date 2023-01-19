import type { NextApiRequest, NextApiResponse } from 'next'

export interface SportType{
    id:number,
    title:string,
    img:string,
    describe:string,
    link?:string
}

export default function handler(req:NextApiRequest, res:NextApiResponse<SportType[]>) {
    res.status(200).json(
        [
            {id:0,title:"running",img:"/AboutMe/Sport/bieganieSport.jpg",describe:"I like running throught forest, meadow, in place where is a lot of nature and listen to music or audiobook"},
            {id:1,title:"gym",img:"/AboutMe/Sport/silowniaSport.jpg",describe:"Weightlifting"},
            {id:2,title:"Mixed martial Arts",img:"/AboutMe/Sport/mmaSport.png",describe:"I was practicing myuai thai, boks, teakwondo, mma, jujutsu and watching films with bruce lee"},
            {id:3,title:"Riding on bike",img:"/AboutMe/Sport/bikeSport.png",describe:`Very good way to travel through nearest region, absorb a lot new views, and move very fast for free.I really aprreciate that somebody invent bike:`,link:"https://en.wikipedia.org/wiki/Pierre_Lallement"},
            {id:4,title:"Swimming",img:"/AboutMe/Sport/swimmingSport.png",describe:`Swimming for me is something like 'running' in water, very good exercies in order chill out.Other good side for me is that really hard is get injure`},
        ]
        )
  }