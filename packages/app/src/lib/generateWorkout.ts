import type { Exercise } from "../schemas/Exercise";
import type { Workout } from "../schemas/Workout";

function getMultipleRandom(arr: Exercise[], num: number) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

export function generateWorkout(): Workout {
    const primary = getMultipleRandom(
        [
            { name: "Squat" },
            { name: "Bench" },
            { name: "Deadlift" },
            { name: "OHP" },
        ],
        2
    );
    const secondary = getMultipleRandom(
        [
            { name: "Barbell Row" },
            { name: "Pullup" },
            { name: "Dips" },
            { name: "Leg Press" },
            { name: "Leg Curl" },
        ],
        2
    );

    const generatedWorkout: Workout = {
        t1: primary[0],
        t2: primary[1],
        t3a: secondary[0],
        t3b: secondary[1],
    };

    console.log(generatedWorkout);

    return generatedWorkout;
}
