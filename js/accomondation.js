
//send request to fetch all data
fetch("http://localhost:3000/accomondations")
.then(res => res.json())
.then(accomondationData => {
    //console.log(accomondationData);
    //first camp data
    const name1 = accomondationData[0].jina;
    const detail1 = accomondationData[0].detail;
    const image1 = accomondationData[0].image;

    //second camp data 
    const name2 = accomondationData[1].jina;
    const detail2 = accomondationData[1].detail;
    const image2 = accomondationData[1].image;

    console.log(image2);

    //third camp data
    const name3 = accomondationData[2].jina;
    const detail3 = accomondationData[2].detail;
    const image3 = accomondationData[2].image;

    console.log(image3);


    //creating everythig to display in html here with classes to be use to style for css references

    const div1 = document.createElement('div');
    div1.classList.add( 'simba1');
  
    const img01 = document.createElement('img');
    img01.classList.add('img1');
    img01.setAttribute('src', image1);
    img01.setAttribute('alt', 'Double room');
    div1.appendChild(img01);

    const divDes = document.createElement('div');
    divDes.classList.add('simbadesc1');
    div1.appendChild(divDes);
  
    const p = document.createElement('p');
    p.classList.add('name1');
    p.textContent = `${name1}`;
    divDes.appendChild(p);

    const divDetail = document.createElement('div');
    divDetail.classList.add('details1');
    divDes.appendChild(divDetail);
  
    const p2 = document.createElement('p');
    p2.classList.add('p1');
    p2.textContent = `${detail1}`;
    divDetail.appendChild(p2);
     

    const h3 = document.createElement('h3');
    h3.classList.add('h3');
    h3.textContent = 'Cost $100';
    divDetail.appendChild(h3);
    
    const button = document.createElement('button');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', './booking.html');
    anchor.setAttribute('class', 'archor');
    anchor.textContent = 'Book Now';
    button.appendChild(anchor);
    divDetail.appendChild(button);
  
    const existingDiv = document.querySelector('.simbasites');
    existingDiv.appendChild(div1);

    const div2 = document.createElement('div');
    div2.classList.add( 'simba2');
  
    const img02 = document.createElement('img');
    img02.classList.add('img2');
    img02.setAttribute('src', image2);
    img02.setAttribute('alt', 'Single room');
    div2.appendChild(img02);

    const divDes1 = document.createElement('div');
    divDes1.classList.add('simbadesc2');
    div2.appendChild(divDes1);
  
    const p1 = document.createElement('p');
    p1.classList.add('name2');
    p1.textContent = `${name2}`;
    divDes1.appendChild(p1);

    const divDetail1 = document.createElement('div');
    divDetail1.classList.add('details2');
    divDes1.appendChild(divDetail1);
  
    const p3 = document.createElement('p');
    p3.classList.add('p2');
    p3.textContent = `${detail2}`;
    divDetail1.appendChild(p3);
     

    const h31 = document.createElement('h3');
    h31.classList.add('h3');
    h31.textContent = 'Cost $80';
    divDetail1.appendChild(h31);
    
    const button1 = document.createElement('button');
    const anchor1 = document.createElement('a');
    anchor1.setAttribute('href', './booking.html');
    anchor1.setAttribute('class', 'archor1');
    anchor1.textContent = 'Book Now';
    button1.appendChild(anchor1);
    divDetail1.appendChild(button1);
  
    const existingDiv1 = document.querySelector('.simbasites');
    existingDiv1.appendChild(div2);


    const div3 = document.createElement('div');
    div3.classList.add( 'simba3');
  
    const img03 = document.createElement('img');
    img03.classList.add('img3');
    img03.setAttribute('src', image3);
    img03.setAttribute('alt', 'Stone room');
    div3.appendChild(img03);

    const divDes2 = document.createElement('div');
    divDes2.classList.add('simbadesc3');
    div3.appendChild(divDes2);
  
    const p4 = document.createElement('p');
    p4.classList.add('name3');
    p4.textContent = `${name3}`;
    divDes2.appendChild(p4);

    const divDetail2 = document.createElement('div');
    divDetail2.classList.add('details3');
    divDes2.appendChild(divDetail2);
  
    const p5 = document.createElement('p');
    p5.classList.add('p3');
    p5.textContent = `${detail3}`;
    divDetail2.appendChild(p5);
     

    const h32 = document.createElement('h3');
    h32.classList.add('h3');
    h32.textContent = 'Cost $120';
    divDetail2.appendChild(h32);
    
    const button2 = document.createElement('button');
    const anchor2 = document.createElement('a');
    anchor2.setAttribute('href', './booking.html');
    anchor2.setAttribute('class', 'archor2');
    anchor2.textContent = 'Book Now';
    button2.appendChild(anchor2);
    divDetail2.appendChild(button2);
  
    const existingDiv2 = document.querySelector('.simbasites');
    existingDiv2.appendChild(div3);
   
   
})