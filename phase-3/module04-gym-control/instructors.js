const fs = require('fs');
const data = require('./data.json')
const { age } = require('./utils.js');

//create
exports.post = function(req,res) {
    const keys = Object.keys(req.body);

    for(key of keys) {
        if(req.body[key] == "") {
            return res.send("Please, fill all fields.")
        }
    }

    let { avatar_url, birth, gender, services, name } = req.body;

    birth = Date.parse(birth);
    const created_at = Date.now();
    const id = Number(data.instructors.length + 1);

    data.instructors.push({
        id,
        name,
        avatar_url,
        gender,
        services,
        birth,
        created_at
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write files error.");
    
        return res.redirect("/instructors");
    });
};

//show
exports.show = function(req,res) {
    const { id } = req.params;

    const foundInstructor = data.instructors.find(function(instructor) {
        return instructor.id == id;
    });

    if(!foundInstructor) return res.send("Instructor not found");

    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: ""
    };;

    return res.render("instructors/show",{instructor});
};