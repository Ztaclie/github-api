const GetUserInfo = async () => {
  const response = await fetch("https://api.github.com/users/Ztaclie");
  const data = await response.json();
  const el = document.querySelector("#userInfoMemo");
  el.innerHTML = `${data.name}\n
    ${data.bio}
    `;
  console.log(data);
};

function Api() {
  GetUserInfo();
  GetUserRepos();
}

const GetUserRepos = async () => {
  const response = await fetch("https://api.github.com/users/Ztaclie/repos");
  const data = await response.json();
  const el = document.querySelector(".list-group");
  el.insertAdjacentHTML(
    "beforeend",
    data
      .map(
        (repo) =>
          `<a href="#" class="list-group-item list-group-item-action">${repo.name}</a>`
      )
      .join("")
  );
  console.log(data);
};
