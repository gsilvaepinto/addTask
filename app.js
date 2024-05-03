let input = prompt('What would you like to do?');
const tasks = [];

while (input !== 'q' && input !== 'quit'){
    if (input === 'list'){
        console.log('******');
        for(let i = 0; i < tasks.length; i++){
            console.log(`${i}: ${tasks[i].toUpperCase()}`);
        }
        console.log('******');
    } else if (input === 'new'){
        const addTask = prompt('Enter new task:');
        tasks.push(addTask);
        console.log(`${addTask.toUpperCase()} added to your list.`) 
    } else if (input === 'delete'){
        const index = parseInt(prompt('Select index to delete:'));
        if (!Number.isNaN(index) && index >= 0 && index < tasks.length){
            const deleted = tasks.splice(index, 1);
            console.log(`${deleted[0].toUpperCase()} deleted from your list.`);
        } else {
            console.log('Invalid index. Please try again.');
        }
    } else {
        console.log('Invalid command. Please try again.');
    }
    input = prompt('What would you like to do?');
}
console.log('YOU QUIT');
