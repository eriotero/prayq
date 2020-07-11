const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrayerSchema = new Schema({
    prayerId: Number,
    date: Date
})

const PrayerModel = mongoose.model('prayer',PrayerSchema);

module.exports = {
    model: PrayerModel,
    schema: PrayerSchema
}