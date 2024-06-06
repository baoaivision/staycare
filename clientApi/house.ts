import http from "@/utils/http"
import { headers } from "next/headers"

export const house = {
    getHouse : async () => {
        return await http.get(`/houses`,{
            headers: {
                "Content-Type": "application/json", 
              },
        })
    },
    getDetailHouse : async (slug : string) => {
        return await http.get(`houses/${slug}`,{
            headers: {
                "Content-Type": "application/json", 
              }
        })
    }
}