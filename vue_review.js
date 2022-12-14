Creating a new Vue Project
--------------------------
step1: vue create project-name
    config: Manual -> package_to_include(unit_testing) -> version:(3.x)-> formatterAndLinter(Eslint + propertier)->UnitTesting(jest) ->configurationFIle(in Dedicated config)



JEST TESTING 
------------
What is unit Test?
==================
Unit Test, tests a single piece of a program in isolation
A unit test should be lightweight and should run fast
If there are dependencies the unit test should mock or stub them out ( replace with a substitute)

Testing Pyramid
--------------

             E2E Tests (end to end Test,Super slow and is usually done on the end user side(browser))
		---(UI testing)---

    ----Integration Tests----(Whole page being rendered, which is rendering multiple components)

--------------Unit Test-----------(Largest, The majority of your test should be here)


What tools we will use ? 
------------
- Jest Testing Library (by Facebook)
- Vue Test Utis for component setup(setup out components in a node environment)
=================================================================================
Writting our First Test
------------------------
we don't need to import the functions as for jest will make them available for us 

describe()
-----------
This is just for our organizational purpose
This is a way to categorize our outputs

it()
----
Describs what the test is about

expect()
--------
Expectations to be tested

Full Example
-----------

describe("Basic Math", () => {
  it("Shouls add two Numbers", () => {
    expect(1 + 1).toBe(2);
  });
  it("Sustract two numbers", () => {
    expect(5 - 2).toBe(3);
  });
});

Output
------
 PASS  tests/unit/playground.test.js
  Basic Math
    ✓ Shouls add two Numbers (3 ms)
    ✓ Sustract two numbers (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.543 s
Ran all test suites.



Importing one of out function
You can Nest Descrbe Statements
--------------------------------
import { evenOrOdd } from "@/playground";
describe("Basic Math", () => {
  it("Shouls add two Numbers", () => {
    expect(1 + 1).toBe(2);
  });
  it("Sustract two numbers", () => {
    expect(5 - 2).toBe(3);
  });

  describe("Should Test Odd of even", () => {
    it("Indicate the numer is even", () => {
      expect(evenOrOdd(4)).toBe("Even");
    });
  });

  describe("When the number is odd", () => {
    it("Indicate the numer is odd", () => {
      expect(evenOrOdd(3)).toBe("Odd");
    });
  });
});



TEST DRIVEN DEVELOPMENT
----------------------
TDD: is a concept where we write out test first, before writting out implementation 

-Ensure you are testing the right thing
-Avoid duplication of tests
-Describe Why rather than the implementation
-Higher Test coverate
-Makes code easy to refactor
-lead to higher quality test and implementation

	RED --> GREEN --> REFACTOR
RED:we start from here , write a test for a function that does not exist yet,aka make a failing test
Green: write the implementation code that is going to make the test pass bare minimum
Refactor: Confidence to refactor our codes 



Making Out Test Run automatically
--------------------
We simply need to add this line of code in the package.json

  "test:watch": "vue-cli-service test:unit --watch",

and run the command : npm run test:watch

Enabling test Coverage:
------------------
This will automatically tell us what % of our code is being tested
we simply need to add the --coverage flag
"test:unit": "vue-cli-service test:unit --coverage",

---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |                   
 playground.js |     100 |      100 |     100 |     100 |                   
---------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.568 s





YOU CAN ALSO SET A TEST FOR A PARTICULAR VUE COMPONENT
----------------------------------------------------
Let's try this simple test to check if out component contains a set of text


import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";//import our component

describe("MainNav", () => {
  it("It Displays company Name", () => {
    const wrapper = mount(MainNav);
/*
  Optionally you can use a second argument in the mount founction , which accepts arguments
  just like the ones defines in out component it would look like this:
    const wrapper = mount(MainNav, {
      data() {
        return {
          company: "MozerFucker",
        };
      },
    });
  );
################ 
but the problem with this way is that out test knows too much about out implementation
tests should test behavior instead of implementation
*/

    expect(wrapper.html()).toMatch("Careers Junkie");
    console.log(wrapper.html());
  });
});



Alternatively you can set our test using the wrapper function
-----------------------------------------------------
Using the async Keyword it makes sure the changes get checked after the page has actually finished 
rendering 

describe("MainNav", () => {
  it("It Displays company Name", async () => {
    const wrapper = mount(MainNav);
    await wrapper.setData({
      company: "Super Corp",
    });
    expect(wrapper.text()).toMatch("Careers Junkie");
  });
});

finding an html element
-----------------------------------
When doing your test you can find your html element too ! 

   it("Displays meny items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll("[data-test='main-nav-list-item']");//All instance with that calss name
    const navigationMenuItems = wrapper.find("li");//return the first instance
    const navigationMenuText = navigationMenuItems.map((item) => item.text());
     expect(navigationMenuText).toEqual([
      "Team",
      "Locations",
      "Life at Junkies",
      "How we hire",
      "Student",
      "Jos",
    ]);
  });


