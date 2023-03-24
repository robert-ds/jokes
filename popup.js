const message = document.querySelector('div');
const boton = document.getElementById('change-mesagge');

const chistes = [
  "¿Cómo se llama el campeón de apnea japonés? Tokofondo.",
  "¿Cómo se llama el subcampeón de apnea japonés? Kasitoko.",
  "En una discoteca, se acerca un hombre a una mesa y le dice a una de las chicas: ¿Bailamos? La muchacha le dice al caballero: ¿Y quién sacará a mi amiga? No te preocupes, le dice el hombre, ¡seguridad, saquen a esa mujer de aquí!",
  "La profesora le dice a Jaimito: Jaimito, ¿qué me puedes decir sobre la gelatina? No sé, profesora. En mi antigua escuela solo conocí la I latina y la Y griega, pero la  latina nunca la escuche.",
  "Una liebre le dice a una tortuga en una fiesta: Tortuga, se acabó el vino, toma este dinero y ve a comprar. La tortuga se va y vuelve al cabo de un año. Entonces le dice a la liebre: ¿Cómo lo quieres, blanco o tinto?",
  "Un padre en la misa dice en alta voz: Hoy solo me limitaré a confesar a las devotas. Se detiene delante de su asiento una feligresa y le dice al padre: ¿Y cuándo nos toca a las que no vinimos en botas?",
  "Una mujer le dice a su marido: Juan, estás obsesionado con el fútbol y la verdad es que me haces falta. Él, enfadado, le contesta: ¡eso no es verdad, ni te he tocado! Vamos a recurrir al VAR.",
  "El General de batallón le pregunta a un soldado: Soldado, ¿cuál es mi rango? El soldado, dubitativo, contesta: No lo sé, ¿mi capitán? ¡No seas ridículo! contesta el general, ¿no ves todas las estrellas que llevo en el pecho? ¡Ah sí! dice el soldado, entonces eres mi cielo.",
  "Mamá, mamá, ¿sabías que Juana de Arco era drogadicta? La mamá le mire y le dice: ¿Pero qué dices? Eso no es cierto. Que sí, mamá, en el libro pone que murió por heroína.",
  "Anita le dice a su amiga: Loca, ya sé por qué estoy engordando. ¡Es por culpa del champú! En el envase dice 'para dar cuerpo y volumen'. ¿Y que vas a hacer? Le pregunta su amiga. Mira, dice Anita, a partir de ahora me lavaré el pelo con jabón para lavar los platos, en el encase dice 'quita grasa, hasta la más difícil'.",
];

const randomChistes = () => {
  const messages = chistes[Math.floor(Math.random() * chistes.length)];
  return messages;
}

boton.addEventListener('click', () => {
  message.textContent = randomChistes();
});