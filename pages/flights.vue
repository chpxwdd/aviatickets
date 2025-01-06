<template>
  <div class="mx-auto container p-5">
    <PageTitle title="Fligts" lead="search results" />
    <div v-if="flights.length">
      <div
        v-for="flight in flights"
        class="rounded my-1 p-2 bg-gray-100 border border-gray-200 shadow-sm"
      >
        <!-- Опредяем тип рейса -->
        <!-- <div v-if="search.type === 'rt'"></div> -->

        <div v-for="direction in flight.segments_direction" :key="direction">
          <h3>{{ direction }}</h3>
          <div class="flex gap-2 bg-gray-300 m-2 p-2 border border-white">
            <div>{{ flightIndex }}</div>

            <div
              v-for="flightIndex in direction"
              class="flex gap-2 justify-between bg-gray-600 p-1"
            >
              <div class="bg-white text-right py-2 px-1">
                <div>{{ flight.segments[flightIndex].dep.airport.code }}</div>
                <div>
                  {{ flight.segments[flightIndex].dep.date }}
                  {{ flight.segments[flightIndex].dep.time }}
                </div>
              </div>

              <div class="bg-white text-left py-2 px-1">
                <div>{{ flight.segments[flightIndex].arr.airport.code }}</div>
                <div>
                  {{ flight.segments[flightIndex].arr.date }}
                  {{ flight.segments[flightIndex].arr.time }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const flights = ref([]);
const search = ref([]);
await fetch("http://localhost:3000/api/search")
  .then((res) => res.json())
  .then((res) => {
    flights.value = res.data.flights;
    search.value = res.data.search;
  })
  .catch((err) => {
    console.error(err);
  });

const getSegments = (flightId) => {};
</script>

<style lang="scss" scoped></style>
