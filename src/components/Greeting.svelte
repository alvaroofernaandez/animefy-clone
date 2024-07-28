<script lang="ts">
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  let greeting = ""

  if(currentHour > 12) {
    greeting = "Buenos días, ¡Bienvenido a HaganeFy!"
  } else if (currentHour < 18) {
    greeting = "Buenas tardes, ¡Bienvenido a HaganeFy!"
  } else {
    greeting = "Buenas noches, ¡Bienvenido a HaganeFy!"
  }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>