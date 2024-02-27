// console.log("Todo app");

//selector

const app = document.querySelector("#app");
const btnAdd = document.querySelector("#btnAdd");
const textInput = document.querySelector("#textInput");
const doneCount = document.querySelector("#doneCount");
const listCount = document.querySelector("#listCount");
const listGroup = document.querySelector("#listGroup");
const delAll = document.querySelector("#delAll")


//function

const listCounter = () => {
    const total = document.querySelectorAll(".list").length;
    const totalChecked = document.querySelectorAll(".list-check:checked").length;
    // console.log(total);
    listCount.innerHTML = total;
    doneCount.innerText = totalChecked;
    return total;

}


const createList = (text) => {
    // const id = "hello"+(Math.random()  * 10000).toFixed(0);
    const id = "hello" + Date.now();

    const list = document.createElement("div");
    list.classList.add("list");
    list.innerHTML = `
    <div class="border animate__animated animate__fadeInUp p-3 mb-3 border-neutral-600 flex justify-between items-center group overflow-hidden">
                        <div class="content">
                            <input id="${id}"  class=" list-check accent-gray-600"  type="checkbox">
                        <label for="${id}" class="text-sm list-text" > ${text} </label>
                        </div>
                        <div class="control flex items-center gap-3 translate-x-[160%] duration-300 pointer-events-none group-hover:pointer-events-auto group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
                            <button class="edit-btn active:scale-75 duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                  </svg>
                                  
                            </button>
                            <button class="del-btn active:scale-75 duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                  </svg>
                                  
                            </button>
                        </div>

                    </div>
    
    `
    const delBtn = list.querySelector(".del-btn");



    delBtn.addEventListener("click", () => {
        if (confirm("Are U sure to delete ?")) {
            list.remove();
            listCounter();

        }

    });
   

    const content = list.querySelector(".content");
    const editBtn = list.querySelector(".edit-btn");

    // console.log(listText);

    editBtn.addEventListener('click', () => {
        const listText = list.querySelector(".list-text");
        const input = document.createElement("input");
        input.value = listText.innerText;
        input.className = "border bg-blue-900 border-neutral-600 text-sm px-3 py-1 focus-visible:outline-none";
        content.innerHTML = "";
        content.append(input);


        input.addEventListener("blur", () => {
            console.log("hel");
            content.innerHTML = `

            <input id="${id}" type="checkbox">
                        <label for="${id}" class="text-sm list-text" > ${input.value} </label>
            
            `;
            
        });
        

    });

    const listCheck = list.querySelector(".list-check");
    listCheck.addEventListener("change", () => {
        console.log("check");
        const listText = list.querySelector(".list-text");
        listText.classList.toggle("line-through");
        listCounter();


    })


    return list;
};


// handlers
const btnAddHandler = () => {
    if (textInput.value) {
        listGroup.append(createList(textInput.value));
        textInput.value = null;
        // listCounter();
        listCounter();

    }

}

const textInputHandler = (event) => {
    // console.log(event.target);
    if(event.key === "Enter"){
        listGroup.append(createList(event.target.value));
        textInput.value = null;
        // listCounter();
        listCounter();
    }
    
}

const delAllHandler = () => {
    if(confirm("Are U sure to delete all?")){
        const lists = app.querySelectorAll(".list");
        lists.forEach(list => list.remove());
    }

}

// add event listener
btnAdd.addEventListener("click", btnAddHandler);
delAll.addEventListener("click",delAllHandler);

document.addEventListener("keyup", textInputHandler);


