import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const message = body.message || "";

  const lower = message.toLowerCase();

  let reply =
    "IRONMIND analyzed your request. I recommend adjusting your training based on your goals, recovery, nutrition, and weekly progress photos.";

  if (lower.includes("chest") || lower.includes("arms") || lower.includes("back")) {
    reply =
      "Updated upper-body priority plan: Push Day, Pull Day, Legs, Upper Pump, and Conditioning. Chest, arms, and back volume will increase while recovery stays protected.";
  }

  if (lower.includes("fat") || lower.includes("lose") || lower.includes("cut")) {
    reply =
      "Fat-loss strategy created: keep strength training heavy, add 2 cardio sessions, reduce calories slightly on rest days, and track weekly progress photos.";
  }

  if (lower.includes("meal") || lower.includes("protein") || lower.includes("calorie")) {
    reply =
      "Nutrition plan updated: target 2,650 calories, 210g protein, moderate carbs around workouts, and consistent hydration throughout the day.";
  }

  return NextResponse.json({
    reply,
  });
}