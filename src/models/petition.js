const mongoose = require('mongoose');
const Prayer = require('./prayer');
const Schema = mongoose.Schema;

const PetitionSchema = new Schema({
    subject:      { type: String, min: 10, require: true },
    idiom:        { type: String, require: false},
    status:       { type: String, enum: ['PENDING', 'RESPONDED'], default: 'PENDING', required: true },
    creationDate: { type: Date, default: Date.now, required: true },
    lastModified: { type: Date, required: false},
    prayers:      [ Prayer.schema ]
})

const PetitionModel = mongoose.model('petition', PetitionSchema);

module.exports = {
    model: PetitionModel,
    schema: PetitionSchema
}