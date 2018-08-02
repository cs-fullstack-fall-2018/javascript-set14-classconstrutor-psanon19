class ToDo
{
    constructor (name, dueDate, list)
    {
        this.name=name;
        this.dueDate=dueDate;
        this.list=list;
    }

    arryList (array)
    {
       return array = [this.list]

    }
}

function main()
{

    newToDoList = new ToDo("Kenn", "Next Week", ["Do the dishes", "Wash your clothes"]);
    //Fixed the line where kenn left 'print' instead of alert
    alert(newToDoList.list)
}

main();