##################### that way out data are a it coupled , what we can try to do is something like this

!!!!!!!!!!!! Beautiful
 <li v-for="item in menuItems" :key="item" class="flex h-full ml-9 first:ml-0" data-test="main-nav-list-item">

it("Displays meny items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuText = navigationMenuItems.map((item) => item.text());

    expect(navigationMenuText).toEqual([
      "Team",
      "Locations",
      "Life at Junkies",
      "How we hire",
      "Student",
      "Jos",
    ]);


Import a component in another component
----------------------
You have your manu Which is a component
You have your button which is also a component
you want to import your button in your manu

Step1: Go in the destination file(where you want your thing to be imported)
step2: Import The component using : import ActionButton from "name_of_the_component"
step3: configure the component by using the component config in the export brace

Example
--------
Destination file:
<template>
  <action-button></action-button>
</template>

<script>
import ActionButtonVue from "@/components/ActionButtonVue.vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
  },
  data() {...}
}...
===========================================================================================
===========================================================================================
===========================================================================================

VUE DIRECTIVES
--------------
A directive is a special vue command or function inline in out html that vue can recognize and 
vue knows that it should do something special with it 

1) v-bind:
-----------
connect data value from data configuration to an html value  

// Binding data value to an element
 <a v-bind:href="url" class="flex ">{{ company }}</a>

      Alternatively simply use : instead of v-bind:

 <a :href="url" class="flex ">{{ company }}</a>


You can use the object notation too
<button :class="{ primary: false }">Sign In</button>

<button :class="['one','two',computerprop]" > My BTN</button>
one and two are simple css classes we want applied everywhere, but computed properties can also be used 
here we are using v-bind on the class to list everything and values in an object that are true, then they gets to show up

--------------------------------------------------------------------------------------------------
v-for directive
--------------
Used to Iterate over some object

It is applied on the element you want to see repeated over and over again 


<ul class="flex h-full p-0 m-0">
    <li v-for="item in menuItems" :key="item"
     class="flex h-full ml-9 first:ml-0"data-test="main-nav-list-item" >
              <a href="" class="flex items-center">{{ item }}</a>
    </li>
</ul>


data() {
    return {
      menuItems: [
        "Team",
        "Locations",
        "Jos",
      ],}}

!!!!! :key attribute
-------
Key prop should always be provided when we have a v-for directive, vue is keeping track of our
html code in the background, and when you generate something dynamically, you need something dynamic 
that vue is going to use to keep track of our element, thus the key attribute
/
------------------------------------------------------------------------------------

v-if
CONDITION RENDERING
------------------
Vue offers us four condition rendering for this job
v-show, v-if, v-else, & v-else-if

v-show works alone while the last 3 works together
it does not work with v-else

condition rendering just like the name states is , renders somethin based on a condition

example:
--------
v-show
-------
This one will hide an element using the display none property
you can put it directly inside of an element you want to apply change to
<p v-show="true">Hello there cake</p> //will show
<p v-show="false">Not there cake</p> //will not show



The Code bellow will make sure only one item is showing ,

<p v-show="have">Hello there cake</p>
<p v-show="!have">Not there cake</p>

data(){
return{
have:false
}
}

?W?V6f,$4@tL9fe


v-if v-else,v-else-if directive
----------------
Unlike v-show , v-if completely removes an element from the html file, it does not apply a display none property

