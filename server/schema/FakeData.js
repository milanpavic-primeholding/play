const UserList = [
    {
        id: "1",
        name: "Milan",
        username: "milan1",
        age: 33,
        nationality: "SERBIA",
        friends: [
            {
                id: "3",
                name: "Milan",
                username: "milan3",
                age: 31,
                nationality: "SERBIA",
            },
        ],
    },
    {
        id: "2",
        name: "Milan",
        username: "milan2",
        age: 32,
        nationality: "SERBIA",
    },
    {
        id: "3",
        name: "Milan",
        username: "milan3",
        age: 31,
        nationality: "SERBIA",
    },
];

const Movies = [
    {
        id: "1",
        name: "Avengers Endgame1",
        yearOfPublication: 2018,
        isInTheaters: true,
    },
    {
        id: "2",
        name: "Avengers Endgame2",
        yearOfPublication: 2019,
        isInTheaters: false,
    },
    {
        id: "3",
        name: "Avengers Endgame3",
        yearOfPublication: 2020,
        isInTheaters: true,
    },
];

module.exports = { UserList, Movies };
