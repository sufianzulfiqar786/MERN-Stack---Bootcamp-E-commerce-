import mongoose from 'mongoose'

import autoIncrement from 'mongoose-auto-increment'

const useSchema = mongoose.Schema({
    fullname:  String,
    username: String,
    email: String,
    number: String
})

autoIncrement.initialize(mongoose.connection)

useSchema.plugin(autoIncrement.plugin, 'registeruser')

const User = mongoose.model('registeruser', useSchema)

export default User 