const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name2 lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name2>
    <age2>58</age2>
    <prof2>driver</prof2>
  </student>
</list>`

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const nameNode = listNode.querySelector("name");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");

const nameNode2 = listNode.querySelector("name2");
const ageNode2 = listNode.querySelector("age2");
const profNode2 = listNode.querySelector("prof2");

const nameAttr = nameNode.getAttribute('lang');
const nameAttr2 = nameNode2.getAttribute('lang');
  
const result = {
  name: nameNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
  lang: nameAttr,
};
const result2 = {
  name: nameNode2.textContent,
  age: Number(ageNode2.textContent),
  prof: profNode2.textContent,
  lang: nameAttr2,
}  
  
console.log('result', result, result2);
