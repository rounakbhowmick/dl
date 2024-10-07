import stopSignImage from "../assets/stop.png"; // Import the local image

export const questions = [
  {
    question:
      "Near a pedestrian crossing, when the pedestrians are waiting to cross the road, you should...",
    options: [
      "Sound horn and proceed",
      "Slow down, sound horn and pass",
      "Stop the vehicle and wait till the pedestrians cross the road and then proceed",
      "None of above",
    ],
    answer: 2,
    id: 1,
  },
  {
    question: "This sign represents...",
    image: stopSignImage,
    options: ["Stop", "No parking", "Hospital ahead", "Give way"],
    answer: 0,
    id: 2,
  },
  {
    question:
      "You are approaching a narrow bridge, another vehicle is about to enter the bridge from opposite side you should...",
    options: [
      "Increase the speed and try to cross the bridge as fast as possible",
      "Put on the headlight and pass the bridge",
      "Wait till the other vehicle crosses the bridge and then proceed",
      "None of the above",
    ],
    answer: 2,
    id: 3,
  },
  {
    question: "This sign represents...",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Compulsory_turn_left.svg/2048px-Compulsory_turn_left.svg.png", // URL of the image
    options: [
      "Keep left",
      "There is no road to the left",
      "Compulsory turn left",
      "Compulsory turn right",
    ],
    answer: 2,
    id: 4,
  },
  {
    question:
      "When a vehicle is involved in an accident causing injury to any person...",
    options: [
      "Take the vehicle to the nearest police station and report the accident",
      "Stop the vehicle and report to the police",
      "Take all reasonable steps to secure medical attention to the injured and report to the nearest police station within 24 hours",
      "None of the above",
    ],
    answer: 2,
    id: 5,
  },
];
