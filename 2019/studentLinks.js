$(document).ready(addLinksToList);

function addLinksToList() {
  const students = ["Amiyah", "Beyanca", "Ella_Uma", "Isabella_Satanvi", "Jovina_Trinity", "Katrina", "Marlaina", "Meghan", "Olivia", "Sarah", "Sophia", "Zoe"];

  let i;
  let href;
  let newElt;
  for(i = 0; i < students.length; i++) {
    href = "Student_Websites/" + students[i] + "/Final_Project/index.html";
    newElt = `<p><a href="${href}">${students[i]}</a></p>`;
    $(".studentLinks").append(newElt);
  }

}
