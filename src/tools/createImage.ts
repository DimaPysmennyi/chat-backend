import { client } from "../client/client";

export async function createImage(filename: string, postId?: number, albumId?: number){
    if (postId){
        return client.image.create({
            data: {filename, postId}
        })
    } else{
        return client.image.create({
            data: {filename, albumId}
        })
    }
}