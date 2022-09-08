const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#input-title').value.trim();
  const content = document.querySelector('#input-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create project');
    }
  }
}

const displayCreateCard = async (event) => {
  event.preventDefault();

  const newPostCard = document.querySelector('#create-post').style.display='flex';
}

const displayEditCard = async (event) => {
  event.preventDefault();

  const editPostCard = document.querySelector('#edit-post').style.display='flex';
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#new-post')
  .addEventListener('click', displayCreateCard);

document
  .querySelector('#edit-post-button')
  .addEventListener('click', displayEditCard);