will run if a condition is only true, otherwise , jump to the else statement
!!! note that , there must not be any element in between these two elements bellow(p )
Otherwise it will not work


v-if and v-else needs to be adjacent to each other

<p v-if="have">Hello there cake</p>
<p v-else>Not there cake</p>

You can compare with the v-if directive

<ul>
    <li v-if="fruit==`apple`">Apple</li>
    <li v-else-if="fruit==`orange`">Apple</li>
    <li v-else>Other</li>
</ul>


View click
------------
// Traditional js event addEventListener('click', ()=>{})
The Equivalent vue listener:
<button v-on:click="methodName">Click me</button>

Adding a click event is as easy as using the v-on:click directive
//Calling multiple functions
<button @click="m2,m2">Click Me</button>
//calling an expression
<button @click="num++">Click Me</button>




Vue Props /
----------
How can we pass data from a aprent to a child element ? 
well, very easy. you are going to use what we call props
They are uniDirectional and they pass data from parent to child

!! You want to create a dynamic button to be reused and you wan to change the text of it 
When you want to use it. you will make the button a chid component and use prop to make it expect data from the parent

step1. Child Component 
-------------------
<template>
    <button
      class="px-5 py-3 text-white rounded bg-brand-blue-1 hover:shadow-blue"
        @click="handleClick">
          {{ text }}// Using our prop in our template
    </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"],//Defining the name of your prop in your child component
};
</script>
/

Step2. Pass data to our child from our parent 
--------------------
  <action-button
            v-else
            text="Sign in" 
            data-test="login-button"
            @click="loginUser"/>

//Importing our component 
  components: {
    ActionButton,
  }

-------------------------------------------------------------------


Computed Properties 
---------------------
Computed properties are just like data property, but they shoudl be used when we have data that 
are derived from other data , data that are dependent on other data 


data(){
  //Holds independed data , they exists separately from anything else 
  //Ex: Width and hight of a rectangle (independent values)
  width:5,
  height:10,
}
computed(){
  //data that exists from a combination of different data properties for example 
  //Ex: are of the rectangle cause it depends on both, width and height 
  !!Your properties should be written in terms of methods
  area(){
    return this.width * this.height;
  }
}

Example Binding multiple objects css class from computed properties 
---------------------------
!! We have one button and we want to be changing the design of the button accordingly

