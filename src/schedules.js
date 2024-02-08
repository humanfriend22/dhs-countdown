const now = new Date();

export function currentScheduleState() {
    const schedule = schedules[now.getDay() - 1].map(object => ({
        start: arrayToDate(object.start),
        end: arrayToDate(object.end),
        duration: object.duration
    }));

    let periodsDone = 0;
    for (const period of schedule) {
        if (now > period.end) {
            periodsDone++;
        } else {
            console.log(period.end)
            return {
                inSession: true,
                periodEnd: period.end,
                schoolEnd: schedule[schedule.length - 1].end,
            }
        }
    }

    return {
        inSession: false
    }
};

function arrayToDate(array) {
    return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        ...array
    )
}

export const schedules = [
    [
        { start: [7, 15], end: [8, 15], duration: 60 },
        { start: [8, 30], end: [9, 22], duration: 52 },
        { start: [9, 28], end: [10, 20], duration: 52 },
        { start: [10, 26], end: [11, 18], duration: 52 },
        { start: [11, 24], end: [12, 16], duration: 52 },
        { start: [12, 16], end: [12, 51], duration: 35 },
        { start: [12, 57], end: [13, 49], duration: 52 },
        { start: [13, 55], end: [14, 47], duration: 52 },
        { start: [14, 53], end: [15, 45], duration: 52 },
    ],
    [
        { start: [7, 15], end: [8, 15], duration: 60 },
        { start: [8, 30], end: [10, 6], duration: 96 },
        { start: [10, 12], end: [11, 48], duration: 96 },
        { start: [11, 48], end: [12, 23], duration: 35 },
        { start: [12, 29], end: [14, 5], duration: 96 },
        { start: [14, 11], end: [15, 47], duration: 96 },
    ],
    [
        { start: [8, 0], end: [9, 0], duration: 60 },
        { start: [9, 0], end: [10, 36], duration: 96 },
        { start: [10, 42], end: [12, 23], duration: 101 },
        { start: [12, 23], end: [1, 8], duration: 45 },
        { start: [1, 14], end: [2, 50], duration: 96 },
    ],
    [
        { start: [7, 15], end: [8, 15], duration: 60 },
        { start: [8, 30], end: [10, 6], duration: 96 },
        { start: [10, 12], end: [11, 48], duration: 96 },
        { start: [11, 48], end: [12, 23], duration: 35 },
        { start: [12, 29], end: [2, 5], duration: 96 },
        { start: [2, 11], end: [3, 47], duration: 96 },
    ],
    [
        { start: [7, 15], end: [8, 15], duration: 60 },
        { start: [8, 30], end: [10, 6], duration: 96 },
        { start: [10, 12], end: [11, 53], duration: 101 },
        { start: [11, 53], end: [12, 38], duration: 45 },
        { start: [12, 44], end: [2, 20], duration: 96 },
    ]
];