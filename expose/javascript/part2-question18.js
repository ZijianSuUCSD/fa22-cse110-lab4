function t(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval( t,1000)

