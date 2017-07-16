var mongoose = require ('mongoose');
var Campground = require ("./models/campground");
var Comment = require ("./models/comment");

var data = [
            {
                name: "Cloud's Rest",
                image: "https://farm1.staticflickr.com/112/316612921_f23683ca9d.jpg",
                description: "Vestibulum pharetra sed turpis eu scelerisque. Nam venenatis mauris nec tellus tristique maximus. Quisque finibus augue id turpis sollicitudin, at ullamcorper odio ultrices. Morbi rutrum enim eget elit faucibus, id vestibulum sapien posuere. Fusce vel mi eu purus blandit ornare. Vestibulum ultrices nulla commodo volutpat sodales. Vestibulum pharetra nulla mi, at mollis est aliquet ut. Quisque lacinia nunc id arcu consequat feugiat. Etiam quis ultricies risus. Vestibulum lacinia odio non neque rutrum, ut placerat eros aliquet. Phasellus aliquam quam a orci viverra gravida. Mauris a venenatis nunc, in porta lacus. Aliquam non consequat metus. Vestibulum sollicitudin velit quis lectus elementum volutpat."
            },
            {
            name: "Desert Mesa",
            image: "https://farm1.staticflickr.com/7/5954480_34a881115f.jpg",
            description: "Nulla tempus orci quis ex pulvinar, id egestas tortor iaculis. Mauris a fringilla sapien. Sed volutpat nunc eget sollicitudin rhoncus. Cras suscipit quis nisi vitae scelerisque. Aenean vel libero non tortor vulputate pellentesque non nec urna. Nulla nec gravida lacus. Morbi at molestie felis. "
            },
            {
            name: "Canyon Floor",
            image: "https://farm1.staticflickr.com/106/316612923_1fc06a0cdf.jpg",
            description: "Morbi a leo pellentesque, semper massa et, dapibus metus. Nulla commodo est ac erat elementum dictum. Etiam quis tortor maximus, dictum odio sit amet, mattis tortor. Ut quis risus at massa dictum lacinia. Praesent et tellus a sapien dapibus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
        ];



function seedDB (){
    //REMOVE CAMPGROUNDS
        Campground.remove({}, function (err){
        if (err){
            console.log(err);
        }
        console.log("Removed Campgrounds!");
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if (err){
                console.log(err);
            } else {
                console.log("added a campground");
                //create a comment on each campground
                Comment.create({
                    text: "This place is greate, but I wish there was internet",
                    author: "Homer"
                }, function(err, comment){
                    if (err){
                        console.log(err)
                    } else {
                      campground.comments.push(comment);
                      campground.save(); 
                      console.log("Created new comment");
                    }
                })
            }
        })
    })
    });
    //add a few campgrounds
   
    //add a few comments
};

module.exports = seedDB;