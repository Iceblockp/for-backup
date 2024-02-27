const marks = {
    mm: 45,
    en: 72,
    math: 96,
    chem: 87,
    phy: 85,
    bio: 54

}


let totalMarks=0;

for(let mark in marks){
    totalMarks+=marks[mark];
}
console.log(totalMarks);





const allStudentsMark = [
    {
        name: "Mg Mg",
        marks: [
            {
                subject: "Myanmar",
                short: "mm",
                mark: 45
            },
            {
                subject: "English",
                short: "en",
                mark: 72
            },
            {
                subject: "Mathematic",
                short: "math",
                mark: 96
            },
            {
                subject: "Chemistry",
                short: "chem",
                mark: 87
            },
            {
                subject: "Physics",
                short: "phy",
                mark: 85
            },
            {
                subject: "Biology",
                short: "bio",
                mark: 54
            }
        ],
    },
    {
        name: "Kyaw Kyaw",
        marks: [
            {
                subject: "Myanmar",
                short: "mm",
                mark: 50
            },
            {
                subject: "English",
                short: "en",
                mark: 34
            },
            {
                subject: "Mathematic",
                short: "math",
                mark: 65
            },
            {
                subject: "Chemistry",
                short: "chem",
                mark: 38
            },
            {
                subject: "Physics",
                short: "phy",
                mark: 40
            },
            {
                subject: "Biology",
                short: "bio",
                mark: 45
            }
        ],
    },
    {
        name: "Su Su",
        marks: [
            {
                subject: "Myanmar",
                short: "mm",
                mark: 68
            },
            {
                subject: "English",
                short: "en",
                mark: 83
            },
            {
                subject: "Mathematic",
                short: "math",
                mark: 85
            },
            {
                subject: "Chemistry",
                short: "chem",
                mark: 90
            },
            {
                subject: "Physics",
                short: "phy",
                mark: 87
            },
            {
                subject: "Biology",
                short: "bio",
                mark: 83
            }
        ],
    }

]


