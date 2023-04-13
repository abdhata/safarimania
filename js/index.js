// Send request to fetch all data
fetch("http://localhost:3000/sites")
.then(res => res.json())
.then(sitesData => {
    // Loop through the fetched data and update HTML elements
    for (let i = 0; i < sitesData.length; i++) {
        const site = sitesData[i];
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

/*//send request to fetch all data
fetch("http://localhost:3000/sites")
.then(res => res.json())
.then(sitesData => {
    //first camp data
    const name1 = sitesData[0].name;
    const description1 = sitesData[0].description;
    const image1 = sitesData[0].image;

    //second camp data 
    const name2 = sitesData[1].name;
    const description2 = sitesData[1].description;
    const image2 = sitesData[1].image;

    //third camp data
    const name3 = sitesData[2].name;
    const description3 = sitesData[2].description;
    const image3 = sitesData[2].image;



    //creating everythig to display in html here with classes to be use to style for css references

    const div1 = document.createElement('div');
    div1.classList.add( 'firstsite');
  
    const img1 = document.createElement('img');
    img1.classList.add('img1');
    img1.setAttribute('src', image1);
    img1.setAttribute('alt', 'Simba Camp');
    div1.appendChild(img1);
  
    const p = document.createElement('p');
    p.classList.add('name1');
    p.textContent = `${name1}`;
    div1.appendChild(p);
  
    const p2 = document.createElement('p');
    p2.classList.add('description1');
    p2.textContent = `${description1}`;
    div1.appendChild(p2);

    
    const button = document.createElement('button');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', './accomondation.html');
    anchor.setAttribute('class', 'archor1');
    anchor.textContent = 'More on Accommodation';
    button.appendChild(anchor);
    div1.appendChild(button);
  
    const existingDiv = document.querySelector('.sites');
    existingDiv.appendChild(div1);

    const div2 = document.createElement('div');
    div2.classList.add( 'secondsite');
  
    const img2 = document.createElement('img');
    img2.classList.add('img2');
    img2.setAttribute('src', image2);
    img2.setAttribute('alt', 'Ndovu Camp');
    div2.appendChild(img2);
  
    const p1 = document.createElement('p');
    p1.classList.add('name2');
    p1.textContent = `${name2}`;
    div2.appendChild(p1);
  
    const p3 = document.createElement('p');
    p3.classList.add('description2');
    p3.textContent = `${description2}`;
    div2.appendChild(p3);

    
    const button1 = document.createElement('button');
    const anchor1 = document.createElement('a');
    anchor1.setAttribute('href', './accomondation.html');
    anchor1.setAttribute('class', 'archor2');
    anchor1.textContent = 'More on Accommodation';
    button1.appendChild(anchor1);
    div2.appendChild(button1);
  
    const existingDiv1 = document.querySelector('.sites');
    existingDiv1.appendChild(div2);


    const div3 = document.createElement('div');
    div3.classList.add( 'thirdsite');
  
    const img3 = document.createElement('img');
    img3.classList.add('img3');
    img3.setAttribute('src', image3);
    img3.setAttribute('alt', 'Nyati Camp');
    div3.appendChild(img3);
  
    const p4 = document.createElement('p');
    p4.classList.add('name3');
    p4.textContent = `${name3}`;
    div3.appendChild(p4);
  
    const p5 = document.createElement('p');
    p5.classList.add('description3');
    p5.textContent = `${description3}`;
    div3.appendChild(p5);

    
    const button2 = document.createElement('button');
    const anchor2 = document.createElement('a');
    anchor2.setAttribute('href', './accomondation.html');
    anchor2.setAttribute('class', 'archor2');
    anchor2.textContent = 'More on Accommodation';
    button2.appendChild(anchor2);
    div3.appendChild(button2);
  
    const existingDiv2 = document.querySelector('.sites');
    existingDiv2.appendChild(div3);
   
})*/