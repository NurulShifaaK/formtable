     
     
     
    //  let form = document.querySelector("form")
    //     const table = document.getElementById("userTable").getElementsByTagName("tbody")[0]

    //     form.addEventListener("submit", function (event) {
    //         event.preventDefault()


    //         // const name = document.getElementById("name").value
    //         // const email = document.getElementById("email").value
    //         // const number = document.getElementById("number").value
    //         // const address = document.getElementById("address").value
    //         // const gender = document.getElementById("gender").value
    //         // const dob = document.getElementById("dob").value
    //         // const education = document.querySelector('input[name="education"]:checked')?.value
    //         // const hobbies = document.querySelectorAll('input[name="hobbies"]:checked')

    //         // let hobbiesData = []

    //         // // hobbies[0].value

    //         // for (let i = 0; i < hobbies.length; i++) {
    //         //     // console.log("hobbies[i].value", hobbies[i].value)
    //         //     hobbiesData.push(hobbies[i].value)
    //         // }

    //         const formData = new FormData(form)

    //         let user = {
    //             name: formData.get("name"),
    //             email: formData.get("email"),
    //             number: formData.get("number"),
    //             // address: formData.get("address"),
    //             dob: formData.get("dob"),
    //             gender: formData.get("gender"),
    //             // hobbiesData: formData.getAll("hobbies").join(", "),
    //             education: formData.get("education"),
    //         }

    //         // const row = table.insertRow()

    //         // row.innerHTML = `
    //         //     <td>${user.name}</td>
    //         //     <td>${user.email}</td>
    //         //     <td>${user.number}</td>
    //         //     // <td>${user.address}</td>
    //         //     <td>${user.gender}</td>
    //         //     <td>${user.dob}</td>
    //         //     // <td>${user.hobbiesData}</td>
    //         //     <td>${user.education}</td>
    //         //     <td>
    //         //         <button  onclick="deleteBtn(this)">Delete</button>    
    //         //     </td>
    //         `

    //         form.reset()
    //     })

    //     function deleteBtn(btn) {
    //         btn.parentNode.parentNode.remove()
    //     }



    const form = document.getElementById("userForm");
const tableBody = document.getElementById("userTable").querySelector("tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const user = {
    name: formData.get("name"),
    email: formData.get("email"),
    number: formData.get("number"),
    gender: formData.get("gender"),
    dob: formData.get("dob"),
    education: formData.get("education"),
  };

  const row = tableBody.insertRow();

  row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.number}</td>
    <td>${user.gender}</td>
    <td>${user.dob}</td>
    <td>${user.education}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
  `;

  form.reset();
});

function deleteRow(button) {
  button.closest("tr").remove();
}