<template>//Our Button 
  <button :class="buttonClass">//Prop that will return classes according to somethings
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text", "isPrimary"],//We are getting the text and isPrimary properties from our parent
  /*More sophisticated way of writting pros
    props: {
      text: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: false,
        default: "primary",
      },
    },
  */

  data() {
    return {
    //Independedn property that defines whether some properties should or should not be applied
      primary: this.isPrimary,// this.isPrimary reffer to the isPrimary property of the parent  
    };
  },
  computed: {
    buttonClass() {//Commputed property which return either one of the class but not both 
      return {
        primary: this.primary,
        secondary: !this.primary,
      }; //COmputed property that return an object, will return either primary or secondary
    },
  },
};/ 
</script>
<style scoped>
button {
  @apply px-5 py-3 rounded font-medium;
}
.primary {
  //Styles to be applied on the  primary class
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}
.secondary {
  //Styles to be applied on the secondary  class
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
/

Our Parent component
---------
 <action-button
    v-else
    text="Sign in"
    :is-primary="true"
    data-test="login-button"
    @click="loginUser"
/>


More Elegant Example
--------------
<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text", "type"],

  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>
<style scoped>
button {
  @apply px-5 py-3 rounded font-medium;
}
.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>


Parent 
-----
<action-button
            v-else
            text="Sign in"
            type="secondary"
            data-test="login-button"
            @click="loginUser"
          />


==========================================================================================
!!!!!!!Review
Props: 
Props are arguments that we can pass to components whenever we instantiate them.

Computed Property: 
is a derived dependent piece of data, we can use a computed property the same way as data property
needs some source of data to work

!Vue interprets prop values as string, use v-bind to pass dynamic values (arrays,objects,booleans etc)

! We can use the classes method on vue test utills wrapper oject to test whether a class is present on the target




============================
Component Life Cycle




Two ways data binding 
======================
Two ways data binding is simply a way we need to bind data from  a given form in sync with our properties
when you change value from an input therefore it shoudl update the parent 


More Verbos Way
-----------
 <input
    :value="role"
    type="text"
    placeholder="Software Engineer"
    class="w-full text-lg font-normal focus:outline-none"
    @input="updateRole"
  />

data() {
    return {
      role: "",
    };
  },
  methods: {
    updateRole($event) {
      this.role = $event.target.value;
    },
  },


ShortCut Way
-----------
<input type="text" v-model="msg" />
Where msg is the name of your data property, and this created the two ways data binding 



Events in vue
=====================
Events are special way a child component can pass data to the parent, it's simply the inverse of props
Passing data from a child to a parent you will use $emit

Child Component
------
<input
    type="text"
    :value="value"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
    //we invoke this method when there is an input
  />

// We use props for parent to pass data to this component
props: {
    placeholder: {
      required: false,
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: "",
    };
  },

  methods: {
    handleInput($event) {
      // this method emits a handler which we are going to access from the parent then do something
// emit simply is used to pass data from child to parent component
      this.$emit("handleInput", this.value);
    },

Parent component
------
Import our component
Make use of our emited signal
<text-input placeholder="Software Engineer" @handleInput="upateRole" />
data{
  return{
    role:""
  }
},
 methods: {
    upateRole(payload) {
      this.role = payload;
    },
  },


!!!! Also alternatively you can use this shortcut
<text-input placeholder="Software Engineer" @handleInput="role = $event" />


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Refactoring the code above
-------------
// CHild Component
<template>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>
<script>
export default {
  name: "TextInput",

  props: {
    placeholder: {
      required: false,
      type: String,
      default: "",
    },
    modelValue: {
      required: true,
      type: String,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>


Parent component
------------------

<text-input v-model="role" placeholder="Software Engineer" />
    
REVIEW
------
Vue Component have access to an $emit method via the this Keyword

$emit method sends a message/event to the parent component

the first argument ot $emit is the event name, the flowup arument represent data that we'd like to pass up


in The parent component we can react to a child component emitted event using the v-on directive (or @ shortcut) 

to invoke a component method for each emitted event, we declare the method in the method object and provie its name

@handleInput="SomeMethod"

===================================================================
In Our App we simply use 
  <router-view />

Vue Routes
-----------

Creating a Hyperlink
------
<router-link to="/">Home</router-link>

<router-link to="/jobs/restuls">Home</router-link>


Router Components in vue
-------------------

this.$route
----------
Stores informations about the page you are on , what are the Query parameters what is the name etc.

this.$router
-----------
this is used for user navigation, full of much useful methods 


Navigating with Route
--------------
navigating a user from one route to another

 <button @click="goTOHome">Go To home Page</button>
/
<script>
methods: {
    goTOHome() {
      this.$router.push("/");//using hard coded path
      this.$router.push({path:"/"});//same results but more verbos
      this.$router.push({name:"home"}); //using the name declared in route
    },
  },
</script>
/

Creating A link
---------------
 <router-link
          :to="{ name: 'home' }"
          class="flex items-center px-4 h-full text-xl"
        >
          Careers Junkie
        </router-link>
/

Create a link with a parameter
-----------------------
step1: create your page in the views folder
step2: Go in the route file 
step3: Create your link and boom

step1:
<template>
  <div>Job Page for job {{ currentJobId }}</div>
</template>
<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
};
</script>

/
step2:
import JobView from "@/views/JobView.vue";

step3
const routes=[
{
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
]
 



Lazy loading 
------------
Sinse vue is a single page framework
if we do not use lazy loading , every component you possibly create in your project 
will be loaded to him which is kinda like a bummer, you don't really need that 
what you need to do is loading simply componenets of a particular vuefile or page or whatever the heck you call it

To use Lazy loading is very Simple 
-------------
In your Route, what you need to do is to change the way you import you files

instead of something like this
import HomeView from "@/views/HomeView.vue";
import JobsResultVue from "@/views/JobsResultVue.vue";
import JobView from "@/views/JobView.vue";

instead use 

const HomeView = () => import("@/views/HomeView.vue");
const JobsResultVue = () => import("@/views/JobsResultVue.vue");
const JobView = () => import("@/views/JobView.vue");

Now view will be only rendering these components when it needs them 
and after you have rendered a component you do no need to worry on re-rendering it again
as for view will cache the content and you will not need to reload them


!!!!!!!
muliple rendering (for a fast and smooth rendering)
-----
What if you need a set of view to render at the same time , let's say you want job and JobsResultVue to render at the same time 
for whatever the reason you need this kind of behavior view allow it too

const JobsResultVue = () =>  import(/* webpackChunkName: "jobs"*/ "@/views/JobsResultVue.vue");
const JobView = () =>  import(/* webpackChunkName: "jobs"*/ "@/views/JobView.vue");

Both of these files will be loading at the same time


==================================================================================================================================================================================
==================================================================================================================================================================================
Setup A fake Server We use json Sever
------------------
Installing the server
----------
npm install --include=dev json-server
//we use the --include=dev cause we only need it in our development stage

Setup the server to watch 
---------
In our package.json
  "scripts": {
      ...
    "backend": "json-server --watch db.json"
  }

Running our server to serve data
--------------
npm run backend

output our Endpoint
--

  Resources
  http://localhost:3000/jobs

==================================================================================================================================================================================
==================================================================================================================================================================================
Making Requests to An api
---------------------------
To make an http request we are going to install an Library called axios

npm install --save axios
//we use --save to save it to our dependency file

How to make a request to an endpoint using axios
----------
const axios = require("axios");//import axios

const url = "http://localhost:3000/jobs";//define our url

axios.get(url).then((response) => {
  console.log(response.data);//returned data from the url
});

Alternatively you can use
const fetch=async ()=>{
const response=await axios.get(url);
  console.log(response.data);
};


Where To make API requests
-------------------
The recommended place to make API requests is in the Mounted Hook
 data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    // When the component is done mounting
    axios.get("http://localhost:3000/jobs").then((response) => {
      this.jobs = response.data;
    });
  },

Alternatively you can use the syntax Sugar

async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },



VUE environment Variable
--------------------------
Three environment
  -development
  -production
  -text

localhost:3000/jobs
api.mycompany.com/jobs

when you host your site things will be different and how you specify them is in the env



==================================================================================================
VUEX
---- 
Vue applications consist of state 
state is the data that components rely upon

vue is reative when the state changes vue update the view

when multiple components shares a state we want to use vuex
eg: DarkMode, Language, UserLoggedIn 


Installing Vuex
---------
vue add vuex

Configure vuex
-----------
const store = createStore({
  state() {//Core data of the vuex store, data in a component
    return {
      isLoggedIn: false,
    };
  }, //data in a component,changing over time
   
});

export default store;

You also have other methods 
  // getters: {},
  // mutations: {},
  // actions: {},
  // modules: {},


!!!!!!!
Mutations
--------
We can not just interact with the hight level state component easily, we don't want to give a component that much power
instead we use what we call a Mutation which will be changing our state  
Component can change a state using a specific mutation
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  }, 
  mutations:{
    /* Set of methods that are going to replace the state of our app
    Usually written in uppercase later*/
    LOGIN_USER(state){
      /*Every object will receive as argument the state, which we can modify in the body
      Best practive not to create new properties in here too, we never want to do it here (eg: state.moana="movie") must have initial state we want to modify*/
      state.isLoggedIn=true,
    },
  },
  /*This strict mode makes sure that we indeed stays on the principle of modifying our element strictly in the mutation 
  If a component try to access the state manually and try to modify it , if strict mode is true then it can not do so */
  strict:process.env.NODE_ENV !="production" // Only allow it to work in development 
});


