function showPosts() {
    return fetch(`${API_URL}/posts`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            return []
        }
    });
}

function renderPosts(posts) {
    let listPosts = document.querySelector('#posts-list');
    posts.map(p => {
        listPosts.innerHTML = `
            ${listPosts.getInnerHTML()}
            <div>
                <h3>${p.title}</h3>
                <p>${p.text}</p>
            </div>
        `;
    });
}