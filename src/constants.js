export const LANG_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
  };


  
  export const CODE_TEMPLATES = {
    javascript: `
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Sumit Lal Verma");
  `,
    typescript: `
  type Params = {
    name: string;
  };
  
  function greet(data: Params) {
    console.log("Hello, " + data.name + "!");
  }
  
  greet({ name: "Sumit Lal Verma" });
  `,
    python: `
def greet(name):
    print("Hello, " + name + "!")
  
greet("Sumit Lal Verma")
  `,
  };
  