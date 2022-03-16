function Queue()
{
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    // this.front = front;
    // this.back = back;
    this.toString = toString;
    // this.empty = empty;
}
function patient(name,code)
{
    this.name = name;
    this.code = code;
}
function dequeue()
{
    var priority = this.dataStore[0].code;
    for(var i=1;i<=this.dataStore.length;++i)
    {
        if(this.dataStore[i].code < priority)
        {
             priority = i;
        }
    }
    return this.dataStore.splice(priority,1); 
}
function toString()
{
     var retString = "";
     for(var i=0;i<this.dataStore.length;++i)
     {
         retString += this.dataStore[i] + "\n"
     }
     return retString;
}
function enqueue(element
{
     this.dataStore.push(element);
}
var p = new patient("kumaresan",5);
var ed = new Queue();
ed.enqueue(p);
p = new patient("Kumar",4);
ed.enqueue(p);
p = new patient("Kum", 1 );
ed.enqueue(p);
p = new patient("Kuma", 1);
ed.enqueue(p);
console.log(ed);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated : "+seen[0].name);
