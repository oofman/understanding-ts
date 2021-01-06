// Partial
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let CourseGoal: Partial<CourseGoal> = {};
  CourseGoal.title = title;
  CourseGoal.description = description;
  CourseGoal.completeUntil = date;
  return CourseGoal as CourseGoal;

  // return { title: title, description: description, completeUntil: date };
}

// Read-Only
const names: Readonly<string[]> = ["Max", "Theo"];
// names.push('Another Name');
// names.pop();
