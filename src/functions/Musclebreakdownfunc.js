import { getExerciseTypeCoefficient } from "../utils/exerciseCoefficient";
import exerciseIntensity from "../Data/ExerciseIntensity";

export const calculateMuscleBreakdown = (exercises) => {
    let totalbreakdown = 0;
    const breakdowns = Object.values(exercises).map(exercise => {
        
        const { sets, reps, weight, musclegroup , name } = exercise;
        console.log(name )

        const intensity = exerciseIntensity[name]
        const volumeLoad = sets * reps * weight;
        const exerciseCoefficient = getExerciseTypeCoefficient(intensity, musclegroup);
        const ageCoefficient = 1.0; 
        const genderCoefficient = 1.0; 
        const weightCoefficient = 0.9; 
        const heightCoefficient = 1.0;

        const breakdown = volumeLoad * exerciseCoefficient * ageCoefficient * genderCoefficient *weightCoefficient * heightCoefficient;
        totalbreakdown += breakdown

        return { 'name' : name ,
            'value': breakdown} 
    })

    return {  breakdowns , totalbreakdown }
}   