let tags = [];
function addTag() {
    console.log("hi");;
    const hashTagsEl = document.getElementById('hashTags');
    const tagListEl = document.getElementById('tagList');
    const addTagBtn = document.getElementById('addTagBtn');
    let tag = hashTagsEl.value;
    // const tag = document.getElementById('hashTags').value;
    if (tag !== '') {
        tags.push(tag);
        // tagListEl.innerText = '';
        tags.forEach((t) => {
            const tagEl = document.createElement('div');
            tagEl.className = 'tag';
            const tagTextEl = document.createElement('span');
            tagTextEl.textContent = `#${t}`;
            tagEl.appendChild(tagTextEl);
            tagEl.addEventListener('click', () => {
                tags = tags.filter((item) => item !== t);
                tagListEl.removeChild(tagEl);
            });
            tagListEl.appendChild(tagEl);
        });
        hashTagsEl.value = '';
        tags = [];
    }
}
        

async function savePost(title, content) {
    var postData = {
        title: title,
        content: content,
        // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
    console.log("save post");
    const document = collectionPost.doc();
    await document.set(postData);

}