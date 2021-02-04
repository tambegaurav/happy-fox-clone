
var ary_header=["kota","sai","reddy","krishna"];
var z=[
    'Unlimited Mailboxe',
    'Unlimited Categories',
    'Unlimited Tickets',
    'Customizable Statuses',
    'Customizable Priorities',
    'Ticket Custom Fields',
    'Custom Domain Mapping',
    'Multilingual Agent Portal',
    'Agent Collision',
    'Work Schedules',
    'Custom Roles and Permissions',
    'Satisfaction Surveys',
    'Custom Ticket Queues',
    'Kanban view of tickets',
    'Proactive Agent Collision',
    'Task Management',
    'Asset Management',
    'Unlimited Assets',
    'Sentiment Analysis',
    'Attachment Store',
    'Lite Agents *'];
var obj={
    heading:["","Mighty","Fantastic","Enterprise","Enterprise Plus"],
    title:"TICKET MANAGEMENT",
    }
var cont={
    z:[
        'Unlimited Mailboxe',
        'Unlimited Categories',
        'Unlimited Tickets',
        'Customizable Statuses',
        'Customizable Priorities',
        'Ticket Custom Fields',
        'Custom Domain Mapping',
        'Multilingual Agent Portal',
        'Agent Collision',
        'Work Schedules',
        'Custom Roles and Permissions',
        'Satisfaction Surveys',
        'Custom Ticket Queues',
        'Kanban view of tickets',
        'Proactive Agent Collision',
        'Task Management',
        'Asset Management',
        'Unlimited Assets',
        'Sentiment Analysis',
        'Attachment Store',
        'Lite Agents *'],
    values:[1,1,1,1]
}
var toAdd=document.getElementById("header")
var tocont=document.getElementById("content")
var count=0;
function main(){
    for(key in obj.heading){
        var d=document.createElement("div")
        d.textContent=obj.heading[key]
        toAdd.appendChild(d)
    }
    for(var i=0;i<cont.z.length;i++){
        var d=document.createElement("div")
        var p=document.createElement("p")
        p.textContent=cont.z[i]
        d.appendChild(p)
        p.setAttribute("class","title")
        for(var j=0;j<cont.values.length;j++){
            count++
            var div=document.createElement("p")
            // div.textContent=cont.values[j]
            div.setAttribute("class","naming")
            div.setAttribute("class","xyz")
            if(count==69 || count==70 || count==73 || count==74 || count==75 || count==81 || count==82 ||count==83 ||count==66 ||count==65 ||count==61 ||count==62 ||count==58 ||count==57 ||count==53 ||count==49  || count==45 ){
                div.textContent="--"
                div.setAttribute("class","xyz_exception")
            }
            if(count==77){
                div.setAttribute("class","xyz_exception")
                div.textContent="50GB"
            }
            if(count==78){
                div.setAttribute("class","xyz_exception")
                div.textContent="500GB"
            }
            if(count==79){
                div.setAttribute("class","xyz_exception")
                div.textContent="1TB"
            }
            if(count==80){
                div.setAttribute("class","xyz_exception")
                div.textContent="2TB"
            }
            d.appendChild(div)
        }
        
        d.setAttribute("class","odd_Even")
        d.setAttribute("class","hover odd_Even")
        tocont.appendChild(d)
    }
}

main()


 

 console.log(typeof(z));
