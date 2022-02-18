<script setup>
import { ref } from 'vue'
const count = ref(0);
 
// load your data, for example:
// const {data: videos} = await useFetch('http://localhost:1337/api/videos')
</script>
 
 
<template>
 <div class="container p-3">
   <h2>Seleziona i dati e invia</h2>
 </div>
 
<div class="container myform">
 
 <form >
   <div class="row">
     <div class="col-lg-4 mb-3">
         <input type="text" class="form-control" id="cod_auth" placeholder="Cod. autorizzazione" required>
       
     </div>
     <div class="col-lg-4 mb-3">   
         <input class="form-control" list="datalistOptions" id="partenza" placeholder="Luogo partenza" required>
         <datalist id="datalistOptions">
           <option value="La Spezia" />
           <option value="Porto Venere" />
           <option value="Riomaggiore" />
           <option value="Manarola" />
           <option value="Corniglia" />
           <option value="Vernazza" />
           <option value="Monterosso" />
           <option value="Levanto" />
           <option value="Camogli" />
         </datalist>
       
     </div>
     <div class="col-lg-4 mb-3">   
       <div class="btn-toolbar" role="toolbar">
          <div class="btn-group w-100" role="group">
              <button class="btn btn-info" type="button" @click="count++">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
              </button>
              <button class="btn btn-info mr-3" type="button" @click="count--">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
              </button>

          <input type="text" class="form-control" :value="count" aria-describedby="basic-addon1" disabled>
          </div>
        </div>
     </div>
   </div>
  
   <div class="mt-3 mb-3 form-check">
     <input type="checkbox" class="form-check-input" id="check_ok" required>
     <label class="form-check-label" for="check_ok">Consapevole che quanto dichiarato risponde al vero...ecc..</label>
   </div>
   <button type="submit" class="btn btn-primary">Invia</button>
 </form>
 
</div>
 
</template>
 
 

