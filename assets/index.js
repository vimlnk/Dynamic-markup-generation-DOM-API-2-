'use strict';

const neww = {
  title: `Minecraft's new frogs were briefly swallowing goats whole`,
  headerBgSrc: `https://cdn.mos.cms.futurecdn.net/yS8AdDkWFHzDhEjycLwkc9-970-80.jpg.webp`,
  category: "Minecraft",
  body: "As part of the experimental features in Minecraft Bedrock version 1.18.10, Mojang has revealed some of the abilities of the frog mobs coming in this year's Wild Update. They can eat small Slimes and small Magma Cubes, which is a goofy enough habit. As Mojang shared during today's Minecraft Live presentation, frogs had a brief period as apex predators capable of swallowing entire goats. Players started noticing this savage frog behavior in the beta version of Minecraft for Windows back in January. Their hunger was, as some players realized, insatiable.",
  date: "2025-02-01",
};

const newsElement = document.createElement("section");
newsElement.classList.add("newsContainer");
document.body.append(newsElement);

const newsElementHeader = document.createElement("section");
newsElementHeader.classList.add("newsHeader");
newsElementHeader.style.backgroundImage = `url("${neww.headerBgSrc}")`;
newsElement.append(newsElementHeader);

const newsTitle = document.createElement("h2");
newsTitle.classList.add("title");
newsTitle.textContent = `${neww.title}`;
newsElementHeader.append(newsTitle);

const deleteBtn = document.createElement("button");
deleteBtn.classList.add("trashBtn");
function deleteNew(e) {
  newsElement.remove();
}
deleteBtn.onclick = deleteNew;

newsElementHeader.append(deleteBtn);

const trashIcon = document.createElement("i");
trashIcon.classList.add("fa-solid");
trashIcon.classList.add("fa-trash");
trashIcon.classList.add("trashIcon");
deleteBtn.append(trashIcon);


const newsCategory = document.createElement("p");
newsCategory.classList.add("category");
newsCategory.textContent = `${neww.category}`;
newsElement.append(newsCategory);

const newsCategoryBody = document.createElement("p");
newsCategoryBody.classList.add("body");
newsCategoryBody.textContent = `${neww.body}`;
newsElement.append(newsCategoryBody);

const newsDate = document.createElement("p");
newsDate.classList.add("date");
newsDate.textContent = `${neww.date}`;
newsElement.append(newsDate);
