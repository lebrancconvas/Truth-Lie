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
            <Input v-model="formStatement.statement1.statement" type="textarea" />
          </FormItem>
          <FormItem label="Statement 2">
            <Input v-model="formStatement.statement2.statement" type="textarea" />
          </FormItem>
          <FormItem label="Statement 3">
            <Input v-model="formStatement.statement3.statement" type="textarea" />
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
        <Button type="error">Reset</Button>
        <Button type="success" @click="createStatement">Create Statement</Button>
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
            statement: "",
            isLie: false
          },
          statement2: {
            statement: "",
            isLie: false
          },
          statement3: {
            statement: "",
            isLie: false
          },
          lieStatement: "",
          modal: false
        }
      }
    },
    methods: {
      createStatement() {
        if(this.formStatement.statement1.statement === '' || this.formStatement.statement2.statement === '' || this.formStatement.statement3.statement === '') {
          console.log(`Please filled all the statement.`);
        } else {
          switch(this.formStatement.lieStatement) {
            case('Statement 1'):
              this.formStatement.statement1.isLie = true;
              break;
            case('Statement 2'):
              this.formStatement.statement2.isLie = true;
              break;
            case('Statement 3'):
              this.formStatement.statement3.isLie = true;
              break;
            default:
              console.log(`Error: ${this.formStatement.lieStatement}`);
              break;
            }
          console.log(this.formStatement);
          this.modal = true;
        }
      },
      ok() {
        this.formStatement.statement1.statement = "";
        this.formStatement.statement2.statement = "";
        this.formStatement.statement3.statement = "";
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
