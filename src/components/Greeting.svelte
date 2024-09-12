<script lang="ts">
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  let greeting = ""

  if(currentHour > 12) {
    greeting = "Buenos días, ¡Bienvenido a AnimeFy!"
  } else if (currentHour < 18) {
    greeting = "Buenas tardes, ¡Bienvenido a AnimeFy!"
  } else {
    greeting = "Buenas noches, ¡Bienvenido a AnimeFy!"
  }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>