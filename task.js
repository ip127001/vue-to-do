var input = [{
    'teacher': 'Walter',
    'student': 'Isaac'
}, {
    'teacher': 'Bunter',
    'student': 'Mulan'
}, {
    'teacher': 'Simba',
    'student': 'Ankita'
}, {
    'teacher': 'Simba',
    'student': 'Priyanka'
}, {
    'teacher': 'Walter',
    'student': 'Senthura'
}, {
    'teacher': 'Param',
    'student': 'Urpa'
}, {
    'teacher': 'Bunter',
    'student': 'Nikita'
}]


const output = (array) => {
    return array.reduce((obj, item) => { // it returns the output object with key as "teacher name" and value as "array of students belong to that teacher" 
        for (var key in obj) { // loop throught object for finding the key if teacher name is repeated or not
            if (item.teacher == key) {
                obj[key].push(item.student);
                return obj;
            }
        }
        var arr = [];
        arr.push(item.student)
        // console.log(item.teacher)
        obj[item.teacher] = arr // each time object is created, teacher name and array of students is pushed to object.
        return obj
    }, {})
}

console.log(output(input));

/*
Array.reduce(function(prev, next) {}, {})  
Empty array is passed for prev
first iteration: prev = {}, next=current object in array
second iteration = prev = {key: value} => last updated object return by callback function, next=current object
.
.
.
after last iteration overall function named output return final updated object.
*/