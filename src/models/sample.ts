import * as mongoose from 'mongoose'
import { Schema } from 'mongoose'
import { config } from '../constants/settings'
import { v4 as uuidv4 } from 'uuid'

const sampleSchema = new Schema({
    _id:{
        type:String,default: function genUUID(){
            return uuidv4()
        }

    },
    samepleName:{
        type:String,
        required:true
    }
},{
    toObject: {
        transform(doc, ret) {
          ret.id = ret._id;
          delete ret._id;
          return ret;
        }
      },
      toJSON: {
        transform(doc, ret) {
          ret.id = ret._id;
          delete ret._id;
          return ret;
        }
      },
      timestamps: true, versionKey: false
})

export const UserDb = mongoose.model(config.mongodb.collections.sample,sampleSchema)
