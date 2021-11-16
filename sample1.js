function solution() {
    // write your code in JavaScript (Node.js 8.9.4)
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementById
    // or using jQuery:
    //    $('some_tag')
    //
    // you can write to stdout for debugging purposes, e.g.
    // console.log('this is a debug message');

    const radio = document.getElementsByName('type')
    let checkedVal;
    for(var i = 0; i < radio.length; i++)  
    {  
        if(radio[i].checked) {
            checkedVal = radio[i].value;
        }
    }

    if(checkedVal === 'person') {
        const firstName = document.getElementById('first_name')
        const lastName = document.getElementById('last_name')
        const email = document.getElementById('email')

        if(!firstName.value || !lastName.value || !email.value) {
            return false;
        }
        const emailVal = email.value;
        const atposition= emailVal.indexOf("@");
        if(atposition === 0 || atposition === emailVal.length -1) {
            return false
        }
        const regex = /^[0-9a-zA-Z\.]{1,64}$/;
        if(!regex.test(emailVal.substr(0, atposition)) || !regex.test(emailVal.substr(atposition+1, emailVal.length))) {
            return false
        }
    } else {
        const companyName = document.getElementById('company_name')
        const phone = document.getElementById('phone')

        if(!companyName.value || !phone.value) {
            return false;
        }
        const phoneVal = phone.value;
        const regex = /^(?=.*[0-9])[- 0-9]+$/;
        
        if(!regex.test(phoneVal)) {
            return false;
        } else {
            let sum = 0;
            for(let s of phoneVal) {
                if(s !== '-' || s !== ' ') {
                    sum+=1;
                }
            }
            if(sum < 6) return false;
        }
    }

    return true;

}
