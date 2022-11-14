const sender = document.querySelector('.sender');
const message = document.querySelector('.message');
const history = document.querySelector('.history');
const btn = document.querySelector('button');
const main = document.querySelector('.main');


class Message{
    constructor(owner, content, send_time){
        this.owner = owner;
        this.content = content;
        this.send_time = send_time;
    }
    toString(){
        return `${this.send_time} ${this.owner}: ${this.content}`
    }
    toHtml(){
        return `<p>[${this.send_time}] [${this.owner}]: [${this.content}]</p></b>`
    }
}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Messenger extends Message{
    constructor(owner, content){
        super(owner, content);
        this.messages = [];
    }

    show_history(){
        history.innerHTML = '';
        console.log(this.messages)
        this.messages.forEach(element =>  history.innerHTML +=  element.toHtml());
    }
    send(author, text){
        let message = new Message(author,text,gettime());
        this.messages.push(message);
    }
}

let messenger = new Messenger()

btn.addEventListener ('click',()=>{
    // history.innerHTML=gettime();
    // main.innerHTML+= messenger.show_history();
    messenger.send(sender.value,message.value, gettime());
    sender.value ='';
    message.value='';
    messenger.show_history();
})

// messenger.send(sender,message);
// messenger.show_history();