CleanCode
----------
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    LOGIN_USER(state) {
      state.isLoggedIn = true;
    },
  },
  strict: process.env.NODE_ENV != "production",
});


!!!!!!!!!!!!!!
Mutation is the only place and only way we are allowed to modify the vuex store


How to Execute the mutation from our component
----------------------
console.log("State Before" + store.state.isLoggedIn);
store.commit("LOGIN_USER"); //Modify the state through our mutation
console.log("State after" + store.state.isLoggedIn);



MapState
---------
MapState: helps use connect vuex Store state to component properties

A simple replacement of how we access state properties

  isLoggedIn() {
        return this.$store.state.isLoggedIn;
  },

Can be refactored to be 

  ...mapState({//Better if you have multiple properties you can do them on the same line
      isLoggedIn: (state) => state.isLoggedIn,
      a:(state)=>state.a,
      b:(state)=>state.b,
    }),
Can also be made even cleaner with

...mapState({//clean version of the above syntax, you can also change the reference name
      isLoggedIn: "isLoggedIn",
    }),

Final Option which is even better

//Sinse we don't want to change the reference name most of the time then we want to do this
...mapState(["isLoggedIn"]),
You are going to have all these working in your computed property

MapMutations
------------
Map mutations helps us connect mutations to the vuex store to methods on our may nav 
    ...mapMutations([LOGIN_USER]),



