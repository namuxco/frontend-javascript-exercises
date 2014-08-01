module.exports.createCourse = function(title, duration, students){
  return {
    title: title,
    duration: duration,
    students: students
  };
};

module.exports.addProperty = function(object, newProp, newValue){
    if (object[newProp] == undefined) {
        object[newProp] = newValue;
        return object;
    }
    else {
        return object;
    }
};

module.exports.formLetter = function(data){
   return "Hello " + data.recipient + ",\n\n" + data.msg + "\n\nSincerely,\n" + data.sender ;
};


module.exports.canIGet = function(item, money){
    if (item === "MacBook Air" && money >= 999){
        console.log('Can Afford ', item, ' with ', money);
        return true;
    }
    else if (item === "MacBook Pro" && money >= 1299){
        console.log('Can Afford ', item, ' with ', money);
        return true;
    }
    else if (item === "Mac Pro" && money >= 2499){
        console.log('Can Afford ', item, ' with ', money);
        return true;
    }
    else if (item === "Apple Sticker" && money >= 1){
        console.log('Can Afford ', item, ' with ', money);
        return true;
    }
    else {
        console.log('Can not Afford ', item, ' with ', money);
        return false;
    }
};

