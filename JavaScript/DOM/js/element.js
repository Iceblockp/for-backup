



const createH1 = document.createElement("h1");
createH1.innerText = "Min Ga Lar Par";
createH1.classList.add("text-blue-600", "text-3xl");

const createPara = document.createElement("p");
createPara.innerText = "San Kyi tat par byar.";
createPara.classList.add("text-blue-300");

const link = document.createElement("a");
link.innerText = "Google";
link.href = "https://google.com";
link.target = "_blank";

const img = new Image(200,200);
// const img = document.createElement("img");
img.src = "lady.jpg";
// img.height = "200px";


const ul = document.createElement("ul");

const createLi = (text) => {
    const li = document.createElement("li");
li.innerText = text;
    return li;
}

ul.prepend(createLi("orange"));
ul.prepend(createLi("Apple"));
ul.prepend(createLi("Mango"));

// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// ul.append(li1);
// ul.append(li2);
// li1.innerText = "Hello";
// li2.innerText = "Apple"



// console.log(ul);
// // console.log(createH1);
// document.body.append(createH1);
// document.body.append(createPara);
// // document.body.append(link);
// // document.body.append(img);
// document.body.append(ul);

// const textNode = document.createTextNode("haha ");

// document.body.append(textNode)

// const frg = document.createDocumentFragment();
// frg.append(createH1);
// frg.append(createPara);
// frg.append(ul)

// console.log(frg);
// document.body.append(frg)

document.body.append(ul);
ul.before(createH1);
ul.after(createPara)