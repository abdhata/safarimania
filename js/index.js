// Send request to fetch all data
fetch("http://localhost:3000/sites")
.then(res => res.json())
.then(sitesData => {
    // Loop through the fetched data and update HTML elements
    for (const element of sitesData) {
        const site = element;
        const name = site.name;
        const description = site.description;
        const image = site.image;

        // Create div element for each site
        
        const div = document.createElement('div');
        div.classList.add(`site`);

        // Create img element
        const img = document.createElement('img');
        img.classList.add(`img`);
        img.setAttribute('src', image);
        img.setAttribute('alt', name);
        div.appendChild(img);

        // Create name paragraph element
        const nameP = document.createElement('p');
        nameP.classList.add(`name`);
        nameP.textContent = name;
        div.appendChild(nameP);

        // Create description paragraph element
        const descriptionP = document.createElement('p');
        descriptionP.classList.add(`description`);
        descriptionP.textContent = description;
        div.appendChild(descriptionP);

        // Create button element with anchor element
        const button = document.createElement('button');
        const anchor = document.createElement('a');
        anchor.setAttribute('href', './accomondation.html');
        anchor.setAttribute('class', `anchor`);
        anchor.textContent = 'More on Accommodation';
        button.appendChild(anchor);
        div.appendChild(button);

        // Update existing div element with the newly created div element
        const existingDiv = document.querySelector('.sites');
        existingDiv.appendChild(div);
    }
})
.catch(err => console.error(err));

