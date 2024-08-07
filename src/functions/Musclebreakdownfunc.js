import { getExerciseTypeCoefficient } from "../utils/exerciseCoefficient";
import exerciseIntensity from "../Data/ExerciseIntensity";

export const calculateMuscleBreakdown = (exercises) => {
    let totalbreakdown = 0;
    // console.log(exercises)
    const breakdowns = Object.values(exercises).map(exercise => {
        
        const { sets, reps, weight, musclegroup , name } = exercise;
        console.log(sets ,reps , weight , musclegroup , name ,exercise)

        const intensity = exerciseIntensity[name]
        const volumeLoad = sets * reps * weight;
        const exerciseCoefficient = getExerciseTypeCoefficient(intensity, musclegroup);
        const ageCoefficient = 1.0; 
        const genderCoefficient = 1.0; 
        const weightCoefficient = 0.9; 
        const heightCoefficient = 1.0;

        const breakdown = volumeLoad * exerciseCoefficient * ageCoefficient * genderCoefficient *weightCoefficient * heightCoefficient;
        totalbreakdown += breakdown

        return {breakdown} 
    })

    return { breakdowns , totalbreakdown }
}   