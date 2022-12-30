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
        <div>
          <Modal v-model="modalSuccess" title="Success" @on-ok="ok">
            <p>Statement has been created.</p>
          </Modal>
          <Modal v-model="modalWarning" title="Warning">
            <p>Please filled all section in the form!</p>
          </Modal>
        </div>
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
        modalSuccess: false,
        modalWarning: false
      }
    },
    methods: {
      createStatement() {
        if(this.formStatement.statement1.content === "" || this.formStatement.statement2.content === "" || this.formStatement.statement3.content === "" || this.formStatement.lieStatement === "") {
          this.modalWarning = true;
          return;
        }
        switch(this.formStatement.lieStatement) {
          case("Statement 1"):
            this.formStatement.statement1.isLie = true;
            break;
          case("Statement 2"):
            this.formStatement.statement2.isLie = true;
            break;
          case("Statement 3"):
            this.formStatement.statement3.isLie = true;
            break;
          default:
            console.log(`[ERROR] Assigning False Statement error.`);
            break;
        }
        const statement = {
          statement1: {
            content: this.formStatement.statement1.content,
            isLie: this.formStatement.statement1.isLie
          },
          statement2: {
            content: this.formStatement.statement2.content,
            isLie: this.formStatement.statement2.isLie
          },
          statement3: {
            content: this.formStatement.statement3.content,
            isLie: this.formStatement.statement3.isLie
          },
          lieStatement: this.formStatement.lieStatement
        }
        this.$store.commit("ADD_STATEMENT", statement);
        this.modalSuccess = true;
      },
      reset() {
        this.formStatement.statement1.content = "";
        this.formStatement.statement2.content = "";
        this.formStatement.statement3.content = "";
        this.formStatement.statement1.isLie = false;
        this.formStatement.statement2.isLie = false;
        this.formStatement.statement3.isLie = false;
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
