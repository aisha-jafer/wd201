const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date(
      dateToday.getFullYear(),
      dateToday.getMonth(),
      dateToday.getDate()
    );
    return all.filter((item) => {
      if (item.dueDate) {
        const itemDueDate = new Date(
          item.dueDate.getFullYear(),
          item.dueDate.getMonth(),
          item.dueDate.getDate()
        );
        return itemDueDate < today && !item.completed;
      }
      return false;
    });
    // Write the date check condition here and return the array
    // of overdue items accordingly.
  };

  const dueToday = () => {
    const today = new Date(
      dateToday.getFullYear(),
      dateToday.getMonth(),
      dateToday.getDate()
    );
    return all.filter((item) => {
      if (item.dueDate) {
        const itemDueDate = new Date(
          item.dueDate.getFullYear(),
          item.dueDate.getMonth(),
          item.dueDate.getDate()
        );
        return itemDueDate.getTime() === today.getTime() && !item.completed;
      }
      return false;
    });

    // This function checks if the due date of the todo item
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
  };

  const dueLater = () => {
    const today = new Date(
      dateToday.getFullYear(),
      dateToday.getMonth(),
      dateToday.getDate()
    );
    return all.filter((item) => {
      if (item.dueDate) {
        const itemDueDate = new Date(
          item.dueDate.getFullYear(),
          item.dueDate.getMonth(),
          item.dueDate.getDate()
        );
        return itemDueDate > today && !item.completed;
      }
      return false;
    });
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
  };

  const toDisplayableList = (list) => {
    let output = "";
    const today = new Date(
      dateToday.getFullYear(),
      dateToday.getMonth(),
      dateToday.getDate()
    );
    list.forEach((item) => {
      let checkbox = item.completed ? "[x]" : "[ ]";
      let dateString = "";
      if (item.dueDate) {
        const itemDueDate = new Date(
          item.dueDate.getFullYear(),
          item.dueDate.getMonth(),
          item.dueDate.getDate()
        );
        if (itemDueDate.getTime() !== today.getTime()) {
          const day = String(item.dueDate.getDate()).padStart(2, "0");
          const month = String(item.dueDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
          dateString = ` ${day}-${month} `;
        }
      }
      output += `${checkbox} ${item.title}${dateString}\n`;
    });
    return output.trim();

    // Format the To-Do list here, and return the output string
    // as per the format given above.
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
