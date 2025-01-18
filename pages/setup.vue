<template>
  <div class="form-container">
    <h1>Set up your account</h1>

    <form @submit.prevent="handleSubmit">
      <!-- Name -->
      <div class="form-group">
        <label for="name">Name</label>
        <input
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="John Doe"
        />
      </div>

      <!-- Major -->
      <div class="form-group">
        <label for="major">Major</label>
        <input
            type="text"
            id="major"
            v-model="formData.major"
            placeholder="Rizzonomics, Computer Science, ..."
        />
      </div>

      <!-- Year -->
      <div class="form-group">
        <label for="year">Year</label>
        <select id="year" v-model="formData.year">
          <option value="" disabled>Select...</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>
      </div>

      <!-- Classes -->
      <div class="form-group">
        <label>What classes are you taking this semester?</label>
        <div class="tags-container">
          <span
              v-for="classOption in classes"
              :key="classOption"
              class="tag"
              :class="{ selected: formData.selectedClasses.includes(classOption) }"
              @click="toggleClass(classOption)"
          >
            {{ classOption }}
          </span>
        </div>
        <input
            type="text"
            v-model="formData.selectedClassesString"
            placeholder="MATH240, COMP360, ..."
            readonly
        />
      </div>

      <!-- Submit Button -->
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        major: "",
        year: "",
        selectedClasses: [],
        selectedClassesString: "",
      },
      classes: ["MATH240", "COMP360", "MATH222", "PHYS230"],
    };
  },
  methods: {
    toggleClass(classOption) {
      const index = this.formData.selectedClasses.indexOf(classOption);
      if (index === -1) {
        this.formData.selectedClasses.push(classOption);
      } else {
        this.formData.selectedClasses.splice(index, 1);
      }
      this.updateSelectedClassesString();
    },
    updateSelectedClassesString() {
      this.formData.selectedClassesString = this.formData.selectedClasses.join(", ");
    },
    handleSubmit() {
      console.log("Form Submitted:", this.formData);
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 300px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 10px;
}

.tags-container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.tag {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  font-size: 14px;
}

.tag.selected {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
