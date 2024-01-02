const db  = require("./models/index.js");

const listTodos = async()=>{
    try{
        console.log("Called showlsist");
        await db.Todo.showList();
    }
    catch(err){
        console.log(err);
    }
}

(async()=>{
    await listTodos();
})();