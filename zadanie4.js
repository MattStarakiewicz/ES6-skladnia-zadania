const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

const average = (...grades) => { let arg = 0;
      for (let i=0; i < grades.length; i++) {
        arg += grades[i];
      }
      console.log(arg / grades.length);
}

average(...grades);