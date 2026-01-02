let cellHtml = '';

cellProductsData.forEach((cell) =>{
  
  cellHtml += `
  <div class="table-ad-cell">
    <div class="cell-title-div">
      <p class="cell-title">${cell.title}</p>
    </div>
    <div class="table-ad-inner-table-div">
      <img src="${cell.imgs.img1}" alt="" class="table-img">
      <img src="${cell.imgs.img2}" alt="" class="table-img">
      <p class="img-info">${cell.infos.info1}</p>
      <p class="img-info">${cell.infos.info2}</p>
      <img src="${cell.imgs.img3}" alt="" class="table-img">
      <img src="${cell.imgs.img4}" alt="" class="table-img">
      <p class="img-info">${cell.infos.info3}</p>
      <p class="img-info">${cell.infos.info4}</p>
    </div>
    <p class="explore-more-p">${cell.extend}</p>
  </div>
  `
});
document.querySelector('.js-table-ad-div').innerHTML = cellHtml;
console.log(cellHtml);