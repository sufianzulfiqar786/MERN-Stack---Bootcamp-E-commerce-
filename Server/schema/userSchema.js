import mongoose from 'mongoose'

import autoIncrement from 'mongoose-auto-increment'

const useSchema = mongoose.Schema({
    phoneName:  String,
        brandName: String,
        phoneCamera: String,
        phoneWeight: String,
        phonePrice: String,
        phoneImage:String
})

autoIncrement.initialize(mongoose.connection)

useSchema.plugin(autoIncrement.plugin, 'phoneuser')

const User = mongoose.model('phoneuser', useSchema)

export default User 