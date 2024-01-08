// Optional chianing
// to catch data from nested data store.

// users data
const userData = [ {
        personal: {
            name: "Sarwar",
            age: 23,
            height: 5.5,
            color: "Black"
        },
        loginData: {
            userName: 'sar370',
            password: 'pass123'
        },
        activity: {
            attendance: {
                signed: 24,
                absent: 2
            },
            work: {
                onTime: 85,
                overTime: 15
            }
        }
    },


    {
        personal: {
            name: "Ashik",
            age: 23,
            height: 5.6,
            color: "White"
        },
        loginData: {
            userName: 'ash370',
            password: 'pass123'
        },
        activity: {
            work: {
                onTime: 95,
                overTime: 5
            }
        }
    },


];


// first users absent days.
const absentDays1 = userData[0].activity.attendance.absent;

// get data by distructuring (reduced code)
const {signed, absent} = userData[0].activity.attendance; // write the names of inside properties in const (what to find)


// second users absent days
const absentDays2 = userData[1].activity.attendance?.absent; // use "?" to check if the data is exists here or not.
