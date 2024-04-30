let input = prompt('What would you like to do?');
const task = [];

while (input !== 'quit' && input !== 'q'){
    if (input == 'list'){
        console.log('********');
        for (let i = 0; i < task.length; i++){
            console.log(`${i}: ${task[i]}`.toUpperCase());
        }
        console.log('********');
    } else if (input == 'new') {
        const addTask = prompt("Enter new task:");
        task.push(addTask);
        console.log(`${addTask.toUpperCase()} added to your list.`)
    } else if (input == 'delete'){
        const index = parseInt(prompt("Select index to delete:"));
        if (!Number.isNaN(index) && index >= 0 && index < task.length){
            const deleted = task.splice(index, 1);
            console.log(`${deleted} was deleted.`);
        } else {
            console.log(`Index does not exist. Please try again.`);
        }
    }
    input = prompt('What would you like to do?');
}
console.log('YOU QUIT');