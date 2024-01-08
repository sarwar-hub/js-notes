// dot notaion, object notation



// user data
const userData = {
    personal: { name: "Sarwar", age: 23, height: 5.5, color: "Black" },
    loginData: { userName: 'sar370', password: 'pass123' },
    activity: { 
        attendance: 
        { signed: 24, absent: 2 },

        work:
        { onTime: 85, overTime: 15 }
    }
};



// find users data by dot notation
const absent = userData.activity.attendance.absent;
//console.log(absent);


// find users data by obeject notation ( [] )
const absent2 = userData['activity']['attendance']['absent'];
//console.log(absent2);


// alternative use of object notation
const property = 'absent';
const absent3 = userData.activity.attendance[property];
//console.log(absent3);



// dot notation dosent work for these key-name types
/**
 * 123 (number)
 * 123absent (starts with number)
 * user-absent (hiphens)
 * 'absent' (in qoutation)
*/


// but object notation can work for all type key-names