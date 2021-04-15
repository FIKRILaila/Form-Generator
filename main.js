var type_champ = document.getElementById("type_champ");
var form = document.querySelector("#form");

document.querySelector("body > section > div.title > button")
  .addEventListener("click", function (){
    var title = document.querySelector("#titre").value;
    var description = document.querySelector("#WIDTH").value;
    var div1 = document.createElement("div");
    div1.className="title_js";
    div1.innerHTML = `
    <h1>${title}</h1>
    <p>${description}</p>
    `;
    form.appendChild(div1);
  });

function addChamp() {
  document.getElementById("champ_info").style.display = "block";
}

function answer() {
  let inputValue = document.querySelector("#input_answer").value;
  var listAnswers = document.querySelector("#list_answer");
  var li = document.createElement("li");
  li.textContent = inputValue;
  listAnswers.appendChild(li);
}

function show_detail() {
  if (
    type_champ.value === "multichoice" ||
    type_champ.value === "oneChoice" ||
    type_champ.value === "Select"
  ) {
    document.getElementById("show_detail").style.display = "block";
  } else {
    document.getElementById("show_detail").style.display = "none";
  }
}
let ul_li_multichoice = [];
let ul_li_oneChoice = [];
let ul_li_Select = [];

function Clear(){
    document.querySelector("#champ_info > div > div.detail > input[type=text]").value="";
    document.querySelector("#list_answer").innerHTML="";
    document.querySelector("#show_detail").style.display="none";
    document.querySelector("#input_answer").value="";
    ul_li_multichoice = [];
    ul_li_oneChoice = [];
    ul_li_Select = [];
    type_champ.value = "1"
    let checkd=document.querySelector("#Req");
    checkd.checked=false;
}
function validation() {
    let champ_label=document.querySelector("#champ_info > div > div.detail > input[type=text]").value;
    let checkd=document.querySelector("#Req");
    switch (type_champ.value) {
        case "multichoice":
                            var multichoice = document.createElement("div");
                            multichoice.className="champ";
                            var ul = document.querySelector("#list_answer");
                            Array.from(ul.children).forEach((e) => {
                                ul_li_multichoice.push(e.innerHTML);
                            });

                                var item=document.createElement("div");
                                item.innerHTML=`<h3>${champ_label}</h3>`;
                            if(checkd.checked=false){
                                for (let i = 0; i <ul_li_multichoice.length; i++) {
                                    item.innerHTML +=`<input type="checkbox" id="${ul_li_multichoice[i]}" name="multichoice" class="no-width">
                                                    <label for="${ul_li_multichoice[i]}">${ul_li_multichoice[i]}</label><br>`;
                                    multichoice.appendChild(item);
                                }
                            }else{
                                for (let i = 0; i <ul_li_multichoice.length; i++) {
                                    item.innerHTML +=`<input type="checkbox" id="${ul_li_multichoice[i]}" name="multichoice" class="no-width" required="required">
                                                    <label for="${ul_li_multichoice[i]}">${ul_li_multichoice[i]}</label><br>`;
                                    multichoice.appendChild(item);
                                }
                            }
                            
                            form.appendChild(multichoice);
                            break;
        
        case "oneChoice":
                            var oneChoice = document.createElement("div");
                            oneChoice.className= "champ";
                            var ul = document.querySelector("#list_answer");
                            Array.from(ul.children).forEach((e) => {
                                ul_li_oneChoice.push(e.innerHTML);
                            });
                            var item=document.createElement("div");
                            item.innerHTML=`<h3>${champ_label}</h3>`;
                            if(checkd.checked=false){
                                for (let i = 0; i <ul_li_oneChoice.length; i++) {
                                    item.innerHTML+=`<input type="radio" id="${ul_li_oneChoice[i]}" name="oneChoice" class="no-width">
                                                    <label for="${ul_li_oneChoice[i]}">${ul_li_oneChoice[i]}</label>`;
                                    oneChoice.appendChild(item);
                                }
                            }else{
                                for (let i = 0; i <ul_li_oneChoice.length; i++) {
                                    item.innerHTML+=`<input type="radio" id="${ul_li_oneChoice[i]}" name="oneChoice" required="required" class="no-width">
                                                    <label for="${ul_li_oneChoice[i]}">${ul_li_oneChoice[i]}</label><br>`;
                                    oneChoice.appendChild(item);
                                }
                            }
                           
                            form.appendChild(oneChoice);
                            break;

        case "Select":
                            var Select= document.createElement("div");
                            Select.className= "champ";
                            Select.innerHTML=`<h3>${champ_label}</h3>`;
                            var ul = document.querySelector("#list_answer");
                            Array.from(ul.children).forEach((e) => {
                                ul_li_Select.push(e.innerHTML);
                            });
                            if(checkd.checked=false){
                                var select = document.createElement('SELECT');
                                select.id = 'id_select_field';
                                for (let i = 0; i <ul_li_Select.length; i++) {
                                    var option = document.createElement('OPTION');
                                    option.value=ul_li_Select[i];
                                    option.innerHTML=ul_li_Select[i];
                                    select.appendChild(option)
                                }
                                Select.appendChild(select)
                            }else{
                                var select = document.createElement('SELECT');
                                select.id = 'id_select_field';
                                select.setAttribute("required","required");
                                for (let i = 0; i <ul_li_Select.length; i++){
                                    var option = document.createElement('OPTION');
                                    option.value=ul_li_Select[i];
                                    option.innerHTML=ul_li_Select[i];
                                    select.appendChild(option)
                            }
                            Select.appendChild(select)
                            }
                            
                            form.appendChild(Select);
                            break;

        case "text":
                            var text= document.createElement("div");
                            text.className="champ";
                            if(checkd.checked=false){
                                text.innerHTML=`<h3>${champ_label}</h3>
                                <input type="text" id="text" name="text">`;
                            }else{
                                text.innerHTML=`<h3>${champ_label}</h3>
                                <input type="text" id="text" name="text" required="required">`;
                            }
                            

                            form.appendChild(text);
                            break;
        case "Password":
                            var Password=document.createElement("div");
                            Password.className= "champ";
                            if(checkd.checked=false){
                                Password.innerHTML=`<h3>${champ_label}</h3>
                                <div>
                                <label for="pass">Password (8 characters minimum):</label>
                                <input type="password" id="pass" name="password" minlength="8">
                                </div>`;
                            }else{
                                Password.innerHTML=`<h3>${champ_label}</h3>
                                <div>
                                <label for="pass">Password (8 characters minimum):</label>
                                <input type="password" id="pass" name="password" minlength="8" required="required">
                                </div>`;
                            }

                            form.appendChild(Password);
                            break;

        case "Phone":
                            var Phone= document.createElement("div");
                            Phone.className= "champ";
                            if(checkd.checked=false){
                                Phone.innerHTML=`<h3>${champ_label}</h3>
                                <input type="tel" id="phone" name="phone">`;
                            }else{
                                Phone.innerHTML=`<h3>${champ_label}</h3>
                                <input type="tel" id="phone" name="phone" required="required">`;
                            }
                            
                            form.appendChild(Phone);
                            break;

        case "File":   
                            var File= document.createElement("div");
                            File.className= "champ";
                            if(checkd.checked=false){
                                File.innerHTML=`<h3>${champ_label}</h3>
                                <div>
                                <label for="file">Choose a file</label>
                                <input type="file" id="file" name="file">
                                </div>`;
                            }else{
                                File.innerHTML=`<h3>${champ_label}</h3>
                                <div>
                                <label for="file">Choose a file</label>
                                <input type="file" id="file" name="file" required="required">
                                </div>`;
                            }
                            
                            form.appendChild(File);
                            break;

        case "Number":  
                            var Number= document.createElement("div");
                            Number.className= "champ";
                            if(checkd.checked=false){
                                Number.innerHTML=`<h3>${champ_label}</h3>
                                <input type="number" id="number" name="number" min="0">`;
                            }else{
                                Number.innerHTML=`<h3>${champ_label}</h3>
                                <input type="number" id="number" name="number" min="0" required="required">`; 
                            }
                            form.appendChild(Number);
                            break;

        case "Email":
                            Email= document.createElement("div");
                            Email.className= "champ";
                            if(checkd.checked=false){
                                Email.innerHTML=`<h3>${champ_label}</h3>
                                <input type="email" id="email" pattern=".+@globex.com">`;
                            }else{
                                Email.innerHTML=`<h3>${champ_label}</h3>
                                <input type="email" id="email" pattern=".+@globex.com" required="required">`;
                            }
                            
                            form.appendChild(Email);
                            break;
    
    
    
            }
}
