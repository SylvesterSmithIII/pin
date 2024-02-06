import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
    {
        name: String,
        description: String,
        date: Date,
        priority: {
            typeof: Number,
            enum: [1, 2, 3, 4]
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        },
      }, {
        timestamps: true
      }
)

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
