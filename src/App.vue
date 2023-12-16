<script setup lang="ts">
import { ref } from "vue";
import useDate from "./composables/useDate";

const daysToAdd = ref(0);
const monthsToAdd = ref(0);
const heading = ref("Current Date");

const { date, getDay, getMonth, getYear, addDay, addMonth } = useDate();
const dates = ref(date.toString());

const handleInputChange = (event: Event) => {
  let { name, value } = event.target as HTMLInputElement;
  if (name === "day") {
    if (!value) value = "0";
    daysToAdd.value = parseInt(value);
  } else if (name === "month") {
    if (!value) value = "0";
    monthsToAdd.value = parseInt(value);
  }
};

const handleAddDaysAndMonths = () => {
  const newDate = addMonth(monthsToAdd.value, addDay(daysToAdd.value, date));
  return newDate;
};

const handleClick = () => {
  heading.value = "Updated date:";
  dates.value = handleAddDaysAndMonths().toString();
};
</script>

<template>
  <div>
    <h2>Today</h2>
    {{ getDay() }}, {{ getMonth() }} {{ getYear() }}.
    <br />
    <h2>{{ heading }}</h2>
    <p>Date: {{ dates }}</p>
    <br />
    Add Day: <input name="day" type="number" @change="handleInputChange" />
    <br />
    Add Month: <input name="month" type="number" @change="handleInputChange" />
    <br />
    <button @click="handleClick">Change The World</button>
  </div>
</template>

<style scoped>
div {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

h2 {
  color: #007bff;
}

button {
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 60px;
}
</style>
