import * as mongoose from 'mongoose'

export interface Usersinterface  extends mongoose.Document {
    readonly username: string;
    readonly password: string;
}