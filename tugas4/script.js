document.addEventListener('DOMContentLoaded', function() {
  fetch('https://script.google.com/macros/s/AKfycbx2i_OeGapjukPfYkuh9A0dP5bZhqsphfhcEQE3_R51svmXaHNkt4cM9XOHoSDKK6rH/exec')
    .then(response => response.json())
    .then(data => {
      let responseContainer = document.getElementById('responseData');
      data.forEach(item => {
        let responseBlock = document.createElement('div');
        responseBlock.className = 'response-block';

        let name = document.createElement('p');
        name.textContent = `Nama: ${item['Nama']}`;

        let nim = document.createElement('p');
        nim.textContent = `NIM: ${item['NIM']}`;

        let game = document.createElement('p');
        game.textContent = `Game Favorit: ${item['Game Favorit']}`;

        responseBlock.appendChild(name);
        responseBlock.appendChild(nim);
        responseBlock.appendChild(game);

        responseContainer.appendChild(responseBlock);
      });
    })
    .catch(error => console.error('Error:', error));
});
