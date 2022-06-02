const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        tweet: {type: String, required: true},
        like : { type: Number, required: false},
        replies : [{type: String}],
        post_pic: [{ type: String }],
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
          },
    }
);

const Post = mongoose.model("post", postSchema);

module.exports = Post