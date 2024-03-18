document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.getElementById('blogPosts');

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(function(post) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');

        const title = document.createElement('h2');
        title.textContent = post.title;

        const author = document.createElement('p');
        author.textContent = 'Author: ' + post.username;

        const content = document.createElement('p');
        content.textContent = post.content;

        postDiv.appendChild(title);
        postDiv.appendChild(author);
        postDiv.appendChild(content);

        blogPosts.appendChild(postDiv);
    });
});