// Importiert das React Hook `useRef`
// Mit useRef auf DOM-Elemente ( Button) direkt zugreifen.
import { useRef } from "react";

function Survey() {
  // Referenz zum Submit-Button (damit wir ihn aktivieren/deaktivieren können)
  const submitButtonRef = useRef(null);

  // Hauptfunktion, wenn das Formular abgeschickt wird
  const handleSubmit = (event) => {
    event.preventDefault(); // Verhindert das Neuladen der Seite (Standardverhalten von Formularen)

    const form = event.target; // Zugriff auf das <form>-Element selbst

    // Lese alle Formularwerte aus dem DOM
    const name = form.elements.name.value.trim(); // .trim() entfernt Leerzeichen am Anfang/Ende
    const age = parseInt(form.elements.age.value, 10); // String in Zahl umwandeln
    const color = form.elements.color.value;
    const recommend = form.elements.recommend.checked; // Checkbox ist true/false

    // Deaktiviere sofort den Button, um mehrfaches Absenden zu verhindern
    submitButtonRef.current.disabled = true;

    // ----------- VALIDIERUNG ----------------

    // 1. Name leer?
    if (!name) {
      alert("Bitte gib deinen Namen ein.");
      submitButtonRef.current.disabled = false; // Button wieder aktivieren
      return;
    }

    // 2. Name zu kurz?
    if (name.length < 2) {
      alert("Der Name muss mindestens 2 Zeichen lang sein.");
      submitButtonRef.current.disabled = false;
      return;
    }

    // 3. Alter leer?
    if (!form.elements.age.value) {
      alert("Bitte gib dein Alter ein.");
      submitButtonRef.current.disabled = false;
      return;
    }

    // 4. Alter außerhalb erlaubter Grenzen?
    if (isNaN(age) || age < 5 || age > 120) {
      alert("Das Alter muss zwischen 5 und 120 liegen.");
      submitButtonRef.current.disabled = false;
      return;
    }

    // ----------- VALIDIERUNG ERFOLGREICH ----------------

    // Logge die gesammelten Daten in die Konsole
    console.log({
      name,
      age,
      color,
      recommend,
    });

    // Zeige eine Dankesmeldung
    alert("Danke für das Ausfüllen der Umfrage!");

    // Formular zurücksetzen (alle Felder leeren)
    form.reset();

    // Button wird nach 3 Sekunden wieder aktiviert (Simulation einer "Verarbeitung")
    setTimeout(() => {
      submitButtonRef.current.disabled = false;
    }, 3000);
  };

  // ----------------- UI / RENDERING -------------------

  return (
    // Hintergrundfarbe und zentrierte Ausrichtung (horizontal)
    <div
      className="flex justify-center items-center py-10"
      style={{ backgroundColor: "#e0f7fa" }} // hellblauer Hintergrund
    >
      <form
        onSubmit={handleSubmit} // Eventhandler zuweisen
        className="space-y-4 max-w-md w-full px-6" // Abstand zwischen Feldern, maximale Breite
        style={{ color: "#422ad5" }} // Schriftfarbe lila/blau
      >
        {/* Überschrift */}
        <h2 className="text-2xl font-bold text-center mb-4">Mini-Umfrage</h2>

        {/* Eingabe: Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input input-bordered w-full" // Tailwind + DaisyUI Style
          />
        </div>

        {/* Eingabe: Alter */}
        <div>
          <label htmlFor="age" className="block mb-1 font-medium">
            Alter:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="input input-bordered w-full"
          />
        </div>

        {/* Auswahl: Lieblingsfarbe */}
        <div>
          <label htmlFor="color" className="block mb-1 font-medium">
            Lieblingsfarbe:
          </label>
          <select
            name="color"
            id="color"
            className="select select-bordered w-full"
          >
            <option value="rot">Rot</option>
            <option value="blau">Blau</option>
            <option value="grün">Grün</option>
          </select>
        </div>

        {/* Checkbox: Empfehlung */}
        <div>
          <label className="block mb-1 font-medium">
            Würdest du unsere Seite weiterempfehlen?
          </label>
          <input
            type="checkbox"
            id="recommend"
            name="recommend"
            className="mr-2"
          />
          <label htmlFor="recommend">Ja</label>
        </div>

        {/* Absende-Button */}
        <button
          type="submit"
          ref={submitButtonRef} // Referenz zum Button setzen
          className="btn btn-primary w-full"
        >
          Senden
        </button>
      </form>
    </div>
  );
}

export default Survey;

//useRef	Zugriff auf DOM-Elemente wie den Button
// event.preventDefault()	Verhindert Standardverhalten des Browsers
// event.target.elements	Zugriff auf alle Formularfelder
// form.reset()	Setzt das Formular zurück
// alert()	Zeigt eine Meldung im Browser
// setTimeout()	Wartet z. B. 3 Sekunden, bevor der Button reaktiviert wird
