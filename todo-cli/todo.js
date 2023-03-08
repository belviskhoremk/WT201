const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

const overdue = () => {
  const now = new Date();
  return all.filter(item => !item.completed && new Date(item.dueDate) < now);
}

const dueToday = () => {
  const now = new Date();
  return all.filter(item => !item.completed && new Date(item.dueDate) >= now && formattedDate(now) === item.dueDate);
}

const dueLater = () => {
  const now = new Date();
  return all.filter(item => !item.completed && new Date(item.dueDate) >= now && formattedDate(now) !== item.dueDate);
}

const toDisplayableList = (list) => {
  return list.map(item => {
    const checkbox = item.completed ? "[x]" : "[ ]";
    const formattedDueDate = formattedDate(new Date(item.dueDate));
    return `${checkbox} ${item.title} ${formattedDueDate}`;
  }).join("\n");
}
