const mongoose = require('mongoose');
const Petition = require('./petition');
const Schema = mongoose.Schema;

const User = new Schema({
    firstName:    { type: String, min: 3, required: true },
    email:        { 
                    type: String,
                    trim: true,
                    lowercase: true, 
                    unique: true, 
                    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
                    required: 'required email'
                  },
    password:     { type: String, min: 8, required: true },
    status:       { type: String, enum: ['ENABLED', 'DISABLED'], default: 'ENABLED', required: true },
    role:         { type: String, enum: ['PRAYER', 'ADMIN'], default: 'PRAYER', required: true },
    creationDate: { type: Date, default: Date.now, required: true },
    lastAcceced:  { type: Date, required: false },
    lastModified: { type: Date, required: false },
    petitions:    [ Petition.schema ]
})

module.exports = mongoose.model('user', User);
