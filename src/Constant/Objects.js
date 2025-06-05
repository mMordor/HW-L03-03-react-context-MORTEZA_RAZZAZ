export function Income ({name,salary,date,id}){
    this.id = id
    this.name = name;
    this.salary = salary;
    this.date = date
}

export function Cost ({name,cost,date,desc,id}){
    this.id = id
    this.name = name;
    this.cost = cost;
    this.desc = desc
    this.date = date
}
