const mongoose = require('mongoose');
mongoose.connect('Mongo_DB_URL');

const AdminSchema = new mongoose.Schema({
    username: String, password: String, MadeCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String,
    price: Number
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    PurchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin, User, Course
}