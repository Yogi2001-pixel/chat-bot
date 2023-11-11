export const analyze = (text) => {
    if(text.includes('Hi') || text.includes('Hai') || text.includes('Hello')){
        return 'Hi, How Can I Help You ?'
    } 
    else if(text.includes('google link')) {
        return 'https://www.google.com'
    }
    else if(text.includes('Who You are')) {
        return 'People Call Me Chat Tym'
    }
    else if(text.includes('What are the front end programming languages ?')) {
        return 'HTML, CSS, Bootstrap, JavaScript and JQuery'
    }
    else if(text.includes('What is HTML')) {
        return 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
    }
    else if(text.includes('What is CSS')) {
        return 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
    }
    else if(text.includes('What is JavaScript')) {
        return 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.'
    }
    else if(text.includes('Who Creates HTML ?')) {
        return 'Created by Tim Berners Lee'
    }
    else if(text.includes('What is difference between HTML, CSS and JavaScript')) {
        return ' While HTML creates the basic structure for a website, CSS adds style to that structure, and JavaScript takes all of that work and makes it interactive and more functionally complex.'
    }
    else if(text.includes('Thank You')) {
        return 'Thank You! Have a Nice Day'
    }
    return "I can't get you. Can you repharse the message" 
}