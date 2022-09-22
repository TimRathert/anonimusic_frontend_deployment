const CommentTime = (past) => {
    //let past = comment.timestamp
    // return(typeof(past))
    //return((typeof past == String) ? '' : past)
    if (typeof past == "undefined"){
        past = new Date(2022,8,3) 
    }
    //return(typeof past)
    let date = new Date();
    let day = 86400000 //1000*60*60*24
    let second = 1000
    let minute = 60000
    let hour = 3600000
    let diff = Math.floor(date.getTime()-past.getTime())
    let days = Math.floor(diff/day);
    let years = Math.floor(days/365.25);
    let months = Math.floor((days/30.4375) - (years*12));
    days = Math.floor(days-((years*365.25)+(months*30.4375)))
    let hours = Math.floor((diff/hour) - ((years*8760) + (months*730.5) + (days*24)))
    let minutes = Math.floor(diff/minute) - ((hours*60)+(days*1440))
    let seconds = Math.floor(diff/second) -((minutes*60)+(hours*3600)+(days*86400))
    if (years > 0){
        return(`${years} year${(years>1) ? 's' : ''} ago`)
    } else if (months > 0) {
        return(`${months} month${(months>1) ? 's' : ''} ago`)
    } else if (days > 0) {
        return(`${days} day${(days>1) ? 's' : ''} ago`)
    } else if  (hours > 0) {
        return(`${hours} hour${(hours>1) ? 's' : ''} ago`)
    } else if (minutes > 0) {
        return(`${minutes} minute${(minutes>1) ? 's' : ''} ago`)
    } else if (seconds > 0) {
        return(`${seconds} second${(seconds>1) ? 's' : ''} ago`)
    } else {
        return(`Just now`)
    }

}



// let date = new Date(2022,8,3) 
// CommentTime(date)

export default CommentTime;