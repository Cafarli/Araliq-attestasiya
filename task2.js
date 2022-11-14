class Message{
    constructor(owner, content, send_time){
        this.owner = owner;
        this.content = content;
        this.send_time = send_time;
    }
    toString(){
        return `${this.send_time} ${this.owner}: ${this.content}`
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
        this.messages.forEach(element => {
            console.log(element.toString());
        });
    }
    send(author, text){
        var message = new Message(author,text,gettime());
        this.messages.push(message);
    }
}


let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history();
