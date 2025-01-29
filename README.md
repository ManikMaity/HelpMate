# HelpMate

## Database design 
- User
```
{
    id : string,
    name : string,
    email : string,
    username : string,
    imageUrl : string,
    createdAt : Date,
    updatedAt : Date,
    clerkId : string,
    booking : ref,
    events : ref,
    avalaibility : ref,
    role : string,
    about : string,
}
```
- Event
```
{
    id : string,
    title : string,
    description : string,
    duration : int,
    userId : string,
    isPrivate : boolean,
    createdAt : Date,
    updatedAt : Date,
    booking : ref,
}
```
- Booking
```
{
    id : string,
    eventId : string,
    userId : string,
    name : string,
    email : string,
    additionalInfo : string,
    startTime : Date,
    endTime : Date,
    meetingLink : string,
    googleEventId : string,
    createdAt : Date,
    updatedAt : Date,
}
```
- Availability
```
{
    id : string,
    userId : string,
    timeGap : int,
    createdAt : Date,
    updatedAt : Date,
    days : ref
}
```
- Day
```
```