let thumbnailImage = document.getElementById("thumbImageSrc").src;
let mainHeaderImage = document.getElementById("mainHeaderImageSrc").src;
let authorImage = document.getElementById("authorImageSrc").src;
let thumbnailImageForUploadCheck = document.getElementById("thumbImageSrc").src;
let mainHeaderImageForUploadCheck =document.getElementById("mainHeaderImageSrc").src;
let authorImageForUploadCheck = document.getElementById("authorImageSrc").src;
let token = localStorage.getItem("token");
const reader = new FileReader();
const readerthumbnailImage = new FileReader();
const readermain = new FileReader();
reader.onload = e => {
  document.getElementById('authorImageSrc').src = e.target.result;
}
readermain.onload = e => {
  document.getElementById('mainHeaderImageSrc').src = e.target.result;
}
readerthumbnailImage.onload = e => {
  document.getElementById('thumbImageSrc').src = e.target.result;
}
document.getElementById("thumbImage").addEventListener("change", (e) => {
  //  console.log(e.target.files[0])
  thumbnailImage = e.target.files[0]
 readerthumbnailImage.readAsDataURL(thumbnailImage);
 ;
});
document.getElementById("authorImage").addEventListener("change", (e) => {
  //console.log(e.target.files[0])
  authorImage = e.target.files[0];
  reader.readAsDataURL(authorImage);
  
  
  console.log(mainHeaderImage, authorImage, thumbnailImage, editor.getData());
});
document.getElementById("mainHeaderImage").addEventListener("change", (e) => {
  mainHeaderImage = e.target.files[0];
  readermain.readAsDataURL(mainHeaderImage);
  //readermain.readAsDataURL(mainHeaderImage);

});
//console.log(document.getElementById('mainHeaderImageSrc').src===mainHeaderImage  )
document.getElementById("submitToCloud").addEventListener("click", async () => {
  console.log("hello");
  if (
    thumbnailImage &&
    mainHeaderImage &&
    authorImage &&
    heading &&
    shortContent &&
    authorName
  ) {
    let thumbUrl = thumbnailImageForUploadCheck;
    if (thumbnailImageForUploadCheck !== thumbnailImage) {
      thumbUrl = await uploadThumbImage();
      console.log("changed");
    }
    let headerImageUrl = mainHeaderImageForUploadCheck;
    if (mainHeaderImageForUploadCheck !== mainHeaderImage) {
      headerImageUrl = await uploadMain();
     // console.log(mainHeaderImageForUploadCheck , mainHeaderImage)
      console.log("changed");
    }
    let authorUrl = mainHeaderImageForUploadCheck;
    if (mainHeaderImageForUploadCheck !== authorImage) {
      //console.log(mainHeaderImageForUploadCheck , authorImage)
      authorUrl = await uploadAuthor();
      console.log("changed");
    }
    ///console.log("Urls Are");
    //console.log(thumbUrl, authorUrl, headerImageUrl);
    let content = editor.getData();
    let heading = document.getElementById("heading").value;
    let shortContent = document.getElementById("shortContent").value;
    let authorName = document.getElementById("authorName").value;
    let blogId = document.getElementById("blogid").value;
    let fb=document.getElementById("fb").value
      let twitter=document.getElementById("twitter").value
      let linkendin=document.getElementById("linkendin").value
      let social={
        fb:fb,twitter:twitter,linkendin:linkendin
      }
      let authorDesc = document.getElementById("authorDesc").value;

    let data = {
      shortContent: shortContent,
      thumbImage: thumbUrl,
      mainHeaderImage: headerImageUrl,
      authorImage: authorUrl,
      authorName: authorName,
      heading: heading,
      content: content,
      authorDesc:authorDesc,
          socialAcc:social
    };
    axios
      .put("/blog/editBlog/" + blogId + "/" + token, data, {
        Accept: "application/json",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(res);
        alert('Success')
        window.history.back();
      })
      .catch((err) => {
        alert(err);
      });
  } else {
    alert("Fill All Details");
  }
});

function uploadMain() {
  const formData = new FormData();
  formData.append("file", mainHeaderImage);
  formData.append("tags", `codeinfuse, medium, gist`);
  formData.append("upload_preset", "pagalworld");
  formData.append("api_key", "539199276215388"); // Replace API key with your own Cloudinary key
  formData.append("timestamp", (Date.now() / 1000) | 0);
  return axios
    .post("https://api.cloudinary.com/v1_1/dvu7miswu/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    })
    .then((response) => {
      const data = response.data;
      const fileURL = data.secure_url; // You should store this URL for future references in your app
      console.log(fileURL);
      return fileURL;
    });
}
function uploadThumbImage() {
  const formData = new FormData();
  formData.append("file", thumbnailImage);
  formData.append("tags", `codeinfuse, medium, gist`);
  formData.append("upload_preset", "pagalworld");
  formData.append("api_key", "539199276215388"); // Replace API key with your own Cloudinary key
  formData.append("timestamp", (Date.now() / 1000) | 0);
  return axios
    .post("https://api.cloudinary.com/v1_1/dvu7miswu/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    })
    .then((response) => {
      const data = response.data;
      const fileURL = data.secure_url; // You should store this URL for future references in your app
      return fileURL;
      console.log(fileURL);
    });
}
function uploadAuthor() {
  const formData = new FormData();
  formData.append("file", authorImage);
  formData.append("tags", `codeinfuse, medium, gist`);
  formData.append("upload_preset", "pagalworld");
  formData.append("api_key", "539199276215388"); // Replace API key with your own Cloudinary key
  formData.append("timestamp", (Date.now() / 1000) | 0);
  return axios
    .post("https://api.cloudinary.com/v1_1/dvu7miswu/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    })
    .then((response) => {
      const data = response.data;
      const fileURL = data.secure_url; // You should store this URL for future references in your app
      console.log(fileURL);
      return fileURL;
    });
}
