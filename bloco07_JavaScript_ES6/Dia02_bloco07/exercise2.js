const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
}

const addTurno = (object, key, value) => {
  object[key] = value;
}
addTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

const objKeys = (obj) => Object.keys(obj);
console.log(objKeys(lesson3));

const objSize = (obj) => Object.keys(obj).length;
console.log(objSize(lesson3));

const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);


const totalStudents = () => {
  const lesson1Students = allLessons.lesson1.numeroEstudantes;
  const lesson2Students = allLessons.lesson2.numeroEstudantes;
  const lesson3Students = allLessons.lesson3.numeroEstudantes;
  let total = lesson1Students + lesson2Students + lesson3Students;
  console.log(total);
}
totalStudents();

const checkValue = (obj, num) => {
  Object.values(obj)[num];
}
console.log(checkValue(lesson1, 1))

