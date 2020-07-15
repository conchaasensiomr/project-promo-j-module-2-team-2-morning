"use strict";const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){setPhoto(fr.result)}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const paletteStyle=document.querySelector(".preview__card"),palettes=document.querySelectorAll(".js-check");function changePalette(e){paletteStyle.classList.remove("palette1","palette2","palette3"),e.currenTarget===palettes[0]?paletteStyle.classList.add("palette1"):e.currentTarget===palettes[1]?paletteStyle.classList.add("palette2"):e.currentTarget===palettes[2]&&paletteStyle.classList.add("palette3"),addPaletteObject(e)}function addPaletteObject(e){const t=e.currentTarget.name,a=e.currentTarget.value;formData[t]=a,localStorage.setItem("userInfo",JSON.stringify(formData))}palettes[0].checked=!0;for(const e of palettes)e.addEventListener("change",changePalette),e.addEventListener("click",addPaletteObject);let formData={photo:""};const cardFields={palette:document.querySelector(".js-check:checked").value,name:document.querySelector(".js-text-name"),job:document.querySelector(".js-text-job"),email:document.querySelector(".js-mail"),phone:document.querySelector(".js-number"),linkedin:document.querySelector(".js-linkedin"),github:document.querySelector(".js-github")},inputName=document.querySelector(".js-input-name"),inputJob=document.querySelector(".js-input-job"),inputEmail=document.querySelector(".js-input-mail"),inputPhone=document.querySelector(".js-input-phone"),inputLinkedin=document.querySelector(".js-input-linkedin"),inputGithub=document.querySelector(".js-input-github"),formButton=document.querySelector(".js-share"),textShare=document.querySelector(".js-textShare");function setData(e){const t=e.currentTarget.name,a=e.currentTarget.value;formData[t]=a,updateCard()}function updateCardText(e,t){cardFields[e].innerHTML=formData[e]||t}function setLinks(e){const t=e.currentTarget.name,a=e.currentTarget.value;formData[t]=a,updateCard()}function updateCardLinks(e,t){cardFields[e].href=t+formData[e]}function updateCard(){updateCardText("name","Nombre Apellido"),updateCardText("job","Front-end developer"),updateCardLinks("email","mailto:"),updateCardLinks("phone","tel:"),updateCardLinks("linkedin","https://linkedin.com/in/"),updateCardLinks("github","https://github.com/"),""!==formData.photo?updateCardPhoto():profileImage.style.backgroundImage="url(./assets/images/Logo-Gryffincode.png)"}function setPhoto(e){formData.photo=e,localStorage.setItem("userInfo",JSON.stringify(formData)),updateCard()}function updateCardPhoto(){profileImage.style.backgroundImage=`url(${formData.photo})`,profilePreview.style.backgroundImage=`url(${formData.photo})`}function validation(e){e.preventDefault(),inputName.value.length>1&&inputJob.value.length>1&&inputEmail.value.length>1&&inputPhone.value.length>1&&inputLinkedin.value.length>1&&inputGithub.value.length>1?(textShare.classList.remove("hidden"),formButton.classList.add("disabled"),formButton.classList.remove("share__content__button")):alert("No has introducido ningún dato"),sendRequest(formData)}const linkShare=document.querySelector(".js-linkShare"),twitterURL=document.querySelector(".js-twitter");function sendRequest(e){fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){showURL(e)})).catch((function(e){console.log(e)}))}function showURL(e){if(e.success){linkShare.innerHTML='<a target="_blank" href='+e.cardURL+">"+e.cardURL+"</a>";const t="Esta es nuestra Gryffincode Awesome Profile Cards";twitterURL.setAttribute("href",`http://twitter.com/share?text=${t}&hashtags=adalaber,promoJemison,profileCards&user_mentions=Adalab_Digital&url=${e.cardURL}`)}else linkShare.innerHTML="ERROR:"+e.error}document.addEventListener("keyup",(function(){localStorage.setItem("userInfo",JSON.stringify(formData))}));const savedInfo=JSON.parse(localStorage.getItem("userInfo"));function uploadInfo(){null!==savedInfo&&(formData.name=savedInfo.name,inputName.value=savedInfo.name||"",formData.job=savedInfo.job,inputJob.value=savedInfo.job||"",formData.email=savedInfo.email,inputEmail.value=savedInfo.email||"",formData.phone=savedInfo.phone,inputPhone.value=savedInfo.phone||"",formData.linkedin=savedInfo.linkedin,inputLinkedin.value=savedInfo.linkedin||"",formData.github=savedInfo.github,inputGithub.value=savedInfo.github||"",formData.photo=savedInfo.photo,profileImage.style.backgroundImage=`url(${savedInfo.photo})`||"url(./assets/images/Logo-Gryffincode.png)",profilePreview.style.backgroundImage=`url(${savedInfo.photo})`,savedInfo.palette&&(document.querySelector(".js-check#color"+savedInfo.palette).checked=!0,paletteStyle.classList.add("palette"+savedInfo.palette)),updateCard())}uploadInfo(),inputName.addEventListener("keyup",setData),inputJob.addEventListener("keyup",setData),inputEmail.addEventListener("keyup",setLinks),inputPhone.addEventListener("keyup",setLinks),inputLinkedin.addEventListener("keyup",setLinks),inputGithub.addEventListener("keyup",setLinks),formButton.addEventListener("click",validation),console.log(formData);const arrowTransform1=document.querySelector(".js-arrowTransform1"),arrowTransform2=document.querySelector(".js-arrowTransform2"),arrowTransform3=document.querySelector(".js-arrowTransform3"),arrow1=document.querySelector(".js-arrow1"),arrow2=document.querySelector(".js-arrow2"),arrow3=document.querySelector(".js-arrow3"),collapsible=document.querySelector(".js-collapsed"),collapsibleHidden1=document.querySelector(".js-hidden1"),collapsibleHidden2=document.querySelector(".js-hidden2"),collapsibleHidden3=document.querySelector(".js-hidden3");function changeCollapsible1(){collapsibleHidden1.classList.toggle("hidden"),arrowTransform1.classList.toggle("transform")}function changeCollapsible2(){collapsibleHidden2.classList.toggle("hidden"),arrowTransform2.classList.toggle("transform")}function changeCollapsible3(){collapsibleHidden3.classList.toggle("hidden"),arrowTransform3.classList.toggle("transform")}console.log(arrowTransform3),arrow1.addEventListener("click",changeCollapsible1),arrow2.addEventListener("click",changeCollapsible2),arrow3.addEventListener("click",changeCollapsible3);const resetElement=document.querySelector(".js-reset");function reset(e){e.preventDefault(),localStorage.removeItem("userInfo"),formData={photo:""},inputName.value="",cardFields.name.innerHTML="Nombre Apellido",inputJob.value="",cardFields.job.innerHTML="Front-end developer",inputEmail.value="",cardFields.email.href="mailto:",inputPhone.value="",cardFields.phone.href="tel:",inputLinkedin.value="",cardFields.linkedin.href="https://linkedin.com/in/",inputGithub.value="",cardFields.github.href="https://github.com/",profileImage.style.backgroundImage="url(./assets/images/Logo-Gryffincode.png)",profilePreview.style.backgroundImage="",palettes[0].checked=!0,paletteStyle.classList.add("palette1"),paletteStyle.classList.remove("palette2","palette3")}resetElement.addEventListener("click",reset);