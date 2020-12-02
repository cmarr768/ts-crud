import mongoose, { Schema, Document } from "mongoose"

export enum boardColumns {
    backlog ='backlog',
    inProcess = 'in process',
    done = 'done'
}

interface IBoard extends Document {
    name: string,
    userId: string,
    columns: []
}

const boardSchema = new Schema({
    name: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    columns: {
        type:[String],
        enum: boardColumns
    }
},
    {
        timestamps: true
    });

export const Board = mongoose.model<IBoard>('Board', boardSchema)