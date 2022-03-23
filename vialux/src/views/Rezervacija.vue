<template>
<div class="Rezervacija">
<h1>Potvrda rezervacije</h1>
<div class="container">
<div class="row">
<div class="col-sm"></div>
<div class="col-sm">
<form>
<div class="form-group">
  <h2>Osobni podaci</h2>
  <p>(*) Molimo Vas da ispunite sve tražene podatke.</p>
<label for="exampleInputName">Ime i prezime *</label>
<input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Ime i prezime" />
</div>
<div class="form-group">
<label for="exampleInputBrojtelefona">Broj telefona *</label>
<input type="text" class="form-control" id="exampleInputNumber" placeholder="Broj telefona" />
</div>
<div class="form-group">
<label for="exampleInputEmail">E-mail *</label>
<input type="email" class="form-control"
id="exampleInputEmail" placeholder="E-mail" />
<br>
<h2>Podaci o villi</h2>
<label for="Name">Ime ville koju želite rezervirati *</label>
<br>
  <select id="villa" name="villa">
    <option value="prva">Prva</option>
    <option value="druga">Druga</option>
    <option value="treća" selected>Treća</option>
    <option value="četvrta">Četvrta</option>
    <br>
  </select>
  <br>
<label for="Lokacija">Lokacija (u kojem mjestu se villa nalazi) *</label>
<br>
  <select id="lokacija" name="lokacija">
    <option value="Pula">Pula</option>
    <option value="Rovinj">Rovinj</option>
    <option value="Poreč">Poreč</option>
    <option value="Zadar" selected>Zadar</option>
    <option value="Šibenik">Šibenik</option>
    <option value="Split">Split</option>
    <option value="Dubrovnik">Dubrovnik</option>
</select>
</div>
<div class="form-group">
<label for="exampleInputBrojosoba">Broj osoba *</label>
<br>
<input type="number" max="12" min="1" id="exampleInputBrojosoba"/>
</div>
<label for="Datum">Datum *</label>
<input type="date" class="form-control" id="Datum" placeholder="Datum" />
<br>
<button type="submit" class="btn btn-primary">Potvrdi</button>
</form>
</div>
<div class="col-sm"></div>
</div>
</div>
</div>
</template>