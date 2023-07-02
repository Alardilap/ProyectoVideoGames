const Validation = (videoGame) => {
  let errors = {};
  if (!videoGame.name || videoGame.name.length > 40) {
    errors.name = "¡El nombre es invalido!";
  }
  if (!videoGame.description || videoGame.description.length > 250) {
    errors.description =
      "¡Este campo debe contener minimo 1 caracter y maximo 250 caracteres!";
  }
  if (!videoGame.platforms || videoGame.platforms.length > 35) {
    errors.platforms = "¡Este campo no debe ser mayor a 35 caracteres!";
  }
  if (!/\.(jpg|jpeg|png|gif)$/i.test(videoGame.background_image)) {
    errors.background_image =
      "¡Este campo solo permite formatos jpg,jpeg,png, gif!";
  }
  if (videoGame.released.length > 10) {
    errors.released = "Debe llenar el campo fecha";
  }

  if (!/^[1-5](\.\d+)?$/.test(videoGame.rating)) {
    errors.rating = "¡Este campo debe ser un número entre 1 y 5!";
  }
  if (!videoGame.genres) {
    errors.genres = "Debes elegir minimo un genero";
  }
  return errors;
};

export default Validation;
