<template>
  <div>
    <header>
      <div>
        <h1>Create Statement</h1>
      </div>
    </header>
    <section id="create-statement-section">
      <div>
        <Form>
          <FormItem label="Statement 1">
            <Input v-model="formStatement.statement1.content" type="textarea" />
          </FormItem>
          <FormItem label="Statement 2">
            <Input v-model="formStatement.statement2.content" type="textarea" />
          </FormItem>
          <FormItem label="Statement 3">
            <Input v-model="formStatement.statement3.content" type="textarea" />
          </FormItem>
          <FormItem label="Lie Statement">
            <RadioGroup v-model="formStatement.lieStatement">
              <Radio label="Statement 1" value="statement1">Statement 1</Radio>
              <Radio label="Statement 2" value="statement2">Statement 2</Radio>
              <Radio label="Statement 3" value="statement3">Statement 3</Radio>
            </RadioGroup>
          </FormItem>
        </Form>
      </div>
    </section>
    <section id="action-section">
      <div>
        <Button type="error" @click="reset">Reset</Button>
        <Button type="success" @click="createStatement">Create Statement</Button>
      </div>
      <div>
        <Modal v-model="modal" @on-ok="ok">
          <template #title>
            <h2>Success</h2>
          </template>
          <div>
            <p>Statement has been created.</p>
          </div>
        </Modal>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formStatement: {
          statement1: {
            content: "",
            isLie: false
          },
          statement2: {
            content: "",
            isLie: false
          },
          statement3: {
            content: "",
            isLie: false
          },
          lieStatement: "",
        },
        modal: false
      }
    },
    methods: {
      createStatement() {
        if(this.formStatement.statement1.content === '' || this.formStatement.statement2.content === '' || this.formStatement.statement3.content === '') {
          console.log(`Please filled all the statement.`);
        } else {
          this.modal = true;
          this.$store.commit("ADD_STATEMENT", this.formStatement);
        }
      },
      reset() {
        this.formStatement.statement1.content = "";
        this.formStatement.statement2.content = "";
        this.formStatement.statement3.content = "";
        this.formStatement.lieStatement = "";
      },
      ok() {
        this.formStatement.statement1.content = "";
        this.formStatement.statement2.content = "";
        this.formStatement.statement3.content = "";
        this.formStatement.statement1.isLie = false;
        this.formStatement.statement2.isLie = false;
        this.formStatement.statement3.isLie = false;
        this.formStatement.lieStatement = "";
      }
    }
  }
</script>

<style scoped>
  * {
    text-align: center;
  }

  #create-statement-section {
    width: 50%;
    margin: 0 auto;
  }
</style>
