import { errors, IErrors } from "../config/errorCodes"
import { Prisma } from "../generated"

export function handleError(error: unknown){
    if (error instanceof Prisma.PrismaClientKnownRequestError){
        if (error.code in Object.keys(errors)){
            const errorKey: keyof IErrors = error.code
            console.log(errors[errorKey])
        }
    }     
}