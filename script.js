document.addEventListener('DOMContentLoaded', () => {
    // This is a basic example of how you could inject blog posts dynamically.
    // In a real application, you might fetch this data from an API.

    const blogPosts = [
        { title: 'My First Blog Post', date: 'August 15, 2025', content: 'This is the content of my first blog post. It talks about something I learned recently.' },
        { title: 'A Guide to React Hooks', date: 'July 20, 2025', content: 'A deep dive into using useEffect and useState to manage state in React applications.' }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');
    
    // Clear the placeholder text
    blogPostsContainer.innerHTML = '';

    if (blogPosts.length > 0) {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p><small>Published on: ${post.date}</small></p>
                <p>${post.content}</p>
            `;
            blogPostsContainer.appendChild(postElement);
        });
    } else {
        blogPostsContainer.innerHTML = '<p>No blog posts published yet. Check back soon!</p>';
    }

});
