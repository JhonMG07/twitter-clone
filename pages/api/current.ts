import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
    req:NextApiRequest, 
    res: NextApiResponse
){
    if(req.method !== "GET"){
        return res.status(405).end();
    }
    try{
        const {currentUser} = await serverAuth(req);

        return res.status(200).json(currentUser);
    }catch(eror){
        console.log(eror);
        return res.status(500).end();
    }

    
}