import mongoose from "mongoose";


const Connection = async (username, password) => {
    // const url = `mongodb://${username}:${password}@ac-flg2dsm-shard-00-00.knnjioj.mongodb.net:27017,ac-flg2dsm-shard-00-01.knnjioj.mongodb.net:27017,ac-flg2dsm-shard-00-02.knnjioj.mongodb.net:27017/?ssl=true&replicaSet=atlas-4y20j0-shard-0&authSource=admin&retryWrites=true&w=majority`
    
    // const url = `mongodb://user:<password>@ac-flg2dsm-shard-00-00.knnjioj.mongodb.net:27017,ac-flg2dsm-shard-00-01.knnjioj.mongodb.net:27017,ac-flg2dsm-shard-00-02.knnjioj.mongodb.net:27017/?ssl=true&replicaSet=atlas-4y20j0-shard-0&authSource=admin&retryWrites=true&w=majority`
    
    // const url = `mongodb://${username}:${password}@ac-flg2dsm-shard-00-00.knnjioj.mongodb.net:27017,ac-flg2dsm-shard-00-01.knnjioj.mongodb.net:27017,ac-flg2dsm-shard-00-02.knnjioj.mongodb.net:27017/?ssl=true&replicaSet=atlas-4y20j0-shard-0&authSource=admin&retryWrites=true&w=majority`


const url = `mongodb://user:user1234@ac-flg2dsm-shard-00-00.knnjioj.mongodb.net:27017,ac-flg2dsm-shard-00-01.knnjioj.mongodb.net:27017,ac-flg2dsm-shard-00-02.knnjioj.mongodb.net:27017/?ssl=true&replicaSet=atlas-4y20j0-shard-0&authSource=admin&retryWrites=true&w=majority`




    try {
        // await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
       mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database is connected successfully");
    } catch (error) {
        console.log("Error in DB Connection" + error)
    }
}

export default Connection;