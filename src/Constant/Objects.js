export function Income ({name,value,date,id}){
    this.id = id
    this.name = name;
    this.value = value;
    this.date = date;
}

export function Cost ({name,value,date,desc,id,category}){
    this.id = id
    this.name = name;
    this.value = value;
    this.category = category;
    this.desc = desc;
    this.date = date;
}

