
const task = (value) => {
  return (
    <li>{value}</li>
  );
};

function App() {
  const tasks =['Estudar React', 'Estudar componentes', 'Estudar Classes'];
  return (
    tasks.map((tarefa) => {
      return(
      task(tarefa))
    }) 
  );
}

export default App;
