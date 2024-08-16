import dotenv from "dotenv"
dotenv.config()

export const PORT = process.env.PORT;

export const mongoDBURL = `mongodb://${process.env.MONOGODB_USERNAME}:${process.env.MONOGODB_PASSWORD}@${process.env.MONOGODB_URI}:27017`
// export const mongoDBURL = process.env.MONOGODB_URI
// "mongodb://${process.env.MONOGODB_USERNAME}:${process.env.MONOGODB_PASSWORD}@${process.env.MONOGODB_URI}:27017"
//export const mongoDBUSERNAME = process.env.MONOGODB_USERNAME
//export const mongoDBPASSWORD = process.env.MONOGODB_PASSWORD


// Please create a free database for yourself.
// This database will be deleted after tutorial