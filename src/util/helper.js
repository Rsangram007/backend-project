function printDate(){
    const now = new Date()
    console.log("the current date is :",now.getDate())
    printMonth()
}
//current month
function printMonth(){
    const now =new Date()
    console.log("the current month is :",now.getMonth()+1)
    getbatchinfo()
}
//batch info
function getbatchinfo(){
    console.log( "Batch plutonium, 3rd week, the topic for today is Nodejs module system")
}
module.exports.printDate=printDate