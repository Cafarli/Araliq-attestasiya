class Message{
    constructor(owner, content, send_time){
        this.owner = owner;
        this.content = content;
        this.send_time = send_time;
    }
    toString(owner,content,send_time){
        return `Owner: ${this.owner}; Message content: ${this.content}; Send time: +${this.send_time}`
    }
}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Messenger extends Message{
    constructor(owner, content){
        super(owner, content);
    }

    show_history(){
        this.messages.forEach(element => {
            var message = new Message();
            console.log(message.toString(element[0],element[1],element[2]));
        });
    }
    send(author, text){
        var messages = [];
        messages.push([this.owner,this.content, gettime()]);
    }
}


let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history();