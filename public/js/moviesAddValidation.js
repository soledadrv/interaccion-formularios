window.addEventListener('load', () => {

    const qs = (tag) => document.querySelector(tag);

    const funcValidate = (obj) => {
        let arr = Object.values(validate);
        if (!arr.includes(false)) {
            button.disabled = false;
            button.classList.remove('bttn-disabled');
        } else {
            button.disabled = true;
            button.classList.add('bttn-disabled');
        }
    }

    const form = qs('form');
    const title = qs('#title');
    const rating = qs('#rating');
    const awards = qs('#awards');
    const date = qs('#release_date');
    const length = qs('#length');
    const select = qs('select');
    const button = qs('button.botonAgregar');
    const ulErrors = qs('div.errors ul');

    const inputs = document.querySelectorAll('input');
    const small = document.querySelectorAll('small');

    const smallTitle = qs('small.title');
    const smallRating = qs('small.rating');
    const smallAwards = qs('small.awards');
    const smallDate = qs('small.release_date');
    const smallLength = qs('small.length');
    const smallGenre = qs('small.genre');

    title.focus();

    let arrErrors = [];

    const validate = {
        title: false,
        rating: false,
        awards: false,
        date: false,
        length: false,
        select: false,
    };

    button.disabled = true;
    button.classList.add('bttn-disabled');

    /* Validación ON-TIME */

    // title
    title.addEventListener('input', (e) => {

        if(e.target.value.length < 2) {
            title.classList.add('is-invalid');
            title.classList.remove('is-valid');
            smallTitle.innerHTML = 'El título debe tener al menos 2 caracteres';
            validate.title = false;
        } else {
            title.classList.remove('is-invalid');
            title.classList.add('is-valid');
            smallTitle.innerHTML = '';
            validate.title = true;
        };

        funcValidate(validate);
    });

    // rating
    rating.addEventListener('input', (e) => {
        
        if(e.target.value < 1 || e.target.value > 10) {
            rating.classList.add('is-invalid');
            rating.classList.remove('is-valid');
            smallRating.innerHTML = 'La clasificación debe estar entre 1 y 10';
            validate.rating = false;
        } else {
            rating.classList.remove('is-invalid');
            rating.classList.add('is-valid');
            smallRating.innerHTML = '';
            validate.rating = true;
        };

        funcValidate(validate);
    });
    
    // awards
    awards.addEventListener('input', (e) => {
        
        if(e.target.value < 1 || e.target.value > 10) {
            awards.classList.add('is-invalid');
            awards.classList.remove('is-valid');
            smallAwards.innerHTML = 'Los premios deben estar entre 1 y 10';
            validate.awards = false;
        } else {
            awards.classList.remove('is-invalid');
            awards.classList.add('is-valid');
            smallAwards.innerHTML = '';
            validate.awards = true;
        };

        funcValidate(validate);
    })

    // release date
    date.addEventListener('input', (e) => {

        const now = new Date();
        let release_date = Date.parse(e.target.value);
        let actual = Date.parse(now);
         
        if(actual < release_date) {
            date.classList.add('is-invalid');
            date.classList.remove('is-valid');
            smallDate.innerHTML = 'La fecha debe ser anterior a la actual';
            validate.date = false;
        } else {
            date.classList.remove('is-invalid');
            date.classList.add('is-valid');
            smallDate.innerHTML = '';
            validate.date = true;
        };

        funcValidate(validate);
    })

    // length
    length.addEventListener('input', (e) => {

        if(e.target.value < 60 || e.target.value > 360) {
            length.classList.add('is-invalid');
            length.classList.remove('is-valid');
            smallLength.innerHTML = 'La duración debe estar entre 60 y 360';
            validate.length = false;
        } else {
            length.classList.remove('is-invalid');
            length.classList.add('is-valid');
            smallLength.innerHTML = '';
            validate.length = true;
        };

        funcValidate(validate);
    });

    //genre
    select.addEventListener('input', (e) => {
        
        if(e.target.value < 1 || e.target.value > 12) {
            select.classList.add('is-invalid');
            select.classList.remove('is-valid');
            smallGenre.innerHTML = 'Es necesario seleccionar un género';
            validate.select = false;
        } else {
            select.classList.remove('is-invalid');
            select.classList.add('is-valid');
            smallGenre.innerHTML = '';
            validate.select = true;
        };

        funcValidate(validate);
    });


    /* Validación SUBMIT */

    form.addEventListener('submit', (e) => {

        if(title.value === '') {
            arrErrors.push('El título no puede estar vacío')
        } else if (title.value.length < 2) {
            arrErrors.push('El título debe tener al menos 2 caracteres')
        };

        if(rating.value === '') {
            arrErrors.push('El campo de clasificación no puede estar vacío')
        } else if(rating.value > 10 || rating.value < 0) {
            arrErrors.push('La clasificación debe estar entre 0 y 10')
        };

        if(awards.value === '') {
            arrErrors.push('El campo de premios no puede estar vacío')
        } else if(awards.value > 10 || awards.value < 0) {
            arrErrors.push('Los premios deben estar entre 0 y 10')
        };

        if(length.value === '') {
            arrErrors.push('El campo de duración no puede estar vacío')
        } else if(length.value > 60 || length.value < 360) {
            arrErrors.push('La duración debe estar entre 60 y 360')
        };

        if(select.value > 12 || select.value < 1) {
            arrErrors.push('Se debe seleccionar un género')
        };

        // validación rating
        if(rating.value > 10 || rating.value < 0) {
            e.preventDefault()
            rating.classList.add('is-invalid')
            smallRating.innerHTML = 'La clasificación debe estar entre 0 y 10'
            
        } else if(rating.classList.contains('is-invalid') && rating.value) {
            rating.classList.remove('is-invalid')
            smallRating.innerHTML = 'Los premios deben estar entre 0 y 10'
        };

        // validación awards
        if(awards.value > 10 || awards.value < 0) {
            e.preventDefault()
            awards.classList.add('is-invalid')
            smallAwards.innerHTML = 'Los premios deben estar entre 0 y 10'
            
        } else if(awards.classList.contains('is-invalid') && awards.value) {
            awards.classList.remove('is-invalid')
            smallAwards.innerHTML = 'Los premios deben estar entre 0 y 10'
        };

        // validación length
        if(length.value > 360 || length.value < 60) {
            e.preventDefault()
            length.classList.add('is-invalid')
            smallLength.innerHTML = 'La duración debe estar entre 60 y 360'
            
        } else if(length.classList.contains('is-invalid') && length.value) {
            length.classList.remove('is-invalid')
            smallLength.innerHTML = 'Los premios deben estar entre 0 y 10'
        };

        // validación gente
        if(select.value === '') {
            e.preventDefault()
            select.classList.add('is-invalid')
            smallGenre.innerHTML = 'Este campo no debe estar vacío'

        } else if(select.classList.contains('is-invalid')) {
            select.classList.remove('is-invalid')
            smallGenre.innerHTML = ''
        };

        // validación general inputs
        for( let i = 0 ; i < inputs.length ; i++ ) {

            if(inputs[i].value === '') {
                e.preventDefault()
                inputs[i].classList.add('is-invalid')
                small[i].innerHTML = 'Este campo no puede estar vacío'

            } else if(inputs[i].classList.contains('is-invalid')) {
                inputs[i].classList.remove('is-invalid')
                small[i].innerHTML = ''
            }

        };

        // mostrar errores
        if(arrErrors.length > 0) {
            for (let i = 0; i < arrErrors.length; i++) {
                ulErrors.innerHTML += `<li>${arrErrors[i]}</li>`
            }
        }

    })

});
