var index = 0;
var left = document.getElementById('last');
var right = document.getElementById('next');
picture(index);
left.addEventListener('click', function () {
    if ((index == 0)) {
        index = 7;
    } else {
        index--;
    }
    picture(index);
});
right.addEventListener('click', function () {
    if ((index == 7)) {
        index = 0;
    } else {
        index++;
    }
    picture(index);
});

function picture(index) {
    axios.get('https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050').then(function (response) {
      console.log(index);
        document.getElementById('main').src=response.data.img[index];
        document.getElementById('text').innerText=(index+1)+"/8";
    });
}
