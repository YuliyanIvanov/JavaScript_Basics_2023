function projects(input) {
  let architect = input[0];
  let projects = Number(input[1]);
  let timeForOneProject = 3;
  let timeForProjects = projects * timeForOneProject;

  console.log(
    `The architect ${architect} will need ${timeForProjects} hours to complete ${projects} project/s.`
  );
}

projects(["George ", "4 "]);
projects(["Sanya ", "9 "]);
