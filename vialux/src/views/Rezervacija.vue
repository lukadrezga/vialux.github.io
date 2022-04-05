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
              <input
                type="name"
                class="form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
                placeholder="Ime i prezime"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputBrojtelefona">Broj telefona *</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputNumber"
                placeholder="Broj telefona"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail">E-mail *</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                placeholder="E-mail"
              />
              <br />
              <h2>Podaci o villi</h2>
              <label for="Name">Ime ville koju želite rezervirati *</label>
              <br />
              <select id="villa" name="villa">
                <option value="Frida">Frida</option>
                <option value="Stancija Barancija">Stancija Barancija</option>
                <option value="Korcula Diamond" selected>
                  Korcula Diamond
                </option>
                <option value="Perla">Perla</option>
                <option value="Medaki">Medaki</option>
                <option value="Bay">Bay</option>
                <option value="Venus">Venus</option>
                <option value="Mercury">Mercury</option>
                <br />
              </select>
              <br />
              <label for="Lokacija"
                >Lokacija (u kojem mjestu se villa nalazi) *</label
              >
              <br />
              <select id="lokacija" name="lokacija">
                <option value="Vabriga">Vabriga</option>
                <option value="Buje">Buje</option>
                <option value="Korčula">Korčula</option>
                <option value="Pag" selected>Pag</option>
                <option value="Čabrunići">Čabrunići</option>
                <option value="Medaki">Medaki</option>
                <option value="Hvar">Hvar</option>
                <option value="Rakalj">Rakalj</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputBrojosoba">Broj osoba *</label>
              <br />
              <input
                type="number"
                max="12"
                min="1"
                id="exampleInputBrojosoba"
              />
            </div>
            <label for="Datum">Datum *</label>
            <input
              type="date"
              class="form-control"
              id="Datum"
              placeholder="Datum"
            />
            <br />
            <h2>Naplata rezervacije</h2>
            <label for="Name"
              >Molimo odaberite način naplate rezervacije objekta*</label
            >
            <br />
            <select id="naplata" name="naplata">
              <option value="naplata1">
                Naplata prilikom dolaska u smještaj
              </option>
              <option value="naplata2">Naplata internetom</option>
              <br />
            </select>
            <br />
            <br />
            <a
              href="#"
              onClick="myFunction()"
              type="submit"
              class="btn btn-primary"
              >Potvrdi</a
            >
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
myFunction = function () {
  alert("Rezervacija je uspješno izvršena!");
};
</script>
