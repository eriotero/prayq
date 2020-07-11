const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrayerSchema = new Schema({
    prayerId: {type: Number, require: true},
    date: {type: Date, default: Date.now, require: true }
})

const PrayerModel = mongoose.model('prayer',PrayerSchema);

module.exports = {
    model: PrayerModel,
    schema: PrayerSchema
}