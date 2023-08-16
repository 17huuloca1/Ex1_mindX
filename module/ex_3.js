const students = [
    {
        id: 'std001',
        name: 'Student 1',
        birthYear: 2001,
        sex: 'male'
    },
    {
        id: 'std002',
        name: 'Student 2',
        birthYear: 1996,
        sex: 'female'
    },
    {
        id: 'std003',
        name: 'Student 3',
        birthYear: null,
        sex: 'male'
    },
    {
        id: 'std004',
        name: 'Student 4',
        birthYear: 1999,
        sex: 'male'
    }
]


function calculateAge({ id, name, birthYear, sex, age = 18 } = students,) {


    birthYear = String(birthYear);

    for (const {
        id: n,
        name: f,
        birthYear: y,
        sex: s,
    } of students) {
        const currentYear = new Date().getFullYear()
        let age
        if (y !== null) {
            age = currentYear - y
        } else {
            age = 18
        }

        console.log(`id: ${n}
             name: ${f}
             birthYear: ${y}
             sex: ${s}
             age: ${age}    `)
    }
}
calculateAge()

