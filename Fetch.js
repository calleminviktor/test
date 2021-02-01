//"http://localhost:1337/deelnemers"
async function fetchstudents(){
  // MAIN FETCH
    const resp = await fetch("http://localhost:1337/deelnemers")
    const studentData = await resp.json()
    studentData.sort((a, b) => a.Naam < b.Naam ? -1 : a.Naam === b.Naam ? 0 : 1)
    console.log(studentData)
    const StudentList = document.createElement("ul");
    studentData.forEach(student => {
        // Creating the variables
        const studentli = document.createElement("li")
        const studentDiv = document.createElement("div")
        const studentFoto = document.createElement("img")
        const studentNaam = document.createElement("p")
        const studentVoorNaam = document.createElement("p")
        const naamDiv = document.createElement("div")
        const studentcontainer = document.querySelector(".deelnemerContainer")
        const footer = document.querySelector(".footer")
        // Adding content to the variables
        studentNaam.innerText = student.Naam
        studentVoorNaam.innerText = student.voornaam
        studentFoto.src ="kulakparticipants/public"+student.Profielfoto.url
        // Adding classes to the content
        studentNaam.classList.add("deelnemerNaam")
        studentFoto.classList.add("Profielfoto")
        studentDiv.classList.add("Deelnemer")
        naamDiv.classList.add("naamDiv")
        studentNaam.classList.add("oranje")
        studentVoorNaam.classList.add("voornaam")
        //setting the datasets
             studentDiv.dataset.name = student.Naam
             studentDiv.dataset.id = student.id
             studentFoto.dataset.id = student.id


            
        //The modal
             const Modalonclick = async (event) =>{
              //  Getting Data for Modal Content
              if(document.querySelector("#Studentopen")){
                document.querySelector("#Studentopen").remove() &&
                studentDiv.classList.remove("OpenModal")
              }{
                let StudentId = event.target.dataset.id
                console.log(StudentId)
                const ModalDataPromise = await fetch("http://localhost:1337/deelnemers/"+StudentId)
               const ModalData = await ModalDataPromise.json()
               console.log(ModalData)
               // Creating ModalContent
               const ModalOverlay = document.createElement("div")
               let   ModalContent = document.createElement("div")
               const CloseButtonTop = document.createElement("i")
               const ModalVoornaam = document.createElement("p")
               const ModalAchternaam = document.createElement("p")
               const ModalNaam = document.createElement("p")
               const ModalProfielFoto = document.createElement("img")
               const ModalTekstInhoud = document.createElement("p")
               const ModalTussentitel = document.createElement("h4")
               const ModalSterkeWoorden = document.createElement("p")
               const CloseButtonBottom = document.createElement("i")
               ModalContent.appendChild(CloseButtonTop)
               ModalNaam.appendChild(ModalVoornaam)
               ModalNaam.appendChild(ModalAchternaam)
               ModalContent.appendChild(ModalNaam)
               ModalContent.appendChild(ModalProfielFoto)
               ModalContent.appendChild(ModalTekstInhoud)
               ModalContent.appendChild(ModalTussentitel)
               ModalContent.appendChild(ModalSterkeWoorden)
               ModalContent.appendChild(CloseButtonBottom)
               ModalOverlay.appendChild(ModalContent)
               document.body.appendChild(ModalOverlay)
               //Adding ModalContent Data

               ModalProfielFoto.src = "kulakparticipants/public"+ModalData.Profielfoto.url
               ModalTekstInhoud.innerText = ModalData.beschrijvingdeelnemer
               ModalVoornaam.innerText = ModalData.voornaam
               ModalAchternaam.innerText = ModalData.Naam
               ModalTussentitel.innerText = "SAMENVATTING IN EEN PAAR WOORDEN"
               ModalSterkeWoorden.innerText = ModalData.karaktereigenschappen

               //ADDING ID
                  // Overlay
               ModalOverlay.classList.add("modal")
               ModalContent.classList.add("modalcontent")
               ModalOverlay.id = "Studentopen"
               ModalOverlay.style.display = "block"
                // Close Buttons
               CloseButtonTop.classList.add("fas")
               CloseButtonTop.classList.add("fa-times")
               CloseButtonBottom.classList.add("fas")
               CloseButtonBottom.classList.add("fa-times")
               ModalNaam.classList.add("ModalNaam")
               ModalAchternaam.classList.add("achternaam")
               ModalTussentitel.classList.add("ModalTussenTitel")


               //close Buttons

              
               CloseButtonTop.addEventListener("click",()=>{
                ModalOverlay.style.display = "none"
              })
               CloseButtonBottom.addEventListener("click",()=>{
                ModalOverlay.style.display = "none"
              })
              
              }

              }
        // Appending childeren
        naamDiv.appendChild(studentVoorNaam)
        naamDiv.appendChild(studentNaam)
        studentli.appendChild(studentDiv)
        studentDiv.appendChild(studentFoto)
        studentDiv.appendChild(naamDiv)
        studentcontainer.appendChild(studentDiv)
        studentDiv.addEventListener("click",Modalonclick)




    });
      

         }
         
  
  
fetchstudents()

