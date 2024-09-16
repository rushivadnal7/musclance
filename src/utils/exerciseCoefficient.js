const baseIntensityCoefficients = {
    high: 1.5,
    moderate: 1.2,
    low: 1.0
};

const muscleGroupAdjustments = {
    legs: 0.5,
    back: 0.2,
    chest: 0.1,
    shoulders: 0.0,
    biceps: -0.1,
    triceps: -0.1,
};

const getExerciseTypeCoefficient = (intensity, muscleGroup) => {
    const baseCoefficient = baseIntensityCoefficients[intensity] || 1.0;
    const muscleAdjustment = muscleGroupAdjustments[muscleGroup] || 0.0;
    
    return baseCoefficient + muscleAdjustment;
};

export { getExerciseTypeCoefficient };