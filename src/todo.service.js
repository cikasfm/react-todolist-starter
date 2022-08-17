const todoList = ["first task", "task 2", "third task"];

let count = 0;

const delay = (time) =>
  new Promise((resolve, reject) => {
    if (++count % 5 === 0) return reject(`weird error ${count}`);
    setTimeout(resolve, time);
  });

const random = (max = 1000) => Math.floor(Math.random() * max);

const getList = () =>
  JSON.parse(localStorage.getItem("todoList") || JSON.stringify(todoList));
const setList = (list = []) =>
  localStorage.setItem("todoList", JSON.stringify(list));

/**
 * Creates a random delay ( up to 1000ms ) and returns a promise.
 *
 * Will "reject" a promise every 5th call
 *
 * @returns {Promise<unknown>}
 */
const randomDelay = () => delay(random());

/**
 * Returns a list of tasks ( as a Promise )
 *
 * @returns {Promise} todoList array wrapped in a Promise
 */
export const getTasks = async () => randomDelay().then(() => getList());

/**
 * <p>Sets a list of tasks to the Local Storage</p>
 *
 * @param {Array} newList a list of tasks
 * @returns {Promise} todoList array wrapped in a Promise
 */
export const setTasks = async (newList = []) =>
  randomDelay()
    .then(() => setList([...newList]))
    .then(() => getList());

/**
 * <p>Adds a new task to add to the list and updates the list in Local Storage</p>
 *
 * @param {string} task a new task to add to the list
 * @returns {Promise} todoList array wrapped in a Promise
 */
export const addTask = async (task) =>
  randomDelay()
    .then(() => setList([...getList(), task]))
    .then(() => getList());

/**
 * <p>Removes the first matching task from the list and updates the list in Local Storage</p>
 *
 * @param {string} task a task to remove
 * @returns {Promise} todoList array wrapped in a Promise
 */
export const removeTask = async (task) =>
  randomDelay()
    .then(() => {
      let list = getList();
      let found = list.findIndex((val) => task === val);
      if (found > -1) {
        list.splice(found, 1);
      }
      setList(list);
    })
    .then(() => getList());
