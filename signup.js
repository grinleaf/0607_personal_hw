function checkReg(){      
    var able_sign_up = true //회원가입 가능 여부를 판단하는 변수

    //* user_pw : 4~12자리 영문,숫자 특수문자(!,@,$,%,&,*)만 가능
    var pw= document.getElementById('user_pw').value
    var pw_check= document.getElementById('pw_check')
    var pw_regExp= /^[A-Za-z\d$!@$%&*]{4,12}$/

    if(pw_regExp.test(pw)) {
        pw_check.innerHTML= "사용가능한 비밀번호 입니다."
        pw_check.style.color= 'blue'
    }else {
        pw_check.innerHTML= "사용할 수 없는 비밀번호 형식입니다."
        pw_check.style.color= 'red'
        able_sign_up = false
    }

    //* user_pw_confirm : (==user_pw)
    var pw_confirm= document.getElementById('user_pw_confirm').value
    var pw_confirm_check= document.getElementById('pw_confirm_check')

    if(pw==pw_confirm && pw) {
        pw_confirm_check.innerHTML= "비밀번호 일치"
        pw_confirm_check.style.color= 'blue'
    }else if(!pw){
        pw_confirm_check.innerHTML= ""
    }else {
        pw_confirm_check.innerHTML= "비밀번호 불일치"
        pw_confirm_check.style.color= 'red'
        able_sign_up = false
    }

    //* user_name : 한글만, 띄어쓰기 없이 입력
    var name= document.getElementById('user_name').value
    name.replace(" ","")  //공백이 있을 경우 잘라내기
    var name_regExp = /^[가-힣A-Za-z]+$/    

    if(name_regExp.test(name)) {
        // name
    }else {
        
    }
    
    //* user_email : 형식 aa@aa.aaa
    var email= document.getElementById('user_email').value
    var email_check= document.getElementById('email_check')
    var email_regExp = /\w+@\w+\.\w+$/

    if(email_regExp.test(email)) {
        email_check.innerHTML= " O"
        email_check.style.color= 'blue'
    }else {
        email_check.innerHTML= " X"
        email_check.style.color= 'red'
        able_sign_up = false
    }

    //* user_postcode_01,02,03 : 01+02
    var post_code_01= document.getElementById('user_postcode_01').value
    var post_code_02= document.getElementById('user_postcode_02').value
    var post_check= document.getElementById('post_check')
    var post_regExp = /^\d{3}$/

    if(post_regExp.test(post_code_01)&&post_regExp.test(post_code_02)) {
        post_check.innerHTML= "올바른 우편번호입니다."
        post_check.style.color= 'blue'
    }else {
        post_check.innerHTML= "우편번호 형식을 다시 확인해주십시오. (지번 : 3자리 - 3자리)"
        post_check.style.color= 'red'
        able_sign_up = false
    }

    //* user_phone_01,02,03 : 01+02+03
    var phone_01= document.getElementById('user_phone_01').value
    var phone_02= document.getElementById('user_phone_02').value
    var phone_03= document.getElementById('user_phone_03').value
    var phone_check= document.getElementById('phone_check')
    var phone_regExp_3 = /^\d{3}$/
    var phone_regExp_4 = /^\d{4}$/
    var phone_regExp_3_4 = /^\d{3,4}$/

    if(phone_regExp_3.test(phone_01)&&phone_regExp_3_4.test(phone_02)&&phone_regExp_4.test(phone_03)) {
        phone_check.innerHTML= "올바른 휴대폰번호입니다."
        phone_check.style.color= 'blue'
    }else {
        phone_check.innerHTML= "휴대폰 번호를 다시 확인해주십시오. (3자리 - 3~4자리 - 4자리)"
        phone_check.style.color= 'red'
        able_sign_up = false
    }

    if(able_sign_up) uploadDB()
    else alert("회원가입 형식에 맞추어 다시 작성해주십시오.")
}

function uploadDB(){
    let user_id= document.getElementById('user_id').value
    let user_pw= document.getElementById('user_pw').value
    let user_name= document.getElementById('user_name').value
    let user_email= document.getElementById('user_email').value
    let user_postcode= document.getElementById('user_postcode_01').value+'-'+document.getElementById('user_postcode_02').value
    let user_address= document.getElementById('user_address_01').value+' '+document.getElementById('user_address_02').value
    let user_phone= document.getElementById('user_phone_01').value+'-'+document.getElementById('user_phone_02').value+'-'+document.getElementById('user_phone_03').value
    
    let formData= new FormData()
    formData.append('user_id', user_id)
    formData.append('user_pw', user_pw)
    formData.append('user_name', user_name)
    formData.append('user_email', user_email)
    formData.append('user_postcode', user_postcode)
    formData.append('user_address', user_address)
    formData.append('user_phone', user_phone)  

    let xhr= new XMLHttpRequest()
    //결과값 출력
    xhr.onreadystatechange= function(){
        if(xhr.readyState==4 && xhr.status==200) alert('회원가입이 완료되었습니다.')
        else if(xhr.status==400) alert('전송 실패')
    }
    //php 파일 실행 --> 여기서 DB 연동
    xhr.open('POST','./signup.php',true)
    xhr.send(formData)
}