How To handle ASYNCRONOUS OPERATIONS Usin Vuex?
--------------------------------------------
Mutations has to be ASYNCRONOUS, we can not have asyncronous operations over there 

An action is a method that commits a mutation. actions allow for asyncronous operations
for example, we can make an api call in the action, then commit the mutation when we receive the data


export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";
import getJobs from "@/api/getJos";

export const state = () => {
  return {
    jobs: [],
  };
};

export const mutations = {
  [RECEIVE_JOBS](state, jobs) {//our mutation to pass the action data to the jobs state
    state.jobs = jobs;
  },
};

export const actions = {
[FETCH_JOBS]: async (context) => {//mutation also has a first argument which is context, same as mutations which has state as argument
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings); 
    // above line is same as RECEIVE_JOBS(state,joblisting) but must be written as shown above
  },
}

Example of a mutations
-------
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },


!!!!!!!!!
!!!!!!!
!!!!!!
!!!
The Idea in our route (index) is to keep track of data, just the same way vue does it 
in it's files
Example: 

State()----Very similar to the----data() of our vue component
mutations----Very similar to the----method: of our vue component
getter ----Very similar to the---- computed: of our vue component 

Getters 
--------
//This getter is derived to our jobs array, thus we are using our getter just like a computed property
export const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    console.log(uniqueOrganizations);
    return uniqueOrganizations;
  },
};

Component
--------
 computed: {
    UNIQUE_ORGANIZATIONS() {
      return this.$store.getters.UNIQUE_ORGANIZATIONS;
    },
  },



  ===================================================================================
  Vue SLOTS
  -----------
  Slot is something that is waiting to be filled, a place in our component where we can customize our codes 

child
-----
<div>
  <h3>hello world</h3>
  <slot> </slot>
</div>

parent
------
<accordion>
//Slot placeholer
    <h2>this will go right where the slot is!</h2>
</accordion>

Props vs Slot
--------------
Props and slots are very similar, in a way that they are both used to provide content from parent down to child
we use props when we have a simple value that is not html, for simiple input we use a prop 
when it is a string value a number , boolean , array or an object, 
slot allow you to passs a whole chunk of html, a complex bundle of html


fallback for a slot
-------------------
<slot> data will be rendered if my parent does not give me data</slot>




Testing a Slot
=============
import { mount } from "@vue/test-utils";
import Accordion from "@/components/Shared/Accordion";

describe("Accordion", () => {
  it("Renders Child", async () => {
    const wrapper = mount(Accordion, {
      global: { 
      // font awesome is a valid tag in jest , therefore we have to stub it
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "Test Header",
      },
      slots: {
        // Slot with no name is called default
        default: "<h3>My nested child</h3>", //give some data to our slot
      },
    });
    expect(wrapper.text()).not.toMatch("My nested child"); //component is not yet there(accordion not expended yet)

    const clickableArea = wrapper.find("[data-test='clickable-area']");// find the slot we want to test
    await clickableArea.trigger("click"); //trigger a click(simulate a user clicking on our slot)
    expect(wrapper.text()).toMatch("My nested child"); //Accordion clicked and now the text is somwhere
  });

   describe("When we do not provide custom child content", () => {//check if default text is being rendered
    it("Renders Default Content", async () => {
      const wrapper = mount(Accordion, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        props: {
          header: "Test Header",
        },
      });
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch(
        "Whoops, Somebody forgot to populate me yo !"
      );
    });
  });
});


