function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    document.getElementById('preview-name').innerText = name;
    document.getElementById('preview-email').innerText = `Email: ${email}`;
    document.getElementById('preview-phone').innerText = `Phone: ${phone}`;
    document.getElementById('preview-linkedin').innerText = linkedin ? `LinkedIn: ${linkedin}` : "";
    document.getElementById('preview-github').innerText = github ? `GitHub: ${github}` : "";
    document.getElementById('preview-experience').innerText = experience;
    document.getElementById('preview-education').innerText = education;

    const photo = document.getElementById('photo').files[0];
    const photoPreview = document.getElementById('photo-preview');
    photoPreview.innerHTML = '';
    if (photo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            photoPreview.appendChild(img);
        }
        reader.readAsDataURL(photo);
    }

    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('resume-preview').style.display = 'block';
}
