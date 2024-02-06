import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
    {
        name: String,
        color: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
          },
      }, {
        timestamps: true
      }
)

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