================================================================================

Refactoring our test file
-------------------------
import { mount } from "@vue/test-utils";
import Accordion from "@/components/Shared/Accordion";

describe("Accordion", () => {
  const createConfig = (config = {}) => ({
    global: {      8
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Test Header",
    },
    slots: {
      // Slot with no name is called default
      default: "<h3>My nested child</h3>",
    },
    ...config,
  });

  it("Renders Child", async () => {
    const slots = {
      default: "<h3>My nested child</h3>",
    };
    const config = { slots };
    const wrapper = mount(Accordion, createConfig(config));
    expect(wrapper.text()).not.toMatch("My nested child"); //component is not yet there(accordion not expended yet)

    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click"); //trigger a click
    expect(wrapper.text()).toMatch("My nested child"); //Accordion clicked and now the text is somwhere
  });
  describe("When we do not provide custom child content", () => {
    it("Renders Default Content", async () => {
      const slots = {};
      const config = { slots };
      const wrapper = mount(Accordion, createConfig(config));
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch(
        "Whoops, Somebody forgot to populate me yo !"
      );
    });
  });
});




Slot Props
----------
We can pass a prop to a slot so that a parent can have access to the prop 

component
--------
<li v-for="spotligth in spotlights" :key="spotlight.id">
  <slot :spotlight="spotlight"></slot>
</li>

Parent
------
Parent Will render a piece of html right inside the li and it will access the spotlight object 







===================================================================================
VUE REACTIVITY
-----------
-We use the ref value so that vue can keep track of the value that needs to be watched
-We use computed to keep track of the reactivity 
We have to import them this way :
const { ref, computed } = require("vue");


const name=ref("Ilunga ")
// name will be accessed from name.value instead of name




Example Using primitive Values
----------------
const { ref, computed } = require("vue");
let a = ref(3);
let b = ref(2);
let c = computed(() => a.value + b.value);

console.log(c.value);
a.value = 10;
console.log(c.value);


With String
----------
const name = ref("Boris");
const title = computed(() => name.value + " The great");

console.log(title.value);
name.value = "Gisas";
console.log(title.value);




ON OBJECTS
----------
const person = ref({
  name: "Ilunga",
});

const title = computed(() => person.value.name + " The great");
console.log(title.value);
person.value.name = "Daniel";
console.log(title.value);


Reactive 
--------
the reactive function is used in optimizattion of objects/complex object 
Instead of using ref on object we instead use reactive
Only meant to be used with objects



toRef
-----
Used to reference object property to a simple variable

const { reactive, computed, toRef } = require("vue");
const person = reactive({
  firstName: "Ilunga",
  lastName: "Gisa Daniel",
});

//Create our reactive variables using the toRef property
const firstName = toRef(person, "firstName"); // Just like the ref, we have to reference the .value from our object
const lastName = toRef(person, "lastName");
console.log(firstName.value + " =>" + lastName.value);

const title = computed(() => `${firstName.value} ${lastName.value}  The great`);
// When referencing to out created variables, we must also use the .value cause they are not objects
console.log(title.value);
person.firstName = "Danielerat";
console.log(title.value);




toRefs
----------
the toRefs also accepts reactive functions just like the toRef, 
but making all indivitual property reactive, so we can easily desctructure 

//You can destructure these values like this

const { firstName, lastName } = toRefs(person);
console.log(firstName.value + " =>" + lastName.value);

================================================================================================

COMPOSITION API 
----------------
Introduced in vue3

Composition API Bundles together all components logic in a single setup method that is part of the vue configuration object 
export default {
  name: "Accordion",
  setup() {
    // In the new composition api we must alwasy define a setup method
    // vue will run this function once
    // We nolonger use the thi. keyword, we nolonger need it ,
    // This function is going to run before the created and mounted lifeCycle hooks
    // We must alwasy retrun an object
   
    return { "Must return things to be used in our template" };
  },
}


