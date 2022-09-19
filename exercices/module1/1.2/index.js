alert(addDateTime(" This is the best moment to have a look at this website !"));

function addDateTime(message){
    const dateTimeNow = new Date();
    const messageAffiche = dateTimeNow.toLocaleDateString() + dateTimeNow.toLocaleTimeString() + message;
    console.log(messageAffiche);
    return messageAffiche;

}

