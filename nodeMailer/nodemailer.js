const nodemailer = require('nodemailer'); // package
// create authentication from who sends email -->
const transporter = nodemailer.createTransport({
    service : "gmail", // service optional (hotmail,yahoo, etc..)
    auth:{
        // from -
        user : " ",  // user : "gmail-id",
        pass : " " // pass : "password"
    }
});

const mailDetails = {
    from : " ", //from gmail account
    to : " ", // to gmail account
    subject : " ", // subject of mail
    text : " " // body
}

// validation
transporter.sendMail(mailDetails,function(err,info){
    if(err) // Error, if any credentials occurs regarding mail
    {
        console.log(err);
        return;
    }
    console.log("Mail Sent : " +info.response); // Success message if mail sent.
})
