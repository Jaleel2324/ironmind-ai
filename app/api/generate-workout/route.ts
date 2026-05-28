import { NextResponse } from "next/server";

type WorkoutDay = {
  day: string;
  focus: string;
  intensity: string;
  exercises: string[];
};

export async function POST(request: Request) {
  const body = await request.json();

  const goal = body.goal?.toLowerCase() || "";
  const days = body.days || "5";

  let plan: WorkoutDay[] = [
    {
      day: "Monday",
      focus: "Chest + Triceps",
      intensity: "High",
      exercises: ["Incline Bench Press", "Cable Fly", "Dips", "Rope Pushdowns"],
    },
    {
      day: "Tuesday",
      focus: "Back + Biceps",
      intensity: "High",
      exercises: ["Lat Pulldown", "Barbell Row", "Seated Row", "Hammer Curls"],
    },
    {
      day: "Wednesday",
      focus: "Leg Strength",
      intensity: "Elite",
      exercises: ["Squat", "Leg Press", "Romanian Deadlift", "Calf Raises"],
    },
    {
      day: "Thursday",
      focus: "Upper Pump",
      intensity: "Moderate",
      exercises: ["Machine Press", "Cable Row", "Lateral Raises", "EZ Bar Curls"],
    },
    {
      day: "Friday",
      focus: "Conditioning + Core",
      intensity: "Moderate",
      exercises: ["Incline Walk", "Battle Ropes", "Hanging Knee Raises", "Planks"],
    },
  ];

  if (goal.includes("fat") || goal.includes("cut") || goal.includes("lose")) {
    plan = [
      {
        day: "Monday",
        focus: "Full Body Strength",
        intensity: "High",
        exercises: ["Squat", "Bench Press", "Rows", "Incline Walk"],
      },
      {
        day: "Tuesday",
        focus: "Cardio + Core",
        intensity: "Moderate",
        exercises: ["Stairmaster", "Planks", "Leg Raises", "Bike Intervals"],
      },
      {
        day: "Wednesday",
        focus: "Upper Body Strength",
        intensity: "High",
        exercises: ["Incline Press", "Lat Pulldown", "Shoulder Press", "Curls"],
      },
      {
        day: "Thursday",
        focus: "Lower Body Conditioning",
        intensity: "High",
        exercises: ["Leg Press", "Walking Lunges", "RDL", "Sled Push"],
      },
      {
        day: "Friday",
        focus: "Metabolic Circuit",
        intensity: "Elite",
        exercises: ["Kettlebell Swings", "Battle Ropes", "Pushups", "Row Machine"],
      },
    ];
  }

  if (goal.includes("chest") || goal.includes("arms") || goal.includes("back")) {
    plan = [
      {
        day: "Monday",
        focus: "Chest Priority Push",
        intensity: "Elite",
        exercises: ["Incline Bench Press", "Flat Dumbbell Press", "Cable Fly", "Weighted Dips"],
      },
      {
        day: "Tuesday",
        focus: "Back Width + Biceps",
        intensity: "High",
        exercises: ["Pullups", "Lat Pulldown", "Chest Supported Row", "Hammer Curls"],
      },
      {
        day: "Wednesday",
        focus: "Legs + Core",
        intensity: "Moderate",
        exercises: ["Squat", "Leg Curl", "Leg Extension", "Cable Crunch"],
      },
      {
        day: "Thursday",
        focus: "Arms Specialization",
        intensity: "Elite",
        exercises: ["Close Grip Bench", "EZ Bar Curl", "Rope Pushdown", "Preacher Curl"],
      },
      {
        day: "Friday",
        focus: "Upper Body Pump",
        intensity: "High",
        exercises: ["Machine Chest Press", "Seated Row", "Lateral Raises", "Cable Curls"],
      },
    ];
  }

  const limitedPlan = plan.slice(0, Number(days) || 5);

  return NextResponse.json({
    message: "Workout generated successfully.",
    plan: limitedPlan,
  });
}