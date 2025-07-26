document.getElementById('resume-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const careerDetails = document.getElementById('career-details').value;
    const industry = document.getElementById('industry').value;

    try {
        const response = await fetch('/functions/api/handler.ts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                careerDetails: careerDetails,
                industry: industry
            })
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById('template-content').innerHTML = data.template;
            document.getElementById('template-section').classList.remove('hidden');
        } else {
            console.error('Error fetching template');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Add download functionality
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', function() {
    const element = document.createElement('a');
    const file = new Blob([document.getElementById('template-content').innerText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
});