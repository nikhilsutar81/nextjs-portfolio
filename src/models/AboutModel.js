import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
    photo: {
        id: String,
        url: String
    }
}, { timestamps: true });

const AboutModel = mongoose.models.About || mongoose.model('About', aboutSchema);
export default AboutModel;