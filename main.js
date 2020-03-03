window.onload = function () {

    // https://www.mocky.io create api
    let api = 'http://www.mocky.io/v2/5da8849a1200001100edafa2';

    let citiesDatas = [];
    let citiesHtml = '';
    let areaHtml = '';

    // ajax data
    axios
        .get(api)
        .then(res => {
            citiesDatas = res.data;
            // console.log(citiesDatas); //24 obj

            // get data to do
            renderCities(citiesDatas);

            // city value on change event
            changeCity();
        })
        .catch(err => {
            console.log(err)
        });

    function renderCities(citiesDatas) {
        // all cities
        citiesDatas.forEach(function (item) {
            citiesHtml += `<option value="${item.name}">${item.name}</option>`;
        });

        // push DOM
        document.getElementById('city').innerHTML = citiesHtml;

        // init status
        let val = document.getElementById('city').value;
        renderArea(val);

    }

    function changeCity() {
        document.getElementById('city').addEventListener('change', function () {
            //console.log(this.value);
            renderArea(this.value); // 
        })
    }

    function renderArea(value) {
        // clear country
        areaHtml = '';

        let area = citiesDatas.filter(function (item) {
            return item.name === value;
        });

        area[0].districts.forEach(function (item) {
            areaHtml += `<option value="${item.name}">${item.name}</option>`
        });

        document.getElementById('country').innerHTML = areaHtml;

    }

};