Example 
--------
// Import our vue to be able to use reactive components
import { ref } from "vue";

export default {
  name: "Accordion",

  setup() {
    // the ref method will make our header reactive
    const header = ref("Cool title of");
    
    // Our Function to change the value of Header
    const open = () => {
      header.value = "No way";//Change the value of header to nowopenay
    };

    return { header, open };
    //REturn our function and header object so we can use it in out template
  },
}



REFACTORING SOME LOGIC IN A COMPOTISION API
----------------
  //   data() {
  //     return {
  //       isOpen: false,
  //     };
  //   },

  //   computed: {
  //     caratIcon() {
  //       return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
  //     },
  //   },
  //   methods: {
  //     open() {
  //       return (this.isOpen = !this.isOpen);
  //     },
  //   },

 setup() {
    const isOpen = ref(false);
    const header = ref("Cool title of");

    const open = () => {
      // Our method which might be reacting to a click event
      isOpen.value = !isOpen.value;
    };
    //Our computed property which is now reactive and will be rerunning upOn Element change
    const caratIcon = computed(() =>
      isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
    );
// Return them so we can be able to use them in our template
    return { header, open, isOpen, caratIcon };
  },


!!!!!!
!!!!
!!!
!!
ref ~ data
--------
YOU CAN CONSIDER ref as an equivalent to data method in our Options API
it's a value that will change over time, aka reactive 

function ~ method 
--------------
A function can be compared to a method in our options api

computed ~ computed properties
----------------------------
computed can be seen as a 
const caratIcon = computed(() =>
      isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
    );




EXAMPLE TWO: refactoring our action button to use composition API
--------------
// export default {
//   name: "ActionButton",
  // props: {
  //   text: {
  //     type: String,
  //     required: true,
  //   },
  //   type: {
  //     type: String,
  //     required: false,
  //     default: "primary",
  //     validator(value) {
  //       return ["primary", "secondary"].includes(value);
  //     },
  //   },
  // },

  // computed: {
  //   buttonClass() {
  //     return {
  //       [this.type]: true,
  //     };
  //   },
  // },

Composition Api implementation
-------
import { computed } from "vue";
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },


  setup(props) {// the setups accepts props as the first Argument 
    const buttonClass = computed(() => {
      return { [props.type]: true };
    });

// You can also destructure out value using the toRefs
    setup(props) {
      const { type } = toRefs(props);
      const buttonClass = computed(() => {
      return { [type.value]: true };
    });


    return { buttonClass };
  },
};



EXAMPLE REFACTORING USING THE COMPOSITION API
----------------
-import { mapGetters } from "vuex";
-import { FILTERED_JOBS } from "@/store/constants";
computed: {//OLD IMPLEMENTATION
-    onJobResultsPage() {
-      return this.$route.name === "JobResults";
-    },
-    ...mapGetters([FILTERED_JOBS]),
}

USING COMPOSITION API
-------------
  
  import { useRoute } from "vue-router";//So we can access the this.$route property to get the route name
import { useStore } from "vuex";//So we can use the getters from the store since we do not have access to this.$store.getters anymore
import { computed } from "vue";//So we can use the reactivity of a computed component
export default {
  name: "Subnav",
  setup() {
    const route = useRoute();
    const onJobResultsPage = computed(() => route.name === "JobResults");

    const store = useStore();
    const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);

    return { onJobResultsPage, FILTERED_JOBS };
  },
};


what is a Composable
---------
Since vue is offering reactivity even in plain js files we can use composable aka enclosing 
some complexity in some files and then reuse them later on 

the code above can be enclosed to a composable component so that everytime we want to 
check for a link we simply reuse it 

it would look something like this 

import { computed } from "vue";
import { useRoute } from "vue-router";
const useConfirmRoute = (routeName) => {
  const route = useRoute();
  return computed(() => route.name === routeName);
};
export default useConfirmRoute;





VUE LIFE Cycle HOOKS IN COMPOSITION API
-----------------------
before in out options api we used to have things like mounted(lifecycle hook)in out vue file
but in the composition api we now have access to all those hooks under the form of functions
onMounted, onBeforeMount, etc...