import mongoose from "mongoose";

import autoIncrement from "mongoose-auto-increment";

const useScheme = mongoose.Schema({
  laptopName: String,
  brandName: String,
  laptopCamera: String,
  laptopWeight: String,
  laptopPrice: String,
});

autoIncrement.initialize(mongoose.connection);

useScheme.plugin(autoIncrement.plugin, "laptopUser");

const laptopUser = mongoose.model("laptopUser", useScheme);

export default laptopUser;
