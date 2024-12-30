<template>
  <div class="mx-auto container p-5">
    <PageTitle title="Fligts" lead="search results" />
    <div v-if="flights.length">
      <div
        v-for="flight in flights"
        class="rounded my-1 p-2 bg-gray-100 border border-gray-200 shadow-sm"
      >
        <!-- Опредяем тип рейса -->
        <div v-if="search.type === 'rt'"></div>
        <div v-for="direction in flight.segments_direction" :key="direction">
          <h3>{{ direction }}</h3>
          <div class="flex gap-2 bg-gray-300">
            <div
              v-for="flightIndex in direction"
              class="flex gap-2 bg-gray-300 m-2 p-2"
            >
              <div>{{ flightIndex }}</div>
              <div>
                {{ flight.segments[flightIndex].dep.date }}
                {{ flight.segments[flightIndex].dep.time }}
              </div>

              <div>
                {{ flight.segments[flightIndex].arr.date }}
                {{ flight.segments[flightIndex].arr.time }}
              </div>
            </div>
          </div>
        </div>
        <!--

        <div v-if="search.type === 'ow'"></div>
        <div v-if="search.type === 'mc'"></div> 
        -->

        <!--         
        <div v-for="segment in flight.segments" class="border border-rounded-2 my-1 p-2">
            segment
        1    <div>
             {{ segment.arr.date }} {{ segment.arr.time }}
             -
             {{ segment.dep.date }} {{ segment.dep.time }}
           </div>
           <div>
             {{ segment.arr.airport.code }}
             <small>{{ segment.arr.airport.title }}</small>
             -
             {{ segment.dep.airport.code }}
             <small>{{ segment.dep.airport.title }}</small>
           </div>  
        </div> -->
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
