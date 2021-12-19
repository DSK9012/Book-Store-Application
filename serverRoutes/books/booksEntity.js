const mongoose=require('mongoose');

const booksEntity=mongoose.Schema({
    bookName:{
        type:String,
        default: '',
        required:true
    },
    subjectRelated:{
        type: Array,
        default: []
    },
    authors:{
        type:Array,
        default:[]
    },
    edition:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    relatedClass:{
        type:Array,
        default:[]
    },
    instituteName:{
        type:String,
        default:''
    },
    recommendedTo:{
        type:Array,
        default:[]
    },
    accessType:{
        type:String,
        default:'private',
        require: true
    },
    rating:{
        value:{
            type: Number,
            default: 0
        },
        ratedUsers:{
            type: Array,
            default: []
        }
    },
    tags:{
        type:Array,
        default: []
    },
    likedUsers:{
        type: Array,
        default: []
    },
    viewedUsers:{
        type: Array,
        default: []
    },
    bookCoverImgName:{
        type: String,
        default:''
    },
    bookDocName:{
        type: String,
        default: ''
    },
    createdBy:{
        type: String,
        default:'',
        require: true
    },
    updatedBy:{
        type: String,
        default: '',
        require: true
    }
},
{
    timestamps: true
});

module.exports=mongoose.model('books', booksEntity);