window.onload = ()=>{
  const toStart = document.getElementById('js--tostart');

  const goBack = document.getElementById('js--goBack');
  goBack.onclick = ()=>{
    window.history.back();
  };

  
  toStart.onclick = ()=>{
    window.location.href = 'index.html';
  };


  document.getElementById('js--tostart').onclick = ()=>{
    window.location.href = "index.html";
  };

  //arrow omlaag laten gaan
  document.getElementById('js--arrow--down').onclick = ()=>{
    document.getElementById('js--section1').scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
  